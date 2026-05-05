This commit intentionally removes `index.html` so the ShotOps Safe Deploy
workflow fails before it can trigger deployment.

Expected result:
- GitHub Actions fails at the repository test step.
- ShotOps does not deploy this commit.
- The public app continues serving the previous successful version.
