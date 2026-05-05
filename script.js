const versionNode = document.querySelector("#version");

if (versionNode) {
  versionNode.title = `Broken v5 safety test rendered at ${new Date().toISOString()}`;
}
