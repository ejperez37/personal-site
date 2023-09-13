"use client"

import Header from "@/components/Header"
import Container from "@/components/ui/container"
import Image from "next/image"
import Footer from "@/components/Footer"
import { Separator } from "@/components/ui/separator"

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
          <Separator orientation="horizontal" className="my-10"/>
          <div className="flex justify-between items-center">
            <Image
              src="/images/vscodestock.jpg"
              className="rounded-full flex mt-16 mb-5"
              height={400}
              width={400}
              alt="Picture of laptop screen with code on it"
            />
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
          </div>
          <Separator orientation="horizontal" className="my-10"/>
          <div className="flex flex-row-reverse justify-between items-center">
            <Image
              src="/images/kick.jpg"
              className="rounded-full flex mt-16 mb-5"
              height={300}
              width={300}
              alt="Picture of Eliseo throwing a roundhouse kick"
            />
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
          </div>
          <Separator orientation="horizontal" className="my-10"/>
          <div className="flex justify-between items-center">
            <Image
                src="/images/bookshelf.jpg"
                className="rounded-full flex mt-16 mb-5"
                height={50}
                width={300}
                alt="Picture of books taken by yours truly"
              />
            <div>
              <h2 className="text-3xl font-bold mb-5">i&apos;m a <b>huge nerd</b></h2>
              <p>mainly for learning & personal development. i&apos;m always trying to better myself, my systems, and my principles.</p>
            </div>
          </div>
          <Separator orientation="horizontal" className="my-10"/>
          <div>
            <Image
                priority
                src="/images/sunflowerface.jpg"
                className="rounded-full flex mx-auto my-14"
                height={200}
                width={200}
                alt="Picture of Eliseo's family!"
              />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-5">thanks for visiting!</h2>
            <p>
              if you&apos;ve looked at my works and want to build something together,
              or if you&apos;ve read one of my blog posts and wanted to share some thoughts,  
              please reach out!
            </p>
          </div>
        <Footer/>
        </Container>
    </>
  )
}
