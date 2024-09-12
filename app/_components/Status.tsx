import { Card } from "@/components/ui/card";
import { Section } from "./Section";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
                Side projects
            </Card>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">Work</Card>
                <Card className="p-4 flex-1">Contact me</Card>
            </div>

        </Section>
    );
};