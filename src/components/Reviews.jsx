import { avater1, avater2, avater3, avater4, avater5, avater6 } from "@/assets/index"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { Card, CardDescription, CardTitle, CardHeader } from "./ui/card"

import { BiMerge } from "react-icons/bi";


const Reviews = () => {

  const reviesData = [
    {
      avatar: avater1,
      name: 'Devid Wornar',
      job: 'Chef',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, obcaecati adipisicing elit. Cumque, obcaecati'
    },
    {
      avatar: avater2,
      name: 'Maria ',
      job: 'Infulencer',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, obcaecati'
    },
    {
      avatar: avater3,
      name: 'Ben Stock',
      job: 'Gym Trainer',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, obcaecati adipisicing elit. Cumque, obcaecati'
    },
    {
      avatar: avater4,
      name: 'Sophia',
      job: 'Doctor',
      review: 'Lorem ipsum, amet consectetur adipisicing elit. Cumque, obcaecati dolor sit amet consectetur adipisicing elit. Cumque, obcaecati'
    },
    {
      avatar: avater5,
      name: 'Harry',
      job: 'Actor',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, obcaecati'
    },
    {
      avatar: avater6,
      name: 'Carry Minati',
      job: 'Youtuber',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, obcaecati  amet consectetur adipisicing elit. Cumque, obcaecati '
    },
  ]
  return (
    <section className="pb-12 xl:mb-32 px-5">
      <div className="mx-auto relative z-0 ">
        <div className="section-title ">

        <BiMerge className="section-logo" />

        <h2 className=" ">Reviews</h2>
        </div>
        <Swiper className=" h-[380px]"
          slidesPerView={1} breakpoints={{
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}
        >
          {
            reviesData.map((person, index) => {
              const { avatar, name, job, review } = person;

              return (
                <SwiperSlide key={index} className=" mb-10 ">
                  <div className=" w-full flex justify-center items-center">

                    <Card className='border-primary/10 px-8 py-2 min-h-[300px]  max-w-[400px] shadow-lg shadow-primary/10 m-3 bg-secondary/20 hover:scale-105 transition-all duration-150'>
                      <CardHeader>
                        <div className="flex items-center gap-x-4">
                          <img src={avatar} alt="" width={70} height={70} />
                          <div className="flex flex-col">
                            <CardTitle>{name}</CardTitle>
                            <p>{job}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardDescription className='text-lg text-muted-foreground text-center'>
                        <span className=" text-2xl font-heading_font">{`" `} </span>{review}<span className=" text-2xl font-heading_font">{` "`} </span>
                      </CardDescription>
                    </Card>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews