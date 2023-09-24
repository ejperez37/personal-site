import Container from '@/components/ui/container'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Home() {
  return (
    <>
      <Container>
        <main>
          <Image
            priority
            src="/images/face.jpg"
            className="rounded-full mx-auto mt-7 mb-7"
            height={275}
            width={275}
            alt="Picture of Eliseo's face"
          />
          <div className="flex flex-col justify-center items-center text-center mb-32 leading-7 mx-3">
            <h2 className="text-3xl font-bold mb-6">hey there!</h2>
            <p>
              i&apos;m
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="ms-1"> eliseo-jose</TooltipTrigger>
                  <TooltipContent>
                    <p>pronounced: el-ee-say-oh hoh-say</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              , but my friends call me <b>e.j.</b>! welcome to my personal site.
            </p>
            <p>
              i wanted this to be as comfy as my room, where my friends and i
              would hang out(hence the name), so please make yourself at home!
            </p>
            <p className="mt-6">
              without further ado; a few things about me...
            </p>
          </div>
        </main>
        <Separator orientation="horizontal" className="my-10" />
        <section className="flex flex-col sm:flex-row justify-around items-center text-center mb-14 mx-3">
          <Image
            src="/images/vscodestock.jpeg"
            className="rounded-full mt-6 mb-7"
            height={400}
            width={400}
            alt="Picture of laptop screen with code on it"
          />
          <div>
            <h2 className="text-3xl font-bold mb-7">
              i&apos;m a <b className="underline">web developer</b>
            </h2>
            <ul>
              <li>with skills in:</li>
              <ul className="grid grid-flow-col grid-rows-3 gap-2 max-w-full underline">
                <li>html</li>
                <li>css</li>
                <li>javascript & typescript</li>
                <li>react.js</li>
                <li>next.js</li>
                <li>& more (hello, fellow command line nerds)</li>
              </ul>
            </ul>
            <p className="mt-4 leading-7">
              the internet pervades every industry in modern-day life & i&apos;m
              excited to make an impact on it!
            </p>
          </div>
        </section>
        <Separator orientation="horizontal" className="my-10" />
        <section className="flex flex-col sm:flex-row-reverse justify-between items-center text-center leading-7 mb-14 sm:mx-14">
          <Image
            src="/images/kick.jpg"
            className="rounded-full mt-6 mb-7"
            height={300}
            width={300}
            alt="Picture of Eliseo throwing a roundhouse kick"
          />
          <div className="flex flex-col mx-3">
            <h2 className="text-3xl font-bold mb-7">
              i&apos;m a <b className="underline">martial artist</b>
            </h2>
            <p>
              perennial effort towards growth has lead me to a systems-style of
              thinking that has impacted the rest of my life.
            </p>
            <p>
              this has lead to not only efficiency & efficacy, but also
              adaptability & resiliency in everything i do.
            </p>
            <p>
              ~10 years of experience across muay thai, boxing, and jiu-jitsu;
              and judo is next!
            </p>
          </div>
        </section>
        <Separator orientation="horizontal" className="my-10" />
        <section className="flex flex-col sm:flex-row justify-between items-center text-center leading-7 mb-14 sm:mx-14">
          <Image
            src="/images/bookshelf.jpg"
            className="rounded-full mt-6 mb-7"
            height={50}
            width={300}
            alt="Picture of books taken by yours truly"
          />
          <div className="mx-3">
            <h2 className="text-3xl font-bold mb-7">
              i&apos;m a <b className="underline">huge nerd</b>
            </h2>
            <p>mainly for learning & personal development.</p>
            <p>
              i&apos;m always trying to better myself, my systems, and my
              principles.
            </p>
            <p>
              sitting down with a book or a video lecture & taking notes is my
              favorite way to enjoy an afternoon.
            </p>
          </div>
        </section>
        <Separator orientation="horizontal" className="my-10" />
        <section>
          <Image
            priority
            src="/images/sunflowerface.jpg"
            className="rounded-full mx-auto mt-12 mb-7"
            height={200}
            width={200}
            alt="Picture of Eliseo with a flower"
          />
          <div className="flex flex-col items-center text-center leading-7 mx-3">
            <h2 className="text-3xl font-bold mb-5">thanks for visiting!</h2>
            <p>
              if you&apos;ve looked at my work and want to build something
              together, or if you&apos;ve read one of my blog posts and wanted
              to share some thoughts, please reach out!
            </p>
          </div>
        </section>
      </Container>
    </>
  )
}
