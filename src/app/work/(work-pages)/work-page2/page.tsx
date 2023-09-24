import Container from '@/components/ui/container'
import Image from 'next/image'
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <Container>
      <h2 className="text-3xl font-bold mx-6 my-6 underline text-center lg:text-left">
        work page 2
      </h2>
      <div className="flex justify-around">
        <Button asChild variant="ghost">
          <Link href="/work/work-page1">prev</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/work">back to all work</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/work/work-page3">next</Link>
        </Button>
      </div>
    </Container>
  )
}
