import Header from "@/components/Header"
import Container from "@/components/ui/container"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
        <Container>
          <div>
          <Image
              priority
              src="/images/face.jpg"
              className="rounded-full flex mx-auto my-14"
              height={275}
              width={275}
              alt="Picture of Eliseo's face"
            />
          </div>
          <div className="flex flex-col items-center mt-15 mb-44">
            <h2 className="text-3xl font-bold mb-5">hey there!</h2>
            <p>i&apos;m eliseo-jose, but my friends call me <b>e.j.</b>! welcome to my personal site!</p>
            <p>i wanted this to be as comfy as my room, hence the name, so please make yourself at home & enjoy!</p>
            <p>without further ado; a few things about me...</p>
          </div>
          <div>
            <Image
              src="/images/vscodestock.jpg"
              className="rounded-full flex mt-16 mb-5"
              height={400}
              width={400}
              alt="Picture of laptop screen with code on it"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-5">i&apos;m a <b>web dev</b></h2>
            <p>with skills in:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript & Typescript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>& more (hello, my fellow command line nerds)</li>
            </ul>
            <p>the internet pervades every industry in modern-day life & i&apos;m excited to make my own impact on it!</p>
          </div>
          <div>
          <h2 className="text-3xl font-bold mb-5">i&apos;m a <b>martial artist</b></h2>
          <p>
            with nearly a decade of experience, my continuous effort towards growth has lead me to
            a systems-style of thinking that has pervaded the rest of my life 
          </p> 
          <p>
            this has lead to not only efficiency & efficacy, but also
            adaptability & resiliency in everything i do
          </p>
          </div>
          <div>
            <Image
              src="/images/kick.jpg"
              className="rounded-full flex mt-16 mb-5"
              height={300}
              width={300}
              alt="Picture of eliseo throwing a roundhouse kick"
            />
          </div>
          <div>
          <Image
              src="/images/books.jpg"
              className="rounded-full flex mt-16 mb-5"
              height={300}
              width={300}
              alt="Picture of books taken by yours truly"
            />
          </div>
        </Container>
    </>
  )
}
