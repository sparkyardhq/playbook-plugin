# Changelog

All notable changes to the Playbook plugin. The format follows Keep a Changelog; versions follow semantic versioning.

## [Unreleased]

## [0.2.0] - 2026-11-26

### Added

- The package ships THIRD-PARTY-NOTICES for Node.js, yaml and qrcode-generator (T-0188)
- A failed test round has a Waive it card; the Owner's uat waive works on it (DF-290)
- Updates are checked against a signing key the plugin ships; the daily check is not on yet (T-0190, T-0199)
- An owner step can be a list of steps, each with its command (T-0194)
- The service warns when a tracked file turns to all zero bytes, naming who wrote it (DF-292)
- A new install downloads its program on first run, checked against the package's list (DF-293)

### Changed

- The Documents filters are one row of one-word tabs with counts, on desk and phone (T-0187)
- The licence: users own their work, Anthropic and updates stated, severability, a contact (T-0189)
- A question on a task past planned shows as its card in Needs you, now pinned (DF-282)
- Programs ship unsigned for now; the README says how to approve one on first run (T-0195)
- The clean-install check fetches the program as self-update does, signature first (T-0196)
- The licence is final: copyright SparkYard, US and Canadian law (T-0200)
- The shipped page has no Release, Publish or install tap of the plugin's own (T-0184)
- The page names its two publishes apart: publish source to the private repo, public release (T-0198)
- The README and the licence say only what this version does (DF-294)
- The first public release: installed from GitHub, the program fetched on first run (T-0193)

### Fixed

- A land run that fails or crashes posts a chat row and a service.log line (DF-279)
- The install refusal names playbook serve --plist, the word that records claude_path (DF-281)
- publish-plugin lets the commit attribution's noreply address through; others stay refused (DF-283)
- publish-plugin says why a program did not answer --version; the build leaves it executable (DF-284)
- A registry or watched-file change is noticed even when its file event is lost under load (DF-285)
- The service logs once when a tracked file goes missing from the checkout (DF-286)
- A rebuild names the watched files that caused it first, then the record changes (DF-287)
- Test runs no longer leave Chrome and run folders in the Mac's temp folder (DF-288, DF-289, T-0197)
- The archive never takes a failed test round; reopen --keep-state brings one back (DF-291)
- Finder's .DS_Store and similar files no longer ship in the package (DF-295)
- The shipped page no longer carries the hidden Install button of the plugin's own (DF-297)
- The Playbook's own project guards its build folder from Board edits (DF-296)

## [0.1.9] - 2026-11-22

### Added

- A DONE or PLAN note needs its short head; footer --chat posts the chat row with the footer (T-0170)
- A Settings row publishes the released version to GitHub, with its result in the chat (DF-241)
- Each project gets its own version, changelog and release-project word that tags a release (T-0182)
- The plugin dashboard has a ⚙︎ panel on the Mac for service, phone and plugin settings (T-0185)
- A project with no image shows a stand-in icon on the plugin dashboard's tabs (T-0186)
- The shared plugin service restarts by itself when its code changes, on the Owner's switch (DF-255)

### Changed

- The shipped plugin leaves out its own release, publish and install words and route (T-0184)

### Fixed

