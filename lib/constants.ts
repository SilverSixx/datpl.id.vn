import { SocialLink } from '@/lib/types'
import siteMetadata from '@/data/siteMetadata'

export const navLinks = [
  { href: '/', prefetch: undefined, name: 'Home' },
  { href: '/blog', prefetch: false, name: 'Blog' },
  //{ href: '/books', prefetch: false, name: 'Books' },
]

export const socialLinks: SocialLink[] = [
  { href: siteMetadata.github, kind: 'github', name: 'Github' },
  { href: siteMetadata.linkedin, kind: 'linkedin', name: 'LinkedIn' },
  { href: `mailto:${siteMetadata.email}`, kind: 'email', name: 'Email' },
]
