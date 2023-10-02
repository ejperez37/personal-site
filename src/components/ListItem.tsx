import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date, description } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="flex justify-center">
      <Card className="w-11/12 px-5 py-5 hover:bg-accent hover:text-accent-foreground">
        <Link href={`blog/blogposts/${id}`}>
          <CardTitle className="underline text-2xl">{title}</CardTitle>
          <p>{formattedDate}</p>
          <Separator orientation="horizontal" className="my-2" />
          <CardDescription>{description}</CardDescription>
        </Link>
      </Card>
    </li>
  )
}
