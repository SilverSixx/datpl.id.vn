import siteMetadata from '@/data/siteMetadata'

export function shareToLinkedIn(url: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url,
  )}`
}

export function shareToReddit(url: string, title: string) {
  return `https://www.reddit.com/submit?url=${encodeURIComponent(
    url,
  )}&title=${encodeURIComponent(title)}`
}

export function shareToFacebook(url: string) {
  return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`
}

const share = {
  toLinkedIn: shareToLinkedIn,
  toReddit: shareToReddit,
  toFacebook: shareToFacebook,
}

export default share
