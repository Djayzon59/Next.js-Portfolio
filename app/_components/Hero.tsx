import { Section } from "./Section";

export const Hero = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full p-4 flex flex-col gap-2">
            <h2 className="font-caption text-5xl text-primary">Jason Bailleul</h2>
            <h3 className="text-3xl font-caption ">Développeur Full Stack</h3>
            <p>
                Bienvenue sur mon portfolio ! <br/>
                Passionné par la programmmation, je vous invite à me découvrir à travers une présentation de mes réalisations ! <br/>
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img 
                src="moir.png"
                className="w-full h-auto max-w-xs max-md:w-46"
                alt="jason's picture"
            />
        </div>
    </Section>
  );
};


