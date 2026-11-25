export const escapeHtml = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;')
export function keywords(text: string) {
  const words = text.toLocaleLowerCase().match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) ?? []
  const counts = new Map<string, number>()
  words.forEach(word => counts.set(word, (counts.get(word) ?? 0) + 1))
  return { total: words.length, rows: [...counts].sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0])) }
}
export function sitemap(input: string) {
  const urls = input.split(/\r?\n/).map(x => x.trim()).filter(Boolean)
  if (!urls.length) throw new Error('Add at least one URL.')
  const valid = urls.map(value => { const u = new URL(value); if (!['http:', 'https:'].includes(u.protocol)) throw new Error('URLs must use HTTP or HTTPS.'); return u.href })
  if (new Set(valid.map(u => new URL(u).origin)).size > 1) throw new Error('Use URLs from one site.')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${valid.map(u => `  <url><loc>${escapeHtml(u)}</loc></url>`).join('\n')}\n</urlset>`
}
