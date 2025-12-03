import { MetadataRoute } from 'next'

// Si tenés un array de talleres en app/talleres/data.ts, podés importarlo:
import { workshops } from './talleres/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adolecencia-para-padres.vercel.app'

  // Rutas estáticas principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/talleres`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/promos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testimonios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Rutas dinámicas de talleres (si usás slugs en /talleres/[slug])
  const workshopRoutes: MetadataRoute.Sitemap = workshops.map((workshop) => ({
    url: `${baseUrl}/talleres/${workshop.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...workshopRoutes]
}
