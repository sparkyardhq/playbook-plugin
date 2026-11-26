export const LV_SORTS = {
  mk: [["new", "Newest first"], ["old", "Oldest first"], ["changed", "Last changed"], ["title", "Title A–Z"]],
  doc: [["changed", "Last changed"], ["name", "Name A–Z"], ["group", "Group"], ["size", "Size"]]
}, lvSortOf = (kind, v) => LV_SORTS[kind].some(([k]) => k === v) ? v : LV_SORTS[kind][0][0];
const lvNum = (r) => Number(r.number) || 0, lvMs = (r) => Date.parse(r.modified || "") || 0, lvLow = (s) => String(s || "").toLowerCase(), lvTitle = (r) => r.title || r.name || "";
export function lvMatch(kind, r, query) {
  const q = lvLow(query).trim();
  if (!q) return !0;
  if (kind === "mk") {
    const m = /^m?0*(\d+)$/.exec(q);
    return m && String(Number(r.number)) === m[1] ? !0 : [lvTitle(r), r.record, ...r.records || [], ...r.named || []].some((x) => lvLow(x).includes(q));
  }
  return [r.name, r.path, r.groupLabel, r.group].some((x) => lvLow(x).includes(q));
}
export function lvSort(kind, rows, sort) {
  const s = lvSortOf(kind, sort), out = [...rows || []];
  if (kind === "mk") {
    const by2 = { new: (a, b) => lvNum(b) - lvNum(a), old: (a, b) => lvNum(a) - lvNum(b), changed: (a, b) => lvMs(b) - lvMs(a) || lvNum(b) - lvNum(a), title: (a, b) => lvTitle(a).localeCompare(lvTitle(b), "en", { sensitivity: "base" }) || lvNum(b) - lvNum(a) };
    return out.sort(by2[s]);
  }
  const name = (a, b) => lvLow(a.name).localeCompare(lvLow(b.name), "en"), by = { changed: (a, b) => lvMs(b) - lvMs(a) || name(a, b), name, group: () => 0, size: (a, b) => (b.bytes || 0) - (a.bytes || 0) || name(a, b) };
  return out.sort(by[s]);
}
export function lvDocChips(rows) {
  const out = [["all", "All", (rows || []).length, "All documents"]];
  for (const r of rows || []) {
    const c = out.find((x) => x[0] === r.group);
    c ? c[2]++ : out.push([r.group, r.groupShort || r.groupLabel || r.group, 1, r.groupLabel || r.group]);
  }
  return out;
}
export const lvSortHTML = (kind, sort, esc) => `<label class="lv-sort meta">Sort <select onchange="lvSortSet('${kind}', this.value)" aria-label="Sort the list" title="The order of the list (kept on the Mac)">${LV_SORTS[kind].map(([k, l]) => `<option value="${k}"${k === lvSortOf(kind, sort) ? " selected" : ""}>${esc(l)}</option>`).join("")}</select></label>`;
