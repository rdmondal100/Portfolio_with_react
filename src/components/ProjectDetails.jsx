import useProjectList from "@/hooks/useProjectList"
import { useParams } from "react-router-dom"

import { LuExternalLink } from "react-icons/lu";
import { TbSourceCode } from "react-icons/tb";
import BlurhashImage from "./BlurhashImage";

const ProjectDetails = () => {
  const {id}=useParams()
  const {projectData}=useProjectList()
  const project= projectData.filter((project)=>project.id===id)[0]
  console.log(project)
  return (
    <div className=" h-full w-full mb-10 grid lg:grid-cols-2 lg:mt-16 
      mt-16 px-6 md:px-8 lg:px-10 xl:px-12 lg:gap-x-10">

      <div className="image  flex justify-center rounded-lg items-start">
        <BlurhashImage src={project?.image} blurhash={project?.blurhash} alt=""  className=" rounded-lg w-full max-h-[1200px] max-w-[1600px] object-contain"/>
      </div>

      <div className="details ">
      <div className="links flex text-foreground lg:mt-0 mt-8 w-full gap-8 font-bold">
      <a
                    href={project.link}
                    target="_blank"
                    className='cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary animate-live-link '
                >
                    <LuExternalLink />
                    <span className='text-[.7rem]'>Live site</span>
                </a>
                <a
                    href={project.github}
                    target='_blank'
                    className='cursor-pointer flex flex-col items-center justify-center gap-y-[1px]  font-general_font hover:text-primary'
                >
                    <TbSourceCode />
                    <span className='text-[.7rem]'> Source code</span>
                </a>
      </div>
      <div className="info text-foreground mt-9  ">
        <div className="text-3xl font-bold">

        {project.name}
        </div>
        <div className="desc mt-5" dangerouslySetInnerHTML={{ __html: project.description }} />

      </div>
      </div>


    </div>
  )
}

export default ProjectDetails