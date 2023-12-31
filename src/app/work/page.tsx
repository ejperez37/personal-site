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
      <section className="mx-6 mt-6 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-6 underline">my work.</h2>
        <p>curated web dev work</p>
      </section>
      <section className="my-3 mx-3 flex flex-col items-stretch lg:flex-row lg:justify-between">
        <Card className="flex flex-col items-center mx-3 my-3 text-center lg:text-left hover:bg-accent hover:text-accent-foreground">
          <Link href="/work/work-page1">
            <CardContent>
              <Image
                src="/images/vscodestock.jpeg"
                className="py-5"
                height={400}
                width={400}
                alt="placeholder"
              />
              <CardTitle>test name 1</CardTitle>
              <CardDescription>
                test description of mock project
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex flex-col items-center mx-3 my-3 text-center lg:text-left hover:bg-accent hover:text-accent-foreground">
          <Link href="/work/work-page2">
            <CardContent>
              <Image
                src="/images/vscodestock.jpeg"
                className="py-5"
                height={400}
                width={400}
                alt="placeholder"
              />
              <CardTitle>test name 2</CardTitle>
              <CardDescription>
                test description of mock project
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex flex-col items-center mx-3 my-3 text-center lg:text-left hover:bg-accent hover:text-accent-foreground">
          <Link href="/work/work-page3">
            <CardContent>
              <Image
                src="/images/vscodestock.jpeg"
                className="py-5"
                height={400}
                width={400}
                alt="placeholder"
              />
              <CardTitle>test name 3</CardTitle>
              <CardDescription>
                test description of mock project
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
      </section>
    </Container>
  )
}