- The land run loads the Clerk lazily, which ends an import cycle through serve.mjs (DF-238)
- A take-over that binds removes its request; a start acts on requests only once it listens (DF-239)
- The install-route test stubs the restart, so no test leaves a real service running (DF-240)
- Publishing refuses unless the last green whole suite ran on HEAD itself (DF-242)
- Protected commands are judged per command word: rewrites are refused, quoted mentions pass (DF-245)
- The package ships the dashboard page minified, with no notes in its comments (DF-248)
- Release and publish refuse a suite run that exited 1 even when its json said success (DF-243)
- The publish word makes the first push to an empty origin, setting its upstream (DF-247)
- The guard refuses every protected command its text names again, and lets Clerk notes pass (DF-252)
- A second publish tap stays refused after the service restarts while a publish runs (DF-254)
- The publish word matches origin's main by its exact name and refuses an uncounted push (DF-253)
- The release line says a whole suite is running instead of finding no result (DF-250)
- The release card lists a record its commit names first, even with no recorded commit (DF-251)
- A shell command can no longer change project.yaml; only the Clerk writes it (DF-244)
- The guard reads git's own subcommand, and refuses skipping the pre-commit hook (DF-246)
- A shell command can no longer change any Clerk-only record file, not only project.yaml (DF-249)
- The plugin dashboard's ⚙︎ panel can restart the shared service and open it to your phone (DF-255)
- A test keeps the restart's publish window equal to the publish word's own (DF-256)
- The plugin's own service.yaml keeps its header and gets no project settings (DF-257)
- The shared service starts on its own saved port even when a project protects it (DF-258)
- A land run's Suite rows and Commit hold wait for a busy Clerk lock and log when lost (DF-259)
- The publish word stops a network step that hangs past 2 minutes, so the Clerk lock frees (DF-260)
- Docs and mockup pages get a script policy and nosniff; their own scripts no longer run (DF-261)
- The Mac's pairing and settings routes answer only the dashboard's own page (DF-262)
- The chat month file is parsed once per change, not at every read (DF-270)
- A new phone can pair through the shared service: it opens the pairing door, as a project's (DF-263)
- The shared service's events stream sends a keep-alive every 25 seconds (DF-273)
- A release that failed after its commit is finished by the next tap, not raised again (DF-266)
- Only one plugin install runs at a time across every project on the shared service (DF-271)
- A session stamp is written by rename, so two hooks at once no longer lose its fields (DF-274)
- The busy log's first write of a month no longer truncates another process's row (DF-275)
- Every project registry write takes the plugin home's lock, so none drops a new project (DF-276)
- Publish judges the archive with the commit sweep's own check and its Commit exception (DF-265)
- A lane's writing git on the main checkout is refused, whatever branch it names (DF-267)
- The guard keeps a session's own role when it changes folder outside its project (DF-268)
- Write and Edit refuse Clerk-only files in a lane worktree too (DF-269)
- A refused inbox clear keeps its evidence: folders go only when the clear commits (DF-264)
- The shared service logs a request error and answers 500, not a silent 400 (DF-272)
- The release accepts records-only commits after the last green whole suite (DF-277)
- playbook suite with a flag prints its usage instead of starting a whole suite (DF-278)

## [0.1.8] - 2026-11-20

### Added

- The Board can mark a chat row with --tone ok or bad, for the page to show in colour (T-0179)
- Land-run rows and the Board's landing reports show green, red or amber in the chat (T-0179)
- The Mockups tab shows the project's own chips, from project.yaml's mockups groups (T-0164)
- Settings › Autopilot shows the archive switch in its own row, with its hold when held (T-0180)
- A paired phone can save itself on the Mac's other addresses from Settings (T-0181)

### Changed

- The Settings button shows the standard cog instead of the eight-spoke icon (T-0171)

### Fixed

- A template save the watcher hears without the file's name still rebuilds the page (DF-230)
- After a release the release card counts from the released version, not the running copy (DF-231)
- A restart loads this project's currently installed plugin copy, not the old running one (DF-232)
- The version chip and Settings offer the install when a newer release is in the marketplace (DF-231)
- A long tree title ends in an ellipsis, so the row's percentage stays in view (DF-217)
- An idea with the Owner's go gets the Board's design card, and its tree row the go button (DF-214)
- A hand-started serve --take-over is handed the port, and one that cannot take it exits (DF-236)
- The watch tests wait for the rebuild with a load-scaled bound (DF-233) (DF-233)
- settingsBlock's every-switch-off check runs again (DF-234) (DF-234)
- The autopilot page tests read the eight switches by their key (DF-235) (DF-235)
- The take-over give-up test waits for its closed watches to be released before counting (DF-237)

## [0.1.7] - 2026-11-19

### Added

