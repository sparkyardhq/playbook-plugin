# Playbook for Claude Code

Playbook gives a software project a working structure inside Claude Code: a **Board** session that plans, reviews and decides, **developer** sessions that build, a **Clerk** that keeps every idea, design, task, defect and test round as a record, and a **local dashboard** in your browser that shows what is happening and what is waiting for you.

> **This repository holds only the released plugin.** It contains no source code. Each version is published here as a ready-to-install package.

## Status

The first public release is being prepared. Install instructions below apply once it is published.

## Requirements

- [Claude Code](https://claude.com/claude-code)
- macOS (Apple silicon or Intel), Linux, or Windows

## Install

Once, on your computer:

```bash
claude plugin marketplace add <account>/<repository>
claude plugin install playbook@<repository>
```

Then, in each project you want to run with Playbook, start Claude Code and run:

```
/playbook:init
```

To start the Board session:

```
/playbook:board
```

## Updates

Playbook keeps itself up to date: when a new version is published here, it installs it at your next Claude Code session and tells you in one line. You can turn this off in the dashboard's Settings.

To update by hand at any time:

```bash
claude plugin update playbook@<repository>
```

## What it sends

Nothing about your project leaves your computer. The only network request Playbook makes on its own is the update check, which asks this repository which version is the latest.

## Licence

Playbook is free to install and use, but it is not open source. See [LICENSE](LICENSE).
