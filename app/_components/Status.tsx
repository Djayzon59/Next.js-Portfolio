import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Building2, Gem, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-3 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Side projects
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project) =>(
                            <SideProject
                                key={project.title}
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
                        {WORKS.map((work) =>(
                            <Work
                                key={work.title}
                                {...work}
                            />
                        ))}
                    </div>

                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard 
                        name ="Jason Bailleul" 
                        image="moir.png" 
                        mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///+UlJT8/Pyfn5+RkZH5+fnl5eU6OjovLy+qqqqZmZlycnLLy8u/v7/k5ORUVFR5eXnS0tKGhoYtLS0WFhZTU1Pw8PCEhIRHR0fQ0NCvr6/t7e23t7daWloiIiJkZGQPDw8/Pz+lpaXa2tpoaGgbGxvprLzfAAAE5klEQVR4nO3d61biMBQFYAqUUkAQUFFhlPH2/o844MyowDknaQl0H9beP7tayLfSW9I0bWWXnlbTBTh5KPQfCv2HQv+h0H8o9B8K/YdC/6HQfyKExXLabyGmPx1MjhcWw7JpiJmyXRwlLKZNCyIyso2mcNh04SPTriksMI8+KaVRjbrwquliV8pVdeG46TJXzLiq0FcNbqPVoiIsmi5vjSjHoiL0c5L5Tr+KsN10aWtFvmiIQo/76DbifioKR00XtWZGsUKvVShXoiT0eRRuIx2JkvCm6YLWThknnDRdziMi7KaCcNB0MY/IIErooU2oZRol9Hg/8z/CfY0gbLqUR4VCCvFDIYX4oZBC/FBIIX4opBA/KYXP+fjzKfpkPH8+aaErJZ1wPfu5ydXTiQsenVTCj4NHWSiPGxMJ+4vDrYrb0xc/ImmEZe9woyxb/T4DIJg0QmWYDsSOmkQo9En+DcLpJolQHdmB8Ow/hfBFA0LcK6QQqjspxG6aQpjrwvwsCDMnFnbPgjCTQnivC+dnQZhJIbzThS9nQZhJIWyJdzTbdM5BCCSJsKsJER4eJxFqldhBGOGQRigOzIE4zyRrPYkXDIR9NF0LWLivARkTnkrY6u818t+uT130yCQTbm7Al18N/d4Y4Ib0XxIKN7ld591u/g7U08b+Ugo9hEIK8UMhhfihkEL8UBgjzLOOkr0e4Z62Xqd3+Kvl/WA8+dyiV1wt84cmhcaL07vCjrrenrCcC+9/Pua13hlAFE5n2mpvNd6hwxMOhSEB31ndexfO1f7zL2PFDiAs4V3EvB1ZtvQrHMb4NplUmXsESaieYA5Xr3DtwBGW5hlmP2t/wofgKWY30R2yKMKbSjW4TexzLRBhZ1UVGP1+OYiwTiLHlAkcYRGkMHIaBIEjLMIULi5emL1evDCLGaMrcIRFqMKY5+gCR1iEKuxFVKLAERahCmNGewgcYRGs8O3ihRHTPQgcYdFZhbPlfLQe5cvHmJXDM+egCSc/j6xRuMU4cybs7J851qGZOsO91VDCldA78SuwTbC1jySU20Ov9kbBcdZAwoXSprVrMdiGAhK+a79vto5XfoT6+zXGOPKIgdY4QqMPVJ2JdJtQfw2M0HpFyqzEOy9C9SjcxursD/VloAgXZjvI6u4PPYxCET6a/3BtCEMNKBRh4A7a2DL08hiKMHA0GQeiF2HgBSnjehFqP4EIOx/2XwjzOzoTCqNNdmLcfl+IUH13jEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIK92OMUd59F1lfL/QXxsi90ITMKYTX7VxJe3f2Cm21TQJ/8aT/RWhCnhRC7FBIIX4opBA/FFKIHwo/U2veUJD0o4TTpot5RITPwwhCjE/i1IvwTpggnDRdzCMiTKwhtVOrzKaJlVLQSMLwLDCokXpYJGHsHIV4kWZ/EXtTaszBDBHxA6Ki0GslihP4yD1iIJ8Yqxi5F1Dp8/N4XyPczxhCj/upMsmU1m+L8H3mahHm5jeFGN8RrxB1lgK9791XLWo1aAmzws/ppm9M9GY9P3Fz0TAehwWEWeGhrTiyZ+qzhRvjELulUbZDMxGGhJusllPMI7I/HUR8PyJC6DwU+g+F/kOh/1DoPxT6D4X+Q6H/UOg/ly/8A873cos7VBBJAAAAAElFTkSuQmCC"
                        description="Linkedin"/>
                    <ContactCard 
                        name ="07 80 55 20 23" 
                        image="moir.png" 
                        mediumImage="https://get-picto.com/wp-content/uploads/2024/03/Logo-telephone-PNG-bleu.webp"
                        description="Tel"/>
                </Card>
                
            </div>

        </Section>
    );
};

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-8 h-8 rounded-full object-contain"/>
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1"/>
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight size={16}/>
        </Card>
    )

};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Building2,
        title: "SAAS-Crew",
        description: "SAAS destiné aux managers et chefs d'entreprises. Gestion de flottes de véhicules et salariés (en cours).",
        url:"/",
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
    url:"https://my-uuu.com/",
    freelance: false,
},
{
    image: "https://www.toutelasignaletique.com/34684-large_default/cache-plaque-d-immatriculation-occasion.jpg",
    title: "Occaz'en Nord",
    role: "Développeur Backend",
    date: "2023",
    url:"",
    freelance: false,
},

]

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition colors p-1 rounded">
                <img 
                    src={props.image} 
                    alt={props.title} 
                    className="w-10 h-10 object-contain"
                />
            
            <div>
                <div className="flex items-center gap-2">
                <p className="text-md font-semibold">{props.title}</p>
                {props.freelance && <Badge variant="outline">mission</Badge>}
                </div>
                
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
};