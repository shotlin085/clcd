const versionNode = document.querySelector("#version");

if (versionNode) {
  versionNode.title = `Automatic deploy check rendered at ${new Date().toISOString()}`;
}
