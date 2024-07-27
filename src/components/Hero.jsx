import { useNavigate } from "react-router-dom";
import { riday } from "../assets/index";
import { Button } from "./ui/button";
import { GrSend } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import BlurhashImage from "./BlurhashImage";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <main className='container mt-12  lg:flex-row flex flex-col-reverse    px-10  pb-20 sm:pb-24'>
            <div className='details lg:w-2/4 flex flex-col flex-1 gap-2 lg:gap-4 xl:gap-8 lg:mt-16'>
                <span className=' font-general_font text-primary/70 text-lg xl:text-xl flex justify-center w-full  lg:justify-start'>
                    FRONTEND DEVELOPER
                </span>
                <div className='font-heading_font text-2xl   w-full text-center text-foreground lg:text-4xl lg:justify-start lg:text-start tracking-tight leading-6 lg:leading-[3rem] '>
                    Hi, <br />
                    My name is <br />
                    <span className=' text-primary font-bold text-3xl lg:text-5xl'>
                        Riday Mondal
                    </span>
                </div>
                <div className=' text-center font-general_font text-lg xl:text-xl flex justify-center w-full  text-foreground/70 lg:justify-start lg:text-start '>
                    I am a student of computer science and engineering at
                    Bangabandhu Sheikh Mujibur Rahaman Science and Technology
                    University in Bangladesh. Specializing in Front-end web
                    development as an expert React Js developer.
                </div>

                <div className='flex  pt-1 flex-col gap-3 m-auto mt-0 sm:mt-3  lg:pt-0 lg:flex-row lg:m-0'>
                    <Button
                        className='flex gap-1 text-lg btn '
                        onClick={() => navigate("/contact")}
                    >
                        <span className="flex gap-1 justify-center items-center btn_span">

                        Contact me <GrSend className=' ' />
                        </span>
                    </Button>
                    <Button
                    varient="default"
                        onClick={() => navigate("/projects")}
                        className='flex gap-1 text-lg  btn bg-amber-500'
                    >
                        <span className=' btn_span flex justify-center items-center gap-1 '>
                            My Projects <FaGithub className=" icon"/>
                        </span>
                    </Button>
                </div>
            </div>
            <div className='img justify-center items-center flex lg:w-2/4 lg:h-[80vh] mt-[-1.5rem] '>
                <BlurhashImage
                    src={riday}
                    blurhash='LOKnG1M{LNRO?wofsVRj0f-;Z$S4'
                    alt='Riday Mondal'
                    width={250}
                    height={250}
                    className='w-64 md:w-72 lg:w-80 xl:w-[22rem] rounded-full'
                />
            </div>
            <div className='hidden lg:flex absolute left-2/4 bottom-11 lg:bottom-2 animate-bounce'>
                <FaAngleDown className='text-3xl text-primary ' />
            </div>
        </main>
    );
};

export default Hero;
