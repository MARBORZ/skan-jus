export interface NavLink {
  label: string
  href: string
}

export interface ExpertiseItem {
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface FooterNavColumn {
  title: string
  links: string[]
}
