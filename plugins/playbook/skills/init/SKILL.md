---
name: init
description: Set up the Playbook in the project in this folder, new or existing. Checks what the Playbook needs, writes the project's records skeleton without overwriting anything, registers the project and adds its tab on the plugin dashboard.
---

# Initialise a project

1. Run `playbook init` in this project's folder (add `--port <n>` only if the Owner names the plugin service's port, or `--port auto` to let init pick a free one). It takes no other input and spends nothing: it never runs graphify and never starts a service.
2. Show its output to the Owner as it is: the checks, what was written or kept, the registry row, the dashboard tab, and the two start lines. If a line is RED, show it and stop; do not work around it. It refuses inside another project's folder and inside the plugin's own folder.
3. Tell the Owner the next step: start the Board with `/playbook:board` in a new session.

Everything init writes is written by the `playbook` command. Never edit `.playbook/` by hand, and never write under `~/.claude` or a Claude settings file for the Owner.
