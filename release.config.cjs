module.exports = {
    branches: ["main"],
    repositoryUrl: "https://github.com/amir-jamshidi/tiny-lib.git",
  
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
  
      [
        "@semantic-release/exec",
        {
          prepareCmd: "npm run build"
        }
      ],
  
      [
        "@semantic-release/changelog",
        {
          changelogFile: "CHANGELOG.md"
        }
      ],
  
      [
        "@semantic-release/npm",
        {
          npmPublish: true
        }
      ],
  
      [
        "@semantic-release/git",
        {
          assets: ["dist", "CHANGELOG.md", "package.json"],
          message:
            "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
      ]
    ]
  };
  