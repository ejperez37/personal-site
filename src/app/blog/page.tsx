import { Card } from '@/components/ui/card'
import PostsList from '@/components/PostsList'
import Container from '@/components/ui/container'

export default function Page() {
  return (
    <Container>
      <section className="mx-6 mt-6 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6 underline">my blog.</h2>
        <Card className="px-3 py-3 leading-7">
          <h3 className="italic text-center text-lg">read this first!</h3>
          <p>
            i&apos;m a huge fan of journaling and note-taking; they have been
            some of the most reliable tools for furthering my understanding of
            myself and of the world. in conjunction with my love for reading,
            the satisfaction i get from writing a comprehensive & nuanced piece
            on a particular subject is irreplaceable.
          </p>
          <br />
          <p>
            to be upfront, however, this is for me to share my thoughts on what
            i&apos;m currently learning or working on. i may or may not use
            specific nomenclature without further explanation. things that seem
            revelational or impactful to me and<i> my systems</i> might seem
            inconsequential to you. as you read more and more, you should be
            able to pick up on common principles and themes that i touch on and
            connect the dots for yourself.
          </p>
          <br />
          <p>
            as a proponent of open-source knowledge, i implore you to do your
            own research and take the wheel in your own education - and to not
            rely on strangers on the internet to give you food for thought{' '}
            <i className="underline">and</i> do the dishes for you!
          </p>
        </Card>
      </section>
      <PostsList></PostsList>
    </Container>
  )
}
