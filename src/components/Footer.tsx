import { Github, HelpCircle, Mail } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="flex justify-center pt-10 pb-7">
            <Button variant="ghost" size="icon" aria-label="Github">
                <a href="https://github.com/ejperez37">
                    <Github></Github>
                </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Secret Button">
                <Link href="/secret-page">
                    <HelpCircle></HelpCircle>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
                <a href="mailto:ejperez37@gmail.com?subject=Greetings from your personal site!">
                    <Mail></Mail>
                </a>
            </Button>
        </div>
    )
}

export default Footer