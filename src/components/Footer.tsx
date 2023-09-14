import { Github, HelpCircle, Mail } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <div className="flex justify-center pt-10 pb-7">
            <Button variant="ghost" size="icon" aria-label="Github">
                <Github></Github>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Secret Button">
                <HelpCircle></HelpCircle>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
                <Mail></Mail>
            </Button>
        </div>
    )
}

export default Footer