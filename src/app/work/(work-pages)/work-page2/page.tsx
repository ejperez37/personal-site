import Container from '@/components/ui/container'
import Image from 'next/image'
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import Link from 'next/link'

export default function Page() {
  return (
    <Container>
      <h2>work page 2</h2>
      <Link href="/work">back to all work</Link>
    </Container>
  )
}
