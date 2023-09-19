import { getSortedPostsData } from "@/lib/posts";
import ListItem from "@/components/ListItem"

export default function PostsList() {
    const posts = getSortedPostsData()

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2>my blog.</h2>
            <ul>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}
