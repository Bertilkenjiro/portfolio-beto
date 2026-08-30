export type Technology = {
  name: string
  description: string
  enabled: boolean
  path?: string
}

export const technologies: Technology[] = [
  {
    name: 'Power BI',
    description: 'Dashboards & Analytics',
    enabled: true,
    path: '/power-bi',
  },
  {
    name: 'Python',
    description: 'Em breve',
    enabled: false,
  },
  {
    name: 'TypeScript',
    description: 'Em breve',
    enabled: false,
  },
  {
    name: 'React',
    description: 'Em breve',
    enabled: false,
  },
]
