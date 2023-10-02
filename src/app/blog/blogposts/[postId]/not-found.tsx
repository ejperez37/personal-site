import Link from 'next/link'

export default function NotFound() {
    return (
        <>
        <h2>The requested post does not exist.</h2>
        <Link href="/blog">back to all posts</Link>
        </>
    )
}