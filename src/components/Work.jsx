import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { w1,w2,w3,w4 } from "@/assets"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'


import ProjectCard from "./ProjectCard"


const Work = () => {
  const projectData = [
    {
      image: w1,
      category: 'react js',
      name: "Nex Website",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
      link: '/',
      github: '/'
    },
    {
      image: w4,
      category: 'vanila js',
      name: "Hotel Website",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
      link: '/',
      github: '/'
    },
    {
      image: w1,
      category: 'react js',
      name: "Hospital Website",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
      link: '/',
      github: '/'
    },
    {
      image: w2,
      category: 'next js',
      name: "Gym Website",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
      link: '/',
      github: '/'
    },
    {
      image: w3,
      category: 'react js',
      name: "School Website",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
      link: '/',
      github: '/'
    },
    {
      image: w4,
      category: 'next js',
      name: "Ecommerce Website",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
      link: '/',
      github: '/'
    },
  ]
  return (
    <section className=" relative mb-12 text-foreground">
      <div className="container w-full flex flex-col xl:flex-row ">

        <div className="flex justify-center items-center flex-col  py-4 xl:w-[20%]">
          <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto text-primary/90  font-general_font ">Latest Projects</h2>
          <p className=" pb-6 text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quasi?</p>
          <Link to={'/projects'}>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="w-full xl:w-[70%]  p-2 xl:absolute xl:right-0 xl:top-0  px-4 ">

          <Swiper className="h-[480px]  " slidesPerView={1} breakpoints={{
            640:{
              slidesPerView:2
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            {
              projectData.slice(0, 4).map((project, index) => {
                return <SwiperSlide key={index} >
                  <ProjectCard project={project}/>
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