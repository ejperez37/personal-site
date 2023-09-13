import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Header = () => {
    return (
        <header className="flex justify-around border-b px-2 py-3">
            <Button asChild variant="link"><Link href="/">work</Link></Button>
            <Separator orientation="vertical" decorative={true} />
            <Button asChild variant="link" className="text-lg"><Link href="/">eliseo&apos;s room</Link></Button>
            <Separator orientation="vertical" decorative={true} />
            <Button asChild variant="link"><Link href="/">blog</Link></Button>
        </header>
    )
}

export default Header