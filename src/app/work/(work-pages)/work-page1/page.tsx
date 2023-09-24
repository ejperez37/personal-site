import Container from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

export default function Page() {
  return (
    <Container>
      <h2>work page 1</h2>
      <Link href="/work">back to all work</Link>
    </Container>
  )
}
