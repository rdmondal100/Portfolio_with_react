import { HiHome } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

import { conIllustration } from "../assets/index/";
import Form  from "../components/Form";
import Socials from "@/components/Socials";

const Contact = () => {
    return (
        <section className="px-5 lg:px-12">
            <div className='mx-auto px-5 md:px-6 xl:px-7 text-foreground'>
                {/* text and img  */}
                <div className=' grid md:grid-cols-2 pt-5 place-content-start  mb-8 xl:mb-12 xl:px-10 '>
                    {/* text  */}
                    <div className=' flex flex-col justify-center mt-5  w-full '>
                        <div className=' flex items-center gap-x-3 text-primary text-lg md:text-xl xl:text-2xl mb-2 font-general_font font-bold '>
                            <span className='w-[30px] h-[2px] bg-primary '></span>
                            <span>Say Hello </span>
                            <span className=' animate-wave origin-bottom-right  text-3xl md:text-4xl xl:text-5xl'>
                                👋{" "}
                            </span>
                        </div>
                        
                            <h1 className=' font-heading_font text-4xl xl:text-5xl max-w-[22rem] mb-2 '>
                                Let's Work Together.
                            </h1>
                        
                      
                            <p className=' max-w-[400px] text-muted-foreground mt-4'>
                          Have a project in mind? Let's collaborate and create something amazing. Contact me Now!


                            </p>
                      
                    </div>
                    {/* img  */}
                    <div className=' hidden md:flex w-full justify-end drop-shadow-2xl'>
                        <img
                            src={conIllustration}
                            alt=''
                            height={300}
                            width={350}

                        />
                    </div>
                </div>
                {/* informations and form  */}
                <div className="grid lg:grid-cols-2 xl:mb-32 ">
                  <div className="">
                  {/* info  */}
                  <div className="flex flex-col gap-y-5 md:gap-y-7 xl:gap-y-9 mb-12 xl:mb-24 font-general_font text-base xl:text-lg  ">
                  <div className="mail flex items-center gap-x-2">
                    <HiHome className="text-primary text-lg"/>Khulna, Bangladesh
                  </div>
                  <div className="mail flex items-center gap-x-2">
                    <LuPhoneCall className="text-primary text-lg"/>+880 1621926275
                  </div>
                  <div className="mail flex items-center gap-x-2">
                    <MdContactMail className="text-primary text-lg"/>rdmondal00@gmail.com
                  </div>

                  </div>
                    <Socials containerStyles="flex pb-10  gap-x-10" iconStyles=" text-[1.6rem] xl:text-[1.8rem] "/>
                  
                  </div>

                  <div className="form pb-12">
                    
                  {/* form  */}
                    <Form/>
                  </div>



                </div>
            </div>
        </section>
    );
};

export default Contact;
