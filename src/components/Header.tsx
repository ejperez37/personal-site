"use client"

import { Button } from "./ui/button"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
    const {theme, setTheme } = useTheme();
    return (
        <>
            <header>
                <div className="flex justify-around border-b px-2 py-3 max-w-full">
                    <Button asChild variant="ghost"><Link href="/work">work</Link></Button>
                    <Button asChild variant="ghost" className="text-lg"><Link href="/">eliseo&apos;s room</Link></Button>
                    <Button asChild variant="ghost"><Link href="/blog">blog</Link></Button>
                </div>
            </header>
            <div className="flex justify-center">
            <Button variant="ghost" size="icon" aria-label="Toggle Theme"
                    className="mt-7" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle Theme</span>
            </Button>
        </div>
      </>
    )
}

export default Header