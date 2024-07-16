import { Layout } from "components/Layout";
import type { Theme } from "types";

type Props = {
  theme: Theme;
};

export const ThemeLayout = ({ theme }: Props) => {
  return (
    <Layout theme={theme}>
      <></>
    </Layout>
  );
};