- Publish checks refuse a release with a red suite, a secret or an unsigned program (T-0147)
- reopen brings back an archived record of any kind under its own number (T-0175)
- An archive switch moves records closed 3 days after a green land run, in its own commit (T-0176)
- Land runs skip records-only commits, wait at most 15 min for load, and run at low priority (T-0178)
- A paired phone can save itself on the Mac's other names with a 2-minute, one-use link (T-0177)
- The Owner-only publish-plugin word pushes the package and makes the GitHub Release (T-0147)
- The check warns when a mockup page dated on or after the init day keeps mockup-legacy (T-0173)
- Each release also publishes the public repository's README and marketplace file (T-0148)
- A clean-computer install check runs the package from nothing before a publish (T-0149)

### Changed

- This project runs the installed plugin: bin/playbook is gone and playbook is on the PATH. (T-0109)
- The owner-dashboard launcher starts the plugin service on port 47100 (T-0174)

### Fixed

- The graph hint now reaches sessions that search through Bash, at the session start (DF-222)
- A land run waiting for load now counts as running, so a second one never starts beside it (DF-221)
- The service log names each pairing and each device's first HTTPS visit, never a token (DF-224)
- Init no longer fails on a fresh install of the compiled program (the yaml need is met) (DF-225)
- A restart of the Board's session keeps the Board lock, so autopilot no longer stops (DF-226)
- A page request failing after its answer started no longer stops the dashboard service (DF-227)
- The Board prompt's automatic-archive paragraph survives the release's prompt refresh (DF-228)
- The ready-to-commit count no longer includes a task already committed but not yet landed (DF-229)

## [0.1.6] - 2026-11-17

### Added

- The plugin builds into one program that needs no Node; Apple-silicon Macs only so far (T-0144)
- The Board closes a request as soon as it files the record the request became. (T-0156)
- An opened card or row shows its whole title first when the header cut it. (T-0158)
- Record numbers link to their record, and the Tree can show archived records read-only. (T-0142)
- Settings shows who is registered, who holds the Board lock and each role's start line. (T-0137)
- The build makes the program for Intel Mac, Linux and Windows from checked Node downloads. (T-0144)
- The architecture is documented: storage, data flow and the layers (docs, mockup 40). (T-0160)
- A migration guide says how a project already in flight moves onto the plugin. (T-0161)
- The Board's turn is logged at its prompt with what started it (Owner, Dev, a wake, other) (T-0168)
- The suite's done row counts Python unittest and node --test runs (exit code decides) (T-0165)
- project.yaml mockups.groups adds named chips to the mockup list page (part A) (T-0164)
- related --run keeps its last 20 summary lines; a reader for DONE and PLAN heads (part A) (T-0170)
- The land-run decision: start, record-only landing, Dev's wake (part A) (T-0169)
- A mockup-legacy tag lets a pre-plugin page skip the colour and status rules (T-0163)
- Self-update: a daily check fetches and verifies a new version; a notice says what to run (T-0146)
- The service starts each commit's land run, lands its records and wakes Dev. (T-0169)

### Changed

- A release refuses while a landed record has no changelog line, naming each one. (DF-200)
- A defect's question is answered on its card like a design's; the answer never moves it. (T-0159)
- The guard answers each tool call faster: it no longer reads every record's notes. (DF-206)
- playbook related --run also runs the tests that drive a Clerk word the change touches. (DF-210)
- The chat loads its last 200 lines, and adding a line no longer rewrites the whole month. (DF-207)
- The hook tests run the plugin's live hook entry, its switches included. (DF-208)
- Your move shows only what waits on you; the Board's and developers' work is in the Queue. (DF-199)
- Mockups and Documents share one layout that fits the window, with search, sort, filters. (T-0139)
- The dashboard loads half the data; older notes load on open and search still finds them. (DF-211)
- The dashboard service compresses the page and its data: about a quarter of the bytes. (DF-213)
- The Board's prompt says a defect may carry questions answered on its card. (T-0157)
- DF-214 step 1: a go on an idea is recorded, state kept, with undo (DF-214)
- Mockup numbers run 2 to 4 digits; lists sort them as numbers (99 before 100) (T-0162)
- The service no longer wakes the Board for its own held items (T-0166)
- End-of-turn check: the service's own page rebuild counts; waits up to 5 s for it (T-0167)

