const versionNode = document.querySelector("#version");

if (versionNode) {
  versionNode.title = `Repaired v4 automatic deploy rendered at ${new Date().toISOString()}`;
}
