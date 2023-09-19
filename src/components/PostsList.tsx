import { getSortedPostsData } from '@/lib/posts'
import ListItem from '@/components/ListItem'

export default function PostsList() {
  const posts = getSortedPostsData()

  return (
    <section className="mt-6 mx-12">
      <ul className="w-full grid md:grid-rows-2 md:grid-cols-2 gap-3">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
