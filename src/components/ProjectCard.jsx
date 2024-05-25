import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { LuExternalLink } from "react-icons/lu";
import { TbSourceCode, TbDetails } from "react-icons/tb";

const ProjectCard = ({ project, cardStyles }) => {
    console.log(project);

    const { image, name, category, description, github, link , id} = project;

    return (
        <Card
            className={`border-primary/20 overflow-hidden shadow-lg max-w-[400px] m-3 shadow-primary/10 ${cardStyles}`}
        >
            <Badge className='uppercase text-sm  font-medium mb-2 absolute mt-1 ml-1 '>
                {category}
            </Badge>
            <CardHeader className='p-0'>
                <div className=' relative pt-[37px] flex w-full justify-center items-center bg-primary/10   overflow-hidden px-16'>
                    <img
                        src={image}
                        alt=''
                        
                        className=' shadow-xl shadow-primary/20 rounded-t-lg'
                    />
                </div>
            </CardHeader>
            <CardDescription className=' h-[11rem] px-8 py-6 '>
                <h4 className=' text-2xl font-heading_font text-foreground/95 mb-1'>
                    {name}
                </h4>
                <div className=' text-muted-foreground text-lg overflow-hidden line-clamp-3' dangerouslySetInnerHTML={{ __html: project.description }} >
                
                </div>
            </CardDescription>
            <CardFooter className='flex justify-between border-t-[.1px] border-secondary rounded-md pt-3  text-secondary-foreground '>
                <a
                    href={link}
                    target="_blank"
                    className='cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary'
                >
                    <LuExternalLink />
                    <span className='text-[.7rem]'>Live site</span>
                </a>
                <a
                    href={"https://github.com/rdmondal100"}
                    target='_blank'
                    className='cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary'
                >
                    <TbSourceCode />
                    <span className='text-[.7rem]'> Source code</span>
                </a>
                <Link
                    to={`/projects/${id}/${name}`}
                    className='cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary'
                >
                    <TbDetails />
                    <span className='text-[.7rem]'> Details</span>{" "}
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
