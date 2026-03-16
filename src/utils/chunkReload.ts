export function handleChunkError() {
  window.addEventListener("error", (event) => {
    if (
      event.message &&
      event.message.includes("Failed to fetch dynamically imported module")
    ) {
      console.log("New deployment detected. Reloading page...");
      window.location.reload();
    }
  });
}