### Fixed

- A dashboard chat line that names a record goes on that record, as in the session (DF-196)
- Two writers at once no longer erase each other's chat row, state or settings change (DF-203)
- The compiled launcher blocks edits when its program is missing and the guard is on. (DF-201)
- The shipped Board prompt matches the current rules and names no single computer. (DF-202)
- playbook related --run is green only when vitest succeeded and no test was skipped. (DF-204)
- A failed release leaves no files changed, and says first when its commit would be refused. (DF-205)
- A broken or missing project.yaml no longer turns the guard off or blocks its repair. (DF-208)
- An empty lock no longer blocks every write; a failed restart keeps the network setting. (DF-209)
- A set-up choice that cannot apply here shows disabled with its reason, not as a tap. (DF-191)
- Every Tree row shows its own progress; unstarted ideas, designs and plans count as 0%. (DF-198)
- Converting the archive refuses while the installed plugin is too old to read folders. (DF-197)
- The page no longer saves your view on every redraw; only your own choices are sent. (DF-193)
- A page that must reload never drops your typing: if saving it fails, it waits and retries. (DF-192)
- The plugin's own tests no longer leak a saved view choice into the next test. (DF-212)
- A commit made while the dashboard rebuilds no longer fails on git's index lock. (DF-215)
- The plugin's dashboard no longer takes over a project whose own service answers late. (DF-216)
- A typed chat line survives the page's forced reload when a redraw lands mid-reload (DF-218)
- The service lands a commit titled 'T-n part B:' or naming a second record after ';'. (DF-219)
- The Board's model pick no longer stays 'sent' after a hand switch or an unrecorded apply. (DF-220)

## [0.1.5] - 2026-11-15

### Changed

- The code no longer assumes one Mac's paths, ports or tools; Linux and Windows untested (T-0145)
- The code finds its own files through one root, ready for the compiled build (T-0144)
- playbook related runs every named test file in one call, with the land run's worker rule (T-0151)
- The service's routes live one area per file (T-0153)
- The page's parts become modules checked without a browser, the Queue filter first (T-0154)
- The Tree's header is one line, with help at the right end (T-0141)
- An archived record keeps its own folder; a one-time convert moves old month files (T-0142)
- The plugin's own tests share one example project per run and decide the guard in-process (T-0152, T-0155)

### Fixed

- An autopilot switch tap no longer shows pending after the service has applied it (DF-190)
- Init names the settings it adds to project.yaml instead of printing [object Object] (DF-189)
- The plugin's own tests no longer go red on a busy Mac (DF-194, DF-195)

## [0.1.4] - 2026-11-15

### Added

- Release notes in the changelog format, folding by version and section (T-0140)
- A Queue filter: open, held, closed and all, for every kind (T-0138)
- The version chip installs a newer release into Claude Code from the Mac (T-0143)

### Fixed

- A held commit's refusal says why and how to grant the fix (DF-184)
- A typed message about a record goes on that record (DF-185)
- Init and the hooks no longer mistake the plugin's home folder for a project (DF-188)
- After a release the page and the release line say to update the installed copy (DF-180)
- playbook related names the few whole-file checks a change must run, not most of the suite (DF-164)
- A page rebuild makes far fewer git calls for the Shipped tab's dates and sizes (DF-173)
- A release is no longer blocked by a test that is skipped in every normal run by design (DF-179)
- The plugin's own tests are faster, steadier under load and clean up their temp folders (DF-174, DF-175, DF-176, DF-177, DF-178, DF-182, DF-183, DF-186, DF-187)

## [0.1.3] - 2026-11-14

### Added

