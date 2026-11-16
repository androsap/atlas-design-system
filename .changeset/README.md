# Changesets

Every change to `@asyst/atlas` ships with a changeset — a small markdown file
that says how the version should bump and what goes in the changelog.

```bash
npm run changeset
```

Pick the bump:

| Bump    | When                                                                  |
| ------- | --------------------------------------------------------------------- |
| `patch` | Bug fix, style tweak, no API change                                   |
| `minor` | New component, new prop, new variant — backwards compatible           |
| `major` | Removed/renamed prop or component, changed default — breaking change  |

Commit the generated `.changeset/*.md` file with your PR. On merge, the
release workflow opens a "Version Packages" PR; merging that PR bumps the
version, writes `packages/atlas/CHANGELOG.md`, and releases the build to the
`release` branch with a `v<version>` tag (installable via
`npm i github:androsap/atlas-design-system#semver:^<version>`).
