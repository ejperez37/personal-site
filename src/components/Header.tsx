import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div className="flex justify-around border-b px-2 py-3 max-w-full">
                <Button asChild variant="ghost"><Link href="/">work</Link></Button>
                <Button asChild variant="ghost" className="text-lg"><Link href="/">eliseo&apos;s room</Link></Button>
                <Button asChild variant="ghost"><Link href="/">blog</Link></Button>
            </div>
        </header>
    )
}

export default Header