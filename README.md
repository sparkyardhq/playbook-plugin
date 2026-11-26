# Playbook for Claude Code

Playbook gives a software project a working structure inside Claude Code: a **Board** session that plans, reviews and decides, **developer** sessions that build, a **Clerk** that keeps every idea, design, task, defect and test round as a record, and a **local dashboard** in your browser that shows what is happening and what is waiting for you.

> **This repository holds only the released plugin.** It contains no source code: each version is published here as a ready-to-install package, with one compiled program per platform. Like any program on your computer, a compiled program can still be taken apart by a determined expert; the licence covers the rest.

## Requirements

- [Claude Code](https://claude.com/claude-code)
- git, with your name and email set (`git config --global user.name` and `user.email`)
- macOS (Apple silicon or Intel), Linux (x86-64), or Windows (x86-64, preview)

## Install

Once, on your computer:

```bash
claude plugin marketplace add sparkyardhq/playbook-plugin
claude plugin install playbook@playbook-plugin
```

Then, in each project you want to run with Playbook, start Claude Code and run:

```
/playbook:init
```

To start the Board session:

```
/playbook:board
```

And in a second session, to start a developer:

```
/playbook:developer
```

## First run: approve the program once

The programs are not signed yet, so macOS and Windows ask you to approve each version's program once, the first time it runs:

- **macOS:** the first run is blocked with a message that Apple cannot check the program for malicious software. Open **System Settings › Privacy & Security**, find the line naming `playbook-darwin-…`, choose **Open Anyway**, then confirm with your password or Touch ID.
- **Windows:** SmartScreen shows "Windows protected your PC". Choose **More info**, then **Run anyway**.
- **Linux:** nothing to approve.

## Updates

Automatic updates are planned: once they ship, Playbook will check here at most once a day when a Claude Code session starts, install a newer version after checking its checksum and signature, and tell you in one line; you will be able to turn this off in the dashboard's Settings.

Until then, and at any time, update by hand:

```bash
claude plugin update playbook@playbook-plugin
```

## What it sends

Nothing about your project leaves your computer. The first time Playbook runs, it downloads its program for your platform from this repository's Releases, once, and checks it against the checksum list that comes with the plugin. Once automatic updates ship, it will also ask this repository which version is the latest. Those requests carry no project, name or file.

## Changes

Each version's changes are in [plugins/playbook/CHANGELOG.md](plugins/playbook/CHANGELOG.md), and on its page under Releases.

## Licence

Playbook is free to install and use, but it is not open source. See [LICENSE](LICENSE).
