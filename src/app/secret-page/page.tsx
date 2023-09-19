import Container from '@/components/ui/container'
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Container>
        <div className="mx-6 mt-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 underline">
            you&apos;ve found my secret page!
          </h2>
          <p>
            truth be told, i have a pretty stark hatred for social media; at
            least for my own personal use.
          </p>
          <p>
            but, the part of it where you get to share the people and the things
            you care about is admittedly fun so... here we are!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-2 mt-7 text-center">
          <Card className="flex flex-col justify-center items-center">
            <CardContent>
              <Image
                priority
                src="/images/onionsmush.jpg"
                className="mx-auto mt-7"
                height={300}
                width={300}
                alt="Picture of my cat, Onion"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>09.09.23</p>
              </CardTitle>
              <CardDescription>
                <p>my cat named onion - he&apos;s pretty great</p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/waterfirecanal.jpg"
                className="mx-auto mt-16"
                height={400}
                width={400}
                alt="Picture of Waterfire in Providence RI"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>08.19.23</p>
              </CardTitle>
              <CardDescription>
                <p>i remember being mesmerized by the water this night...</p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/kickingbob.jpg"
                className="mx-auto mt-7"
                height={200}
                width={200}
                alt="Picture of Eliseo's head-kick"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>06.06.23</p>
              </CardTitle>
              <CardDescription>
                <p>bob stood no chance</p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/polaroidcat.jpg"
                className="mx-auto mt-7"
                height={300}
                width={300}
                alt="Picture of my cat and I in a polaroid"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>04.20.23</p>
              </CardTitle>
              <CardDescription>
                <p>me and my son</p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/boysss.jpg"
                className="mx-auto mt-7"
                height={300}
                width={300}
                alt="Picture of two of my closest brothers"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>03.11.23</p>
              </CardTitle>
              <CardDescription>
                <p>
                  these two have been through it all with me; couldn&apos;t be
                  more grateful for the people in my life
                </p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/sunflowerfam.jpg"
                className="mx-auto mt-16"
                height={400}
                width={400}
                alt="Picture of Eliseo and family"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-between">
              <CardTitle>
                <p>10.15.22</p>
              </CardTitle>
              <CardDescription>
                <p>a beautiful outing with the fam!</p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/babyjuiceatsea2022.jpg"
                className="mx-auto mt-7"
                height={300}
                width={300}
                alt="Picture of my lovely girlfriend and I"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>08.20.22</p>
              </CardTitle>
              <CardDescription>
                <p>
                  one of those moments where all you can think about is
                  remembering every granule of sensation possible
                </p>
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-around items-center">
            <CardContent>
              <Image
                priority
                src="/images/niagaraanddad.jpg"
                className="mx-auto mt-16"
                height={400}
                width={400}
                alt="Picture of my Dad and I"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardTitle>
                <p>08.02.18</p>
              </CardTitle>
              <CardDescription>
                <p>my dad and i at niagara falls</p>
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </>
  )
}
