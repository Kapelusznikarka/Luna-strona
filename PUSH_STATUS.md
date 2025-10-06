# Push attempt log

- Token detected via `printenv | grep -i GITHUB`.
- Remote configured using `https://x-access-token:${GITHUB_TOKEN}` format.
- `git ls-remote origin` failed: `Invalid username or token`.
- `git push -u origin main` failed with the same authentication error.

These failures indicate the provided `GITHUB_TOKEN` lacks the required permissions or is invalid.

## 2024-04-?? follow-up attempt

- Environment variables checked again; no `GITHUB_TOKEN` present (`BRAK_GITHUB_TOKEN`).
- Remote reconfigured to `https://Kapelusznikarka:${GITHUB_TOKEN}@github.com/Kapelusznikarka/Luna-strona.git`.
- `git ls-remote origin` succeeded (public read access) even without a token.
- `git push -u origin main` failed: `Invalid username or token`.

Push remains blocked until a valid `GITHUB_TOKEN` with repo permissions is provided.

## Latest attempts

### Attempt: configure helper & manual credentials
- Enabled `credential.helper store` and added credentials for `Kapelusznikarka`.
- Subsequent commands still prompted for credentials when running `git push`, indicating stored password was not used or rejected.

### Attempt: plain HTTPS remote without token
- Remote reset to `https://github.com/Kapelusznikarka/Luna-strona.git`.
- `git push -u origin main` requested GitHub username/password and was aborted (`Ctrl+C`) because interactive credentials are unavailable in this environment.
- Push remains blocked until valid credentials (token or PAT) can be provided non-interactively.
