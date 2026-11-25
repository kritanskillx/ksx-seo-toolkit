import { describe, expect, it } from 'vitest'
import { escapeHtml, keywords, sitemap } from './tools'
describe('generators', () => {
 it('escapes markup and attributes', () => expect(escapeHtml('<a title="x&y">')).toBe('&lt;a title=&quot;x&amp;y&quot;&gt;'))
 it('counts words without dividing by zero', () => { expect(keywords('').total).toBe(0); expect(keywords('SEO seo, web').rows).toEqual([['seo',2],['web',1]]) })
 it('escapes sitemap URLs and rejects mixed hosts', () => { expect(sitemap('https://example.com/?a=1&b=2')).toContain('&amp;'); expect(() => sitemap('https://a.com\nhttps://b.com')).toThrow() })
})
