import { Project as ProjectType } from "@models/Project";
import Badge from "@ui/Badge";
import Button from "@ui/Button";
import Image from "next/image";

const Project = ({ name, description, link, github, image, tags }: ProjectType) => {
    return (
        <div className="max-w-prose overflow-hidden rounded-lg bg-zinc-50 shadow">
            {image && <Image src={image} alt={name} width={1280} height={720} />}
            <div className="flex flex-wrap gap-x-2 px-6 py-2">
                {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="mt-2">
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className="px-6 py-2">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-2 text-zinc-700">{description}</p>
                <div className="mt-2 flex flex-row gap-2">
                    <Button size="small" variant="primary" asChild>
                        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Live">
                            Live
                        </a>
                    </Button>
                    <Button size="small" variant="ghost" asChild>
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                            GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Project;
