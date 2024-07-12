import { watch } from "fs/promises";
import { compile } from "sass";
import { join, basename } from "path";
import chalk from "chalk";
import { mkdir, writeFile, readdir } from "fs/promises";

const themesDir = new URL("../themes", import.meta.url).pathname;
const outputDir = new URL("../css", import.meta.url).pathname;

// Ensure the output directory exists
async function ensureOutputDir() {
  try {
    console.log(chalk.blue("Ensuring the out directory exists..."));
    await mkdir(outputDir, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "EEXIST") {
      throw error;
    }
  }
}

async function compileSass(file: string): Promise<void> {
  const baseName = basename(file, ".scss");
  const outFile = join(outputDir, `${baseName}.css`);
  console.log(chalk.blue("Compiling sass..."));

  try {
    const result = compile(file, {
      style: "compressed",
      loadPaths: ["node_modules"],
    });

    await writeFile(outFile, result.css);

    console.log(chalk.green.bold(`Compiled ${file} to ${outFile}`));
  } catch (error) {
    console.error(
      chalk.red(`Error compiling ${file}:`, (error as Error).message)
    );
  }
}

async function watchDirectory(): Promise<void> {
  console.log(chalk.cyan(`Watching for SCSS changes in ${themesDir}`));

  const watcher = watch(themesDir, { recursive: true });

  // Setup graceful shutdown
  let isShuttingDown = false;

  const cleanup = () => {
    if (!isShuttingDown) {
      isShuttingDown = true;
      console.log(chalk.yellow("\nGracefully shutting down..."));
      process.exit(0);
    }
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  try {
    for await (const event of watcher) {
      if (isShuttingDown) break;

      if (event.filename && event.filename.endsWith(".scss")) {
        const file = join(themesDir, event.filename);
        console.log(chalk.blue(`File ${file} has been changed`));
        await compileSass(file);
      }
    }
  } catch (error) {
    console.error(chalk.red("Watch error:", error));
  } finally {
    cleanup();
  }
}
// Initial compilation of existing files
async function initialCompile(): Promise<void> {
  const files = await readdir(themesDir);
  for (const file of files) {
    if (file.endsWith(".scss")) {
      await compileSass(join(themesDir, file));
    }
  }
}

// Run initial compilation and then start watching
async function main() {
  await ensureOutputDir();
  await initialCompile();
  await watchDirectory();
}

main().catch((error) => {
  console.error(chalk.red(error));
});
