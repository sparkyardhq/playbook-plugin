export const QF_STATES = [["o", "Open"], ["h", "Held"], ["c", "Closed"], ["all", "All"]], QF_REC = [["I", "Ideas"], ["DG", "Designs"], ["IP", "Plans"], ["T", "Tasks"], ["DF", "Defects"], ["U", "Test rounds"], ["AH", "Ad hoc"]], QF_KINDS = [["all", "All kinds"], ...QF_REC, ["C", "Ready to commit"]], QF_TAB = { all: "A", I: "I", T: "T", DF: "DF", IP: "IP", C: "C" }, QF_KIND_OF = { A: "all", C: "C", I: "I", T: "T", DF: "DF", IP: "IP" }, QF_OUT = { wontfix: "won't fix", "in-progress": "in progress", "in-task": "in a task", "n/a": "n/a" }, QF_MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], qfCount = (lists, st, kind, readyCount = 0) => kind === "C" ? readyCount : (lists || []).filter((r) => (st === "all" || r[5] === st) && (kind === "all" || r[1] === kind)).length, qfWhen = (w, today) => w ? w.slice(0, 10) === today ? `today ${w.slice(11, 16)}` : `${Number(w.slice(8, 10))} ${QF_MON[Number(w.slice(5, 7)) - 1] || ""}` : "";
export function qfFilterHTML({ lists, filter, readyCount = 0, esc }) {
  const btn = (on, label, n, code, title, k = "") => `<button type="button" class="btn sm tog${on ? " on" : ""}" aria-pressed="${on}" onclick="${code}" title="${esc(title)}"${k ? ` data-k="${k}"` : ""}>${esc(label)}${n == null ? "" : ` <span class="cnt">${n}</span>`}</button>`;
  return `<div class="qfst" role="group" aria-label="Show"><span class="qfl">Show</span>${QF_STATES.map(([k, l]) => btn(filter.st === k, l, qfCount(lists, k, "all", readyCount), `qfPick('${k}',null)`, `Show ${l.toLowerCase()} records`, k)).join("")}</div><div class="qfk" role="group" aria-label="Kind">${QF_KINDS.map(([k, l]) => btn(filter.kind === k, l, k === "all" ? null : qfCount(lists, filter.st, k, readyCount), `qfPick(null,'${k}')`, k === "all" ? "Every kind" : k === "C" ? "Checked and tested, and able to commit now" : `Only ${l.toLowerCase()}`, k)).join("")}</div>`;
}
export function qfListHTML({ lists, filter, today, esc, idLink, inTree = () => !0 }) {
  const rows = lists.filter((r) => (filter.st === "all" || r[5] === filter.st) && (filter.kind === "all" || r[1] === filter.kind)), word = { o: "open", h: "held", c: "closed", all: "all" }[filter.st], groups = QF_REC.filter(([k]) => filter.kind === "all" || k === filter.kind).map(([k, l]) => [l, rows.filter((r) => r[1] === k)]).filter(([, rs]) => rs.length || filter.kind !== "all"), row = (r) => `<div class="q qfr" data-id="${esc(r[0])}"><span class="qn"></span>${idLink(r[0])} <span class="qnm" title="${esc(r[2])}">${esc(r[2])}</span><span class="meta qout" title="${inTree(r[0]) ? "" : "archived · opens read-only"}">${esc(QF_OUT[r[3]] || r[3])}${r[4] ? " · " + esc(qfWhen(r[4], today)) : ""}</span></div>`;
  return groups.map(([l, rs]) => `<div class="q band"><span class="qn"></span><span class="qnm meta">${esc(l)} · ${word} · ${rs.length} · newest first</span></div>${rs.length ? rs.map(row).join("") : `<div class="empty">no ${word} ${esc(l.toLowerCase())}</div>`}`).join("") || `<div class="empty">no ${word} record</div>`;
}
export const PRIO_ORDER = ["top", "high", "medium", "low", "unranked"], WAIT_STATES = ["audited", "uat"], DF_WORKING = ["in-task", "planned", "building", "report", "audited"], ALL_DF = ["ranked", "in-task", "planned", "building", "audited"], STAGE_ORDER = ["not designed", "designing", "approved", "building", "paused"], BANDS = [
  ["commit", "To commit", "you", "nothing waits for your commit"],
  ["test", "To test", "you", "no test round waits for you"],
  ["audit", "To audit", "Board", "nothing waits for the Board's audit"],
  ["building", "Being built", "", "no developer is on a build"],
  ["ready", "Ready for the developer", "Board dispatches", "nothing is ready for a developer"],
  ["design", "Design", "you", "nothing waits for your approval"]
], dfOpenOf = (list) => Array.isArray(list) && list.length ? list : ["reported", "ranked", "planned", "building", "audited", "in-task"], qOpen = (q, r) => !r.gone && !["closed", "superseded", "fixed", "wontfix", "done", "dropped"].includes(r.state) && q.effPrio(r) !== "wontfix", qBand = (q, r) => {
  const p = q.effPrio(r);
  return p == null ? 9 : q.PRIO[p];
};
const dfWorkFirst = (r) => r.kind === "DF" && DF_WORKING.includes(r.state) ? 0 : 1;
export const queueItemsOf = (q, kind) => q.live.filter((r) => r.kind === kind && qOpen(q, r) && (kind !== "DF" || q.dfOpen.includes(r.state))).sort((a, b) => dfWorkFirst(a) - dfWorkFirst(b) || qBand(q, a) - qBand(q, b) || (a.rank ?? 9999) - (b.rank ?? 9999) || a.id.localeCompare(b.id)), ideaQueued = (q, r) => r.kind === "I" && !r.gone && !r.archived && r.parent && q.byId[r.parent] && ["proposed", "designing", "in-progress", "held"].includes(r.state) && q.effPrio(r) !== "wontfix", stageOf = (r) => r.state === "held" ? "paused" : r.stage || "not designed", allItemsOf = (q) => q.live.filter((r) => qOpen(q, r) && (r.kind === "T" || r.kind === "DF" && ALL_DF.includes(r.state)) || ideaQueued(q, r) || r.kind === "DG" && q.stepOf(r)?.band === "design");
export function planOrder(p, members) {
  const at = (id) => {
    const i = (p.tasks || []).indexOf(id);
    return i < 0 ? 9999 : i;
  };
  return [...members].sort((a, b) => at(a.id) - at(b.id) || a.id.localeCompare(b.id, void 0, { numeric: !0 }));
}
export const planTasksOf = (q, p) => q.kids(p.id).filter((t) => ["T", "DF"].includes(t.kind) && !t.gone).sort((a, b) => qBand(q, a) - qBand(q, b) || (a.rank ?? 9999) - (b.rank ?? 9999) || a.id.localeCompare(b.id)), bucket = (t) => ["closed", "superseded"].includes(t.state) ? "done" : ["held", "parked"].includes(t.state) ? "paused" : ["planned", "building", "report", "audited", "uat"].includes(t.state) ? "in progress" : "queued";
export function queueUnitsOf(q, items = allItemsOf(q)) {
  const groups = /* @__PURE__ */ new Map(), lone = [];
  items.forEach((r) => {
    const p = q.planAbove(r);
    p ? (groups.has(p.id) || groups.set(p.id, { plan: p, members: [] }), groups.get(p.id).members.push(r)) : lone.push(r);
  });
  for (const [id, g] of groups) g.members.some((m) => m.state !== "held") || groups.delete(id);
  return [...[...groups.values()].map((g) => ({ kind: "plan", id: g.plan.id, prio: q.effPrio(g.plan) || "unranked", g, rank: g.plan.rank, updated: g.plan.updated })), ...lone.map((r) => ({ kind: "one", id: r.id, prio: q.effPrio(r) || "unranked", r, rank: r.kind === "I" ? void 0 : r.rank, updated: r.updated }))].sort((a, b) => PRIO_ORDER.indexOf(a.prio) - PRIO_ORDER.indexOf(b.prio) || (a.rank ?? 9999) - (b.rank ?? 9999) || a.id.localeCompare(b.id));
}
export const ORD = (n) => n + (n % 100 >= 11 && n % 100 <= 13 ? "th" : ["th", "st", "nd", "rd"][n % 10] || "th"), unitBand = (q, u) => {
  if (u.kind === "plan") {
    const bs = u.g.members.map((m) => q.stepOf(m)?.band).filter(Boolean);
    return BANDS.find(([k]) => bs.includes(k))?.[0] || "ready";
  }
  return u.r.kind === "I" ? q.stepOf(u.r)?.band || null : q.stepOf(u.r)?.band || "ready";
};
