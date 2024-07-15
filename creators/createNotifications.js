export function createNotifications() {
  const notificationContainer = document.getElementById(
    "notificationContainer"
  );

  // Array of modifiers (replace with your actual modifiers)
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
  ];

  // Function to create a single notification
  function createNotification(modifier) {
    const column = document.createElement("div");
    column.className = "column is-half";

    const notification = document.createElement("div");
    notification.className = `notification ${modifier ? "is-" + modifier : ""}`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
      column.remove();
    });

    const content = document.createTextNode("Lorem ipsum dolor sit amet, ");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "consectetur";
    const remainingText = document.createTextNode(
      " adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit"
    );

    notification.appendChild(deleteButton);
    notification.appendChild(content);
    notification.appendChild(link);
    notification.appendChild(remainingText);

    column.appendChild(notification);
    return column;
  }

  // Create and append notifications
  modifiers.forEach((modifier) => {
    const notificationElement = createNotification(modifier);

    if (notificationContainer) {
      notificationContainer.appendChild(notificationElement);
    }
  });
}
