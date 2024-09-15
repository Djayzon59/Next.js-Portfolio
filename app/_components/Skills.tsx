import { JavaIcon } from "./icons/JavaIcon";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>

            <div>
                <div className="flex flex-col gap-4">
                    <JavaIcon size={32} className="animate-spin"/>
                </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Marketing</h3>
                    <p className="text-sm text-muted-foreground">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>

        </Section>
    );
};