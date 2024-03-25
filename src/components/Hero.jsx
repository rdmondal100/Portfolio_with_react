import { useNavigate } from "react-router-dom";
import { riday } from "../assets/index";
import { Button } from "./ui/button";
import { BsFillSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<div className="container lg:flex-row flex flex-col-reverse lg:mt-10  px-10">
			<div className="details lg:w-2/4  flex flex-wrap  gap-2 lg:gap-4 xl:gap-0 ">
				<span className=" font-general_font text-primary/70 text-lg flex justify-center w-full  lg:justify-start">
					FRONTEND DEVELOPER
				</span>
				<div className="font-heading_font text-2xl   w-full text-center text-foreground lg:text-4xl lg:justify-start lg:text-start tracking-tight leading-6 lg:leading-[3rem] ">
					Hi, <br />
					My name is <br />
					<span className=" text-primary font-bold text-3xl lg:text-5xl">
						Riday Mondal
					</span>
				</div>
				<div className=" text-center font-general_font text-lg flex justify-center w-full  text-foreground/70 lg:justify-start lg:text-start ">
					I am a student of computer science and engineering at Bangabandhu Sheikh Mujibur Rahaman Science and Technology University  in Bangladesh. 
				</div>

				<div className="flex  pt-2 flex-col gap-3 m-auto  justify-center lg:pt-0 lg:flex-row lg:m-0">
					<Button
						className="flex gap-1 "
						onClick={() => navigate("/contact")}
					>
						Contact me <BsFillSendFill />
					</Button>
					<Button
						variant="secondary"
						onClick={() => navigate("/projects")}
						className="flex gap-1  "
					>
						My Projects <FaGithub />
					</Button>
				</div>
			</div>
			<div className="img justify-center items-center flex lg:w-2/4">
				<img src={riday} alt="Riday Mondal" className=" w-64 md:w-72 lg:w-80 xl:w-[22rem]" />
			</div>
		</div>
	);
};

export default Hero;
