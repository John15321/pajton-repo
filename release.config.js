const config = {
    branches: ['main', 'master'],
  
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/github",
        {
          "assets": [
            { "path": "dist/*" },
          ]
        }
      ],
      [
        "@semantic-release/changelog",
        {
          "changelogFile": "CHANGELOG.md"
        }
      ],
      [
        "@semantic-release/git",
        {
          "assets": ["CHANGELOG.md"],
          "message": "chore(release 🚀): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
  
        }
      ]
    ],
  };
  module.exports = config;
  