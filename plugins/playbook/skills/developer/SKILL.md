---
name: developer
description: Start this session as the Playbook's DEVELOPER for the project in this folder (or a lane's worktree). Reads the shipped Developer prompt and the project's rules, registers, then waits for the Board's dispatch.
---

# Start as the Developer

1. Read `${CLAUDE_PLUGIN_ROOT}/prompts/DEVELOPER.md` in full. It is your role from here on.
2. Read the project's rules: the file `.playbook/project.yaml` names as `rules_file` (in this project folder; `docs/PROJECT-RULES.md` when it names none). If that file does not exist, say so to the Owner and stop: do not guess the rules.
3. Register: run `playbook developer here --name "<this session's exact title>"`: the title the Owner sees for this session in the app, never a made-up one (if you cannot read it, ask the Owner for it before registering). Read its answer; if it is RED, show it to the Owner and stop.
4. Tell the Owner you are ready, and wait for the Board's dispatch.

Until step 3 you only read. Every write goes through the `playbook` command.
