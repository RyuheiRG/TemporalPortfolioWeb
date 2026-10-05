import type { APIRoute } from 'astro'
import { siteConfig } from '@/config/site'

const baseUrl = `${siteConfig.url}${siteConfig.baseUrl}`

export const GET: APIRoute = () => {
  const now = new Date().toISOString()
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  )
}