- Permission modes per role and the shipped allow-list (T-0027)
- A re-audit of every design against what is built, once all open work is done (T-0061)
- A clean break: a button that starts a fresh Board session (T-0081)
- A sweep refusal shows as a red row on the commit card (T-0115)
- The busy strip: two thin lines under the top bar; a tap opens the chart (T-0134)
- Settings redesigned: a grouped sidebar, one-line switches, folding details and search (T-0136)

### Fixed

- The commit card no longer offers a commit the pre-commit check would refuse (DF-136)
- The Board wake no longer repeats the same lines after every service restart (DF-139)
- The dashboard page shows the plugin's real version, updated by each release (DF-141)
- The installed playbook command works through the marketplace's link (DF-142)
- Ad hoc filing no longer takes the service's own wake lines for the Owner's (DF-143)
- A design or plan moves to done once its last task closes (DF-144)
- Mockup page headers no longer go stale (DF-145)
- Mockup pages and their revisions no longer have to be made by hand (DF-146)
- The plugin service's tab strip has its missing controls; a failed rebuild is logged (DF-147)
- Busy totals are worked out on the Mac; documents are served as Markdown by id (DF-148)
- The busy strip no longer shifts the page when it fills in (DF-149)
- Closing two items in one sweep no longer loses a chat row (DF-150)
- Each busy-strip line opens its own chart; a second tap closes it (DF-151)
- The busy strip sits just below the title row's buttons (DF-152)
- Commits made under the Commit switch show as autopilot steps (DF-154)
- The settings switch knob follows the light and dark themes (DF-155)
- A defect that shares its parent task's file can commit its own fix (DF-157, DF-171)
- The guard no longer takes a commit command inside quoted text for a real one (DF-158)
- A superseded test round no longer asks to be placed in the tree (DF-159)
- The Clerk refuses a flag it does not know, naming it (DF-160)
- A refused commit holds only the Commit switch, not all of autopilot (DF-161)
- A new set-up card goes last, so earlier questions keep their numbers (DF-162)
- Autopilot no longer asks to commit a record that is already committed (DF-163)
- The clean-break control no longer wraps the desk top bar onto a second row (DF-170)
- A hidden Settings row no longer counts as a model row (DF-172)
- The plugin's own tests are steadier under load and no longer go stale at a release (DF-123, DF-137, DF-138, DF-140, DF-153, DF-156, DF-165, DF-166, DF-167, DF-168, DF-169)

## [0.1.2] - 2026-11-13

### Added

- One hooks file in the plugin with a switch per hook (T-0023)
- Guard refusals reach the Owner as chat rows (T-0024)
- A settings change asks keep or undo (T-0025)
- PreCompact blocks once and the briefing and compaction steps (T-0026)
- The three rule layers in place (T-0028)
- Init checks what the Playbook needs (T-0054)
- Init writes the project skeleton, never overwriting (T-0055)
- Init registers the project and adds its dashboard tab (T-0056)
- Init writes the set-up cards (T-0057)
- The init word and the playbook:init skill (T-0058)
- The two Off the Mac switches in Settings (T-0064)
- One push line per new card from the Board's turn (T-0065)
- The end-of-turn hook reminds the Board of an unsent push (T-0066)
- The claude.ai status copy, status only (T-0067)
- Each session applies the other's model pick (T-0093)
- approve <n> --go: the Owner's go is the approval, one Board step after the plan audit (T-0096)
- landed closes a task whose round passed and fixes a defect with proof (T-0097)
- The Clerk refuses a questions.yaml on an ad hoc item (T-0098)
- An optional git pre-commit check that runs the sweep checks (T-0099)
- A defect names the project that reported it and its plugin version (T-0100)
- playbook report-defect sends a defect to the plugin's maintainers from any project (T-0101)
- The guard refuses writes to the plugin's installed folder in every project (T-0102)
- The release card and a changelog line (T-0103)
- Settings › Plugin: version, changelog, reported defects, a chip when out of date (T-0104)
- Records name the requirements they cover (T-0105)
- The carry-over checklist, computed from the records (T-0106)
- The carry-over checklist page in Documents (T-0107)
- The Board fills in what each record covers, and the plan and audit rule is written down (T-0108)
- Settings › Hooks: one row per hook; a switch opens its card (T-0112)
- The no-owner-instance hook: no browser tool on a protected local port, on by default (T-0113)
- The graphify-first hook: suggests graphify before a search, never blocks (T-0114)
- Init run again turns every difference into a card (T-0116)
- The registry row stays current on a re-run; a moved project gets a new row (T-0117)
- Init's Start the Board card and its chat row (T-0118)
- Init's Off the Mac card: offers the push and the status copy, both off (T-0119)
- A versioned API: apiVersion, DATA.schema, docs/API.md, SSE ids and since (T-0120)
- Every tap's word comes from the Mac, with confirm and undo (T-0121)
- Sign-in with a device token, paired once per Mac at the plugin service (T-0122)
- The private network's name is accepted; off the Mac only over it or HTTPS (T-0123)
- HTTPS on the home network with a pinned certificate, and a CSP on the page (T-0124)
- Fallbacks for Mac-only actions: the wake POST, /lane returning its text (T-0125)
- Lists and labels are worked out on the Mac, not in the page (T-0126)
- View choices kept per device on the Mac, browser memory as the fallback (T-0127)
- Work held on an Owner card past a set time is set aside so the next task can start (T-0128)
- The progress popup opens each epic to every level under it, counted on the Mac (T-0129)
- A red land run stops only the Commit switch, after one rerun at low load (T-0130)
- Use defaults turns on exactly five autopilot switches (T-0131)
- Settings › Hooks: each hook's plain-words description as a tooltip on its switch (T-0132)
- The dashboard marks a Developer idle with work in building by itself (T-0133)

