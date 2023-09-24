import Container from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <Container>
      <h2 className="text-3xl font-bold mx-6 my-6 underline text-center lg:text-left">
        work page 1
      </h2>
      <div className="flex justify-around">
        <Button asChild variant="ghost">
          <Link href="/work">back to all work</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/work/work-page2">next</Link>
        </Button>
      </div>
    </Container>
  )
}
