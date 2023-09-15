import Container from "@/components/ui/container"
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Container>
                <div className="ms-6">
                <h2 className="text-3xl font-bold mb-6 underline">you&apos;ve found my secret page!</h2>
                <p>truth be told, i have a pretty staunch hatred for social media; at least for personal use.</p>
                <p>but, the part of it where you get to share the people and things you care about is admittedly fun so... here we are!</p>
                </div>
                <div className="grid grid-cols-3 grid-flow-row gap-2 mt-7">
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
                                <p>My cat named Onion - he&apos;s pretty great</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center items-center">
                        <CardContent>
                            <Image
                            priority
                            src="/images/waterfirecanal.jpg"
                            className="mx-auto mt-7"
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
                                <p>I remember being mesmerized by the water this night...</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card>
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
                                <p>A follow up picture of my head kick haha!</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center items-center">
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
                                <p>Me and my son</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center items-center">
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
                                <p>These two have been through it all with me; couldn&apos;t be more grateful for the people in my life</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center items-center">
                        <CardContent>
                            <Image
                            priority
                            src="/images/sunflowerfam.jpg"
                            className="mx-auto mt-7"
                            height={400}
                            width={400}
                            alt="Picture of Eliseo and family"
                        />
                        </CardContent>
                        <CardFooter className="flex flex-col items-center justify-center">
                            <CardTitle>
                                <p>10.15.22</p>
                            </CardTitle>
                            <CardDescription>
                                <p>A beautiful outing with the fam!</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center items-center">
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
                                <p>One of those moments where all you can think about is remembering every granule of sensation that you can</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center items-center">
                        <CardContent>
                            <Image
                            priority
                            src="/images/niagaraanddad.jpg"
                            className="mx-auto mt-7"
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
                                <p>My Dad and I at Niagara Falls</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </div>
            </Container>
        </>
    )
}