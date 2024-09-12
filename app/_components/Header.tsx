import { buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import {cn} from "@/lib/utils"
import Link from "next/link"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    jasonbailleul.fr
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link
                    href="https://github.com/Djayzon59"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <GithubIcon size={16} className="text-foreground"/>
                    </Link>

                    <Link
                    href="https://www.linkedin.com/in/jason-b-5b7519272/"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <LinkedinIcon size={16} className="text-foreground"/>
                    </Link>

                </ul>
            </Section>
        </header>
    )
}