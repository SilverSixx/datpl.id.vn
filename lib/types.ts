import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type GrayMatter = {
  date: string
  slug: string
  draft: boolean
  featured: boolean
  summary: string
  tags: string[]
  [key: string]: any
}

export type Post = {
  html: MDXRemoteSerializeResult<Record<string, unknown>>
  tweetIds: string[]
  frontMatter: GrayMatter
}

export type PostMeta = {
  id: string
  slug: string
  views: number
  likes: number
  shares: number
}

export type SocialIconKind =
  | 'email'
  | 'github'
  | 'linkedin'

export type SocialLink = {
  href: string
  kind: SocialIconKind
  name: string
}

