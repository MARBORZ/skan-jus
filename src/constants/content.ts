import type {
  NavLink,
  ExpertiseItem,
  Stat,
  ProcessStep,
  Testimonial,
  FooterNavColumn,
} from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Ekspertise', href: '#ekspertise' },
  { label: 'Om Oss', href: '#om-oss' },
  { label: 'Klienter', href: '#klienter' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    icon: 'shield',
    title: 'Formues-\nforvaltning',
    description:
      'Strategisk bevaring og vekst av privatformuer. Helhetlig planlegging på tvers av jurisdiksjoner.',
  },
  {
    icon: 'briefcase',
    title: 'Selskaps-\nrett',
    description:
      'Rådgivning ved fusjoner, oppkjøp og strukturering av komplekse forretningsstrukturer.',
  },
  {
    icon: 'trending-down',
    title: 'Skatte-\noptimalisering',
    description:
      'Legal minimering av skattebelastning. Strukturer tilpasset norsk og internasjonal lovgivning.',
  },
]

export const STATS: Stat[] = [
  { value: '25+', label: 'år med ekspertise' },
  { value: '480+', label: 'vellykkede saker' },
  { value: '12', label: 'jurisdiksjoner' },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Første konsultasjon',
    description:
      'Vi lytter til din situasjon og gir en ærlig, klar vurdering med konkrete neste steg.',
  },
  {
    number: '02',
    title: 'Analyse & Strategi',
    description:
      'Vi gjennomgår all dokumentasjon og utarbeider en skreddersydd strategi tilpasset dine mål.',
  },
  {
    number: '03',
    title: 'Gjennomføring',
    description:
      'Vi handler presist og effektivt, alltid med fokus på å sikre dine interesser og det beste utfallet.',
  },
  {
    number: '04',
    title: 'Oppfølging',
    description:
      'Vi følger opp resultater og forblir tilgjengelig for fremtidige juridiske behov.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '«Skan Jus håndterte vår M&A-transaksjon med eksepsjonell presisjon. Erik og teamet er de beste advokatene vi har jobbet med — og vi har jobbet med mange.»',
    author: 'Thomas Berge',
    role: 'Adm. direktør, Norsk Kapital AS',
  },
  {
    quote:
      '«Profesjonalitet og diskresjon på høyeste nivå. Da vi sto overfor en alvorlig tvist, sikret Skan Jus at vi kom styrket ut av situasjonen.»',
    author: 'Ingrid Halvorsen',
    role: 'Styreleder, Bergen Eiendom Gruppen',
  },
  {
    quote:
      '«Rask respons, klar kommunikasjon og sterke resultater. Skan Jus er det eneste advokatfirmaet jeg anbefaler til mine kontakter og partnere.»',
    author: 'Lars Eriksen',
    role: 'Partner, Nordic Ventures',
  },
]

export const FOOTER_NAV: FooterNavColumn[] = [
  {
    title: 'TJENESTER',
    links: [
      'Formuesforvaltning',
      'Selskapsrett',
      'Skatteoptimalisering',
      'Internasjonal Rett',
    ],
  },
  {
    title: 'FIRMA',
    links: ['Om Oss', 'Våre Advokater', 'Karriere', 'Kontakt'],
  },
]

export const BIO = {
  eyebrow: 'OM PARTNEREN',
  name: 'Erik M. Skansen',
  title: 'GRUNNLEGGER & SENIORPARTNER',
  paragraphs: [
    'Med over 20 års erfaring innen kommersielle tvister, kontraktsrett og M&A-transaksjoner, har Erik Skansen bygget et rykte som en av Norges fremste advokater for næringslivet. Hans pragmatiske og resultatorienterte tilnærming har hjulpet hundrevis av bedrifter gjennom komplekse juridiske utfordringer.',
    'Tidligere partner ved Wiersholm og Thommessen. Utdannet ved Universitetet i Oslo (cand.jur.) og Harvard Law School (LL.M.). Rangert blant Norges 50 mest innflytelsesrike jurister av Legal500 tre år på rad.',
  ],
  credentials: [
    { school: 'Harvard Law School', degree: 'LL.M., 2003' },
    { school: 'Universitetet i Oslo', degree: 'cand.jur., 2001' },
    { school: 'Legal500 Norge', degree: 'Top 50 Jurister, 2024' },
  ],
  photo:
    'https://images.unsplash.com/photo-1770283556277-812f8b185a64?w=800&q=80&fit=crop',
}

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1767201769118-c7b445571aca?w=1440&q=80&fit=crop',
  trust:
    'https://images.unsplash.com/photo-1540502399586-b3c9af3d11c3?w=800&q=80&fit=crop',
}
