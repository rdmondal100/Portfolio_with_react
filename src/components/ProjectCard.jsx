import { Link } from "react-router-dom";
import {Card,CardHeader} from "./ui/card"
import { Badge } from "./ui/badge";


const ProjectCard = ({ project }) => {

  console.log(project)

  const {image,name,category,description,github,link}=project;

  return (
    <Card className='border-primary/20 overflow-hidden shadow-lg'>
      <CardHeader className="p-0">
        <div className=" relative pt-6 flex w-full justify-center items-center bg-primary/10 h-[300px]">
          <img src={image} alt="" height={250} width={247} className=" shadow-xl shadow-primary/20"/>
        </div>
      </CardHeader>
      <div className=" h-full px-8 py-6">
        <Badge className="uppercase text-sm  font-medium mb-2 absolute top-2 left-2 ">{category}</Badge>
        <h4 className=" text-2xl font-heading_font text-foreground/95 mb-1">{name}</h4>
        <p className=" text-muted-foreground text-lg ">{description}</p>

      </div>
    </Card>
  )
}

export default ProjectCard