import Image from "next/image";
import Button from "@ui/Button";
import { Skill as SkillType } from "@models/Skill";

type Props = {
    skill: SkillType;
};

const Skill = ({ skill }: Props) => {
    return (
        <Button variant="secondary" asChild key={skill.name}>
            <a href={skill.link} target="_blank" rel="noopener noreferrer" aria-label={skill.name}>
                <Image src={skill.icon} alt={`${skill.name} Logo`} width={50} height={50} className="h-[50px] w-[50px]" />
            </a>
        </Button>
    );
};
export default Skill;
