import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { LuExternalLink } from "react-icons/lu";
import { TbSourceCode, TbDetails } from "react-icons/tb";
import BlurhashImage from "./BlurhashImage";

const ProjectCard = ({ project, cardStyles }) => {
    console.log(project);

    const { image, name, category, description, github, link , id,blurhash} = project;

    return (
        
        <Card
            className={`border-primary/5 overflow-hidden shadow-lg max-w-[400px] m-3 shadow-secondary/20 transition-transform duration-500 ease-in-out ${cardStyles} bg-secondary/20 group relative hover:scale-95 `}
        style={{ transformOrigin: 'center' }} >
            <Badge className='uppercase text-sm  font-medium mb-2 absolute mt-1 ml-1 '>
                {category}
            </Badge>
            <CardHeader className='p-0 '>
                <div className='relative pt-[37px] flex w-full h-full justify-center items-center bg-primary/5 overflow-hidden px-16 transition-all duration-500'>
                    <BlurhashImage
                        src={image}
                        blurhash={blurhash}
                        height={100}
                        alt={name}
                        className=' group-hover:scale-125 transition-all duration-500 shadow-xl shadow-primary/20 group-hover:shadow-primary rounded-t-lg w-full group-hover:bg-cover'
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
                    className={`cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary ${link == "#" && "cursor-not-allowed text-foreground/20 pointer-events-none"}`}>
                    <LuExternalLink />
                    <span className='text-[.7rem]'>Live site</span>
                </a>
                <a
                    href={"https://github.com/rdmondal100"}
                    target='_blank'
                    className={`cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary ${link == "#" && "cursor-not-allowed text-foreground/20 pointer-events-none"}`}
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


// import { Link } from "react-router-dom";
// import { Card, CardHeader, CardFooter, CardDescription } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { LuExternalLink } from "react-icons/lu";
// import { TbSourceCode, TbDetails } from "react-icons/tb";
// import BlurhashImage from "./BlurhashImage";

// const ProjectCard = ({ project, cardStyles }) => {
//     const { image, name, category, description, github, link, id, blurhash } = project;

//     return (
//         <Card
//             className={`border-primary/5 overflow-hidden shadow-lg max-w-[400px] m-3 shadow-secondary/20 transition-transform duration-500 ease-in-out ${cardStyles} bg-secondary/20 group relative`}
//             style={{ transformOrigin: 'center' }} // Keeps the scaling centered
//         >
//             <Badge className='uppercase text-sm font-medium mb-2 absolute mt-1 ml-1'>
//                 {category}
//             </Badge>
//             <CardHeader className='p-0'>
//                 <div className='relative pt-[37px] flex w-full h-full justify-center items-center bg-primary/5 overflow-hidden px-16 transition-all duration-500'>
//                     <BlurhashImage
//                         src={image}
//                         blurhash={blurhash}
//                         height={100}
//                         alt={name}
//                         className='group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/20 rounded-t-lg w-full'
//                     />
//                 </div>
//             </CardHeader>
//             <CardDescription className='h-[11rem] px-8 py-6'>
//                 <h4 className='text-2xl font-heading_font text-foreground/95 mb-1'>
//                     {name.split('').map((char, index) => (
//                         <span
//                             key={index}
//                             className='text-[#CEEB69] inline-block transition-transform duration-500 group-hover:translate-y-0 translate-y-96'
//                             style={{ transitionDelay: `${index * 0.02}s` }}
//                         >
//                             {char}
//                         </span>
//                     ))}
//                 </h4>
//                 <div
//                     className='text-muted-foreground text-lg overflow-hidden line-clamp-3'
//                     dangerouslySetInnerHTML={{ __html: project.description }}
//                 ></div>
//             </CardDescription>
//             <CardFooter className='flex justify-between border-t-[.1px] border-secondary rounded-md pt-3 text-secondary-foreground'>
//                 <a
//                     href={link}
//                     target="_blank"
//                     className={`cursor-pointer flex flex-col items-center justify-center gap-y-[1px] font-general_font hover:text-primary ${link === "#" && "cursor-not-allowed text-foreground/20 pointer-events-none"}`}
//                 >
//                     <LuExternalLink />
//                     <span className='text-[.7rem]'>Live site</span>
//                 </a>
//                 <a
//                     href={"https://github.com/rdmondal100"}
//                     target='_blank'
//                     className={`cursor-pointer flex flex-col items-center justify-center gap-y-[1px] font-general_font hover:text-primary ${link === "#" && "cursor-not-allowed text-foreground/20 pointer-events-none"}`}
//                 >
//                     <TbSourceCode />
//                     <span className='text-[.7rem]'>Source code</span>
//                 </a>
//                 <Link
//                     to={`/projects/${id}/${name}`}
//                     className='cursor-pointer flex flex-col items-center justify-center gap-y-[1px] font-general_font hover:text-primary'
//                 >
//                     <TbDetails />
//                     <span className='text-[.7rem]'>Details</span>
//                 </Link>
//             </CardFooter>
//         </Card>
//     );
// };

// export default ProjectCard;
