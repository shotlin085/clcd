const versionNode = document.querySelector("#version");

if (versionNode) {
  versionNode.title = `Rendered at ${new Date().toISOString()}`;
}
