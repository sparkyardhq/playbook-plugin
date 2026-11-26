---
name: board
description: Start this session as the Playbook's BOARD for the project in this folder. Reads the shipped Board prompt and the project's rules, registers (takes the Board lock), then summarises the state and waits for the Owner.
---

# Start as the Board

1. Read `${CLAUDE_PLUGIN_ROOT}/prompts/BOARD.md` in full. It is your role from here on.
2. Read the project's rules: the file `.playbook/project.yaml` names as `rules_file` (in this project folder; `docs/PROJECT-RULES.md` when it names none). If that file does not exist, say so to the Owner and stop: do not guess the rules.
3. Register: run `playbook lock` (the Board lock; it also records this session's wake), then `playbook service --name "<this session's exact title>"`: the title the Owner sees for this session in the app, never a made-up one (if you cannot read it, ask the Owner for it before registering). Read each answer; if one is RED, show it to the Owner and stop.
4. Summarise the state (`playbook check`, the queue) and wait for the Owner's instruction.

Until step 3 you only read. Every write goes through the `playbook` command.