### Fixed

- The plugin dashboard's project tab shows the project's icon (DF-070)
- The plugin dashboard's project tab shows a progress ring (DF-071)
- A phone's home-screen shortcut has the project's icon (DF-072)
- A paired phone can open evidence files and logs (DF-073)
- A refused tap or Clerk word reaches the chat, not only a toast or the terminal (DF-075)
- The graph view pinch-zooms on a phone, and finished branches fold (DF-077)
- A model row no longer stays pending after the Board has recorded the model (DF-091)
- A held record with an open Owner question still shows its question card (DF-098)
- Start next is no longer kept idle by stale records left in building (DF-099)
- Start next skips a task that still waits on others (DF-100)
- A phone can pair by scanning: the address offered works on Android too (DF-101)
- A view choice made just before a reload is kept (DF-103)
- A land run's rerun keeps the first run's log and result (DF-106)
- The pre-commit check no longer refuses every Board commit while an archive waits (DF-107)
- The busy panel's waiting band ends after a land run's rerun (DF-109)
- A held Commit can come back after its fix is committed (DF-110)
- With the phone switch off, the Focus row says off (DF-112)
- The rollback check lets a deliberate undo through (DF-113)
- playbook related finds tests that read a changed file by path or reach it through imports (DF-114, DF-116, DF-118)
- A dashboard chat line that already became an ad hoc item is not filed twice (DF-115)
- A task left in building with no work no longer stalls the queue unseen (DF-117)
- chat_months in project.yaml is read (DF-119)
- lane_ports in project.yaml has a reader (DF-120)
- Leftover test helpers are removed from the dashboard (DF-121)
- The Board is woken when the Developer goes idle with work in building (DF-122)
- An autopilot wake says when Owner rows wait in the inbox (DF-124)
- The Board is woken when approved tasks have no plan and the Developer holds nothing (DF-125)
- An autopilot hold no longer removes the Board's only wake (DF-126)
- state.yaml's defaults declare every key the plugin reads (DF-127)
- Init's needs check warns about a missing browser or Claude Code desktop (DF-128)
- The design document says which earlier chapters were carried or dropped (DF-131)
- A defect closed as wontfix no longer turns the records red (DF-133)
- The wake lock clears when a Board turn ends without a chat row or footer (DF-134)
- The plugin's own tests are steadier under load and never see a live session (DF-097, DF-102, DF-104, DF-108, DF-111, DF-135)
