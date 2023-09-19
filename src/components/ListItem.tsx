import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { Card } from '@/components/ui/card'

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="flex justify-center">
      <Card className="w-11/12 px-5 py-5">
        <Link className="underline text-2xl" href={`/blog/blogposts/${id}`}>
          {title}
        </Link>
        <br />
        <p>{formattedDate}</p>
        <br />
        <p>
          description here - edit &apos;generateMetadata&apos; & blog-posts to
          contain descriptions
        </p>
      </Card>
    </li>
  )
}
