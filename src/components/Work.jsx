import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { w1,w2,w3,w4 } from "@/assets"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


import ProjectCard from "./ProjectCard"
import { BiMerge } from "react-icons/bi";
import useProjectList from "@/hooks/useProjectList"


const Work = () => {
  const {projectData}=useProjectList()

  return (
    <section className=" xl:flex relative xl:h-[500px] xl:mb-20 mb-12 text-foreground z-0">
      <div className=" px-2   w-full flex flex-col xl:flex-row ">

        <div className="flex justify-center items-center flex-col  py-4 xl:w-[30%]">
        <div className="section-title ">

<BiMerge className="section-logo" />

<h2 className=" ">Latest Projects</h2>
</div>
          <p className=" pb-6 text-center xl:text-xl text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quasi?</p>
          <Link to={'/projects'}>
            <Button className='text-lg'>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="w-full xl:w-[65%]     p-2 xl:absolute xl:right-0 xl:top-0  px-4 ">

          <Swiper className="  h-[550px]" slidesPerView={1} breakpoints={{
            768:{
              slidesPerView:2
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            {
              projectData.slice(0, 4).map((project, index) => {
                return <SwiperSlide key={index}  className="">
                  <div className="flex w-full gap-x-20 justify-center items-center ">

                  <ProjectCard project={project}/>
                  </div>
                </SwiperSlide>
              })
            }

          </Swiper>
        </div>
      </div>

    </section>
  )
}

export default Work