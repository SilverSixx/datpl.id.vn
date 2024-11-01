import Link from 'next/link'
import Image from 'next/future/image'
import classNames from 'classnames'

function CustomLink(props: any) {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function CustomImage({ alt, className, ...rest }: any) {
  return (
    <Image
      alt={alt}
      sizes="(min-width: 1024px) 80vw,
              (min-width: 1280px) 70vw,
              (min-width: 1536px) 60vw,
              100vw"
      height={0}
      width={0}
      className={classNames('rounded-lg', className)}
      {...rest}
    />
  )
}

function Highlight({ className, ...rest }: any) {
  return <span className={classNames('text-pink-500', className)} {...rest} />
}

const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
  Highlight: Highlight,
}

export default MDXComponents
