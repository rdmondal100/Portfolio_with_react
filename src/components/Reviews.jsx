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
      name: 'nikolauo',
      job: 'CEO',
      review: 'Riday has an excellent eye for detail and design. He was also very helpful in advising me on key decisions, such as selecting the right hosting platform and defining MVP features.'
    },
    {
      avatar: avater2,
      name: 'rachelgreen ',
      job: 'Infulencer',
      review: 'Riday is a remarkable guy to collaborate with. His response and attention to detail are impeccable. I will definitely work with him again in the near future. Thank you.'
    },
    {
      avatar: avater3,
      name: 'rickybhurji',
      job: 'Agency Owner',
      review: 'Very professional, delivered on time, followed instructions clearly, and met above expectations. A very great collaborator and made some great suggestions.'
    },
    {
      avatar: avater4,
      name: 'mariajblanc',
      job: 'Infulencer',
      review: 'I sent Riday a message, got a reply within a minute. He sent over the offer for the quick job. Amazing quality, truly impressed by the speed and quality. Will comeback soon.'
    },
    {
      avatar: avater5,
      name: 'robeherbe',
      job: 'Real estate agent',
      review: 'The service was incredibly fast, exceptionally accurate, and completely free of bugs. Communication was smooth and effortless throughout the entire process. I will definitely be working with this PRO on my next project.'
    },
    {
      avatar: avater6,
      name: 'briangitta',
      job: 'Youtuber',
      review: 'An excellent professional, kind, and punctual. For him, the quality of the work and the results are more important than the pay. This attitude made our entire team enjoy working with him and eager to continue our collaboration—and we will!'
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