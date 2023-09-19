import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from '@/components/ui/card'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import NotFound from '@/app/blog/blogposts/[[...slug]]/not-found'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) {
    return NotFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main>
      <h2>{title}</h2>
      <p>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/blog">back to all posts</Link>
        </p>
      </article>
    </main>
  )
}
