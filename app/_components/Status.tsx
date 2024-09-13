import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Building2, Gem, LucideIcon } from "lucide-react";
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-3 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Side projects
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) =>(
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
               
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">
                        Work
                    </p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) =>(
                            <Work
                                key={index}
                                image={work.image}
                                title={work.title}
                                role={work.role}
                                date={work.date}
                                url={work.url}
                            />
                        ))}
                    </div>

                </Card>
                <Card className="p-4 flex-1">Contact me</Card>
            </div>

        </Section>
    );
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Building2,
        title: "SAAS-Crew",
        description: "SAAS destiné aux managers et chefs d'entreprises. Gestion de flottes de véhicules et salariés (en cours).",
        url:"/"
    },
    {
        Logo: Gem,
        title: "Bellidja-Couture",
        description: "Site vitrine pour une boutique de location de robes de mariage à Roubaix (en cours).",
        url:"/"
    }
]

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
}

const WORKS: WorkProps[] = [{
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQGif2_d5Hxg6g/company-logo_100_100/company-logo_100_100/0/1712841741051/_keep_it_logo?e=1734566400&v=beta&t=oRrR04HJPNgqBtWFauzzHkoL9vJfhhQn0KY19cgyvCA",
    title: "Ekeep-it",
    role: "Développeur Full Stack",
    date: "2024",
    url:"https://my-uuu.com/"
},
{
    image: "https://www.toutelasignaletique.com/34684-large_default/cache-plaque-d-immatriculation-occasion.jpg",
    title: "Occaz'en Nord",
    role: "Développeur Backend",
    date: "2023",
    url:""
},

]

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition colors p-1 rounded">
            
                <img 
                    src={props.image} 
                    alt={props.title} 
                    className="w-10 h-10 object-contain"/>
            
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
};