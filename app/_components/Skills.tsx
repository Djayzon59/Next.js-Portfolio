import { DockerIcon } from "./icons/DockerIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
                Les technologies que j&apos;utilise...
            </h2>

            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon 
                        size={32} 
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}/>
                
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">React</h3>
                    <p className="text-sm text-muted-foreground">
                        &quot;Je travaille avec React et son framework Next.js pour le développement d&apos;interfaces dynamiques - frontend.&quot;
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <DockerIcon 
                        size={32} 
                        className="animate-pulse"
                        style={{ animationDuration: "10s" }}/>
                
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Docker</h3>
                    <p className="text-sm text-muted-foreground">
                        &quot;La conteneurisation permet d&apos;uniformiser l&apos;environnement d&apos;exécution de mes microservices et applications. L&apos;exécution et le déploiement sont facilités avec docker-compose.&quot;
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <JavaIcon 
                        size={32} 
                        className="animate-pulse"
                        style={{ animationDuration: "10s" }}/>
                
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Java</h3>
                    <p className="text-sm text-muted-foreground">
                        &quot;Pour la partie backend j&apos;utilise principalement Java associé à Spring Boot ou Quarkus afin de développer des points de terminaison d&apos;API.&quot;
                    </p>
                </div>
            </div>
        </Section>
    );
};
