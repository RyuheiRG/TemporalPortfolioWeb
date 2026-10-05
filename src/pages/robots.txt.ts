import type { APIRoute } from 'astro'
import { siteConfig } from '@/config/site'

const baseUrl = `${siteConfig.url}${siteConfig.baseUrl}`

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${baseUrl}sitemap-index.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
