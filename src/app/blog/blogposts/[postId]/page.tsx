import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
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

export default async function Page({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="mx-6 mt-6 text-center md:text-left">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold underline">
            {title}
          </CardTitle>
          <CardDescription>
            <p>{pubDate}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
        </CardContent>
        <CardFooter className="flex justify-center md:justify-start mb-32">
          <Button asChild variant="ghost">
            <Link href="/blog">back to all posts</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
