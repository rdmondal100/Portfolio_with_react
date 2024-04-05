import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutImg } from "@/assets";
import { BiMerge } from "react-icons/bi";

import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	GraduationCap,
	Calendar,
	Briefcase,
} from "lucide-react";
import { TbBrandVscode } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

const infoData = [
	{
		icon: <User2 size={20} />,
		text: "Riday Mondal",
	},
	{
		icon: <PhoneCall size={20} />,
		text: "+880 1621926275",
	},
	{
		icon: <Calendar size={20} />,
		text: "Born on 19 Fab, 2002",
	},
	{
		icon: <MailIcon size={20} />,
		text: "rdmondal100@gmail.com",
	},
	{
		icon: <GraduationCap size={20} />,
		text: "B.Sc in Computer Science and Engineering",
	},
	{
		icon: <HomeIcon size={20} />,
		text: "Rajbandh, Batiaghata, Khulna, Bangladesh",
	},
];

const qualificationData = [
	{
		title: "education",
		data: [
			{
				institute:
					"Bangabandhu Sheikh Mujibor Rahaman Science and Technology University",
				qualification: "B.Sc in Computer Science and Engineering",
				years: "2021-present",
			},
			{
				institute: "Shahid Abul Kashem College",
				qualification: "Higher Secondary School Certificate",
				years: "2019-2021",
			},
			{
				institute: "Alaipur Rajbandha High School",
				qualification: "Secondary School Certificate",
				years: "2019",
			},
		],
	},
	{
		title: "experience",
		data: [
			{
				company: " Projects",
				role: "Developer",
				years: "2021-present",
			},
			{
				company: " Open source",
				role: "Front-End Developer",
				years: "2022-present",
			},
		],
	},
];

const skillData = [
	{
		title: "skills",
		data: [
			{
				name: "HTML5, CSS3",
			},
			{
				name: "Javascript, C++,C",
			},
			{
				name: "Front-end Development",
			},
			{
				name: "Tailwind, Bootstrap,SCSS",
			},
			{
				name: "React, Redux, Redux-toolkit",
			},
		],
	},
	{
		title: "tools",
		data: [
			{
				icon: <TbBrandVscode />,
			},
			{
				icon: <FaGit />,
			},
			{
				icon: <CgFigma />,
			},
		],
	},
];

const About = () => {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};
	return (
		<section className="   pb-12 xl:py-24 relative top-0 ">
			<div className=" px-3 md:container mx-auto   ">
			<div className="section-title">

<BiMerge className="section-logo" />

<h2 className=" ">About Me</h2>
</div>
				<div className="info w-full flex flex-col md:flex-row">
					{/* img  */}
					<div className=" hidden lg:flex md:w-2/4 ">
						<img src={aboutImg} alt="" className=" w-72  xl:w-96" />
					</div>
					{/* tabs */}
					<div className=" flex-1 gap-6  md:w-2/4 w-full justify-center h-full ">
						<Tabs defaultValue="personal">
							<TabsList className="flex justify-between xl:h-12  font-general_font ">
								<TabsTrigger
									value="personal"
									className=" xl:text-xl text-base md:text-lg "
								>
									Personal Info{" "}
								</TabsTrigger>
								<TabsTrigger
									value="skill"
									className="xl:text-xl text-base md:text-lg"
								>
									Skills
								</TabsTrigger>
								<TabsTrigger
									value="qualifications"
									className="xl:text-xl text-base md:text-lg"
								>
									Qualifications
								</TabsTrigger>
							</TabsList>
							{/* tabs contents */}
							<div className="text-lg mt-12 xl:mt-8 text-foreground font-general_font">
								<TabsContent value="personal">
									<div className="personal">
										<h3 className=" md:text-left text-accent-foreground font-heading_font text-2xl xl:text-3xl text-center">
											"Bringing Designs to Life, Code by Code"
										</h3>
										<p className=" md:text-left text-center text-secondary-foreground/90 font-general_font mb-8 text-lg xl:text-xl mt-3">
											Wave the canvas, and I am the artist. I delight
											in painting the canvas with code, creating
											masterpieces for you.
										</p>
										{/* icon  */}
										<div className="  grid lg:grid-cols-2 gap-4 mb-12  font-general_font mt-12 text-lg xl:text-[1.2rem] ">
											{infoData.map((item, index) => {
												return (
													<div
														className=" flex justify-center items-center md:justify-start   gap-x-4 lg:mx-0 gap-4"
														key={index}
													>
														<div className=" text-primary">
															{item.icon}
														</div>
														<div className="text-secondary-foreground/90">
															{item.text}
														</div>
													</div>
												);
											})}
										</div>
										{/* language */}
										<div className="flex flex-col font-general_font">
											<div className=" text-primary text-2xl mx-auto md:mx-0 pb-1">
												Language I Speak
											</div>
											<div className="border-b border-border "></div>
											<div className=" mx-auto md:mx-0 text-foreground text-lg mt-3 ">
												English | Bangla | Hindi
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="skill">
									<div className=" text-center lg:text-left">
										<h3 className=" md:text-left text-accent-foreground font-heading_font text-2xl text-center">
											Tools I Use
										</h3>
										<div className=" mb-10">
											<h4 className=" text-xl md:text-2xl mt-5 text-primary md:text-left font-semibold mb-2">
												Skills
											</h4>
											<div className="border-b border-border mb-4"></div>
											{/* skill lists */}
											<div className=" text-secondary-foreground/90">
												{getData(skillData, "skills").data.map(
													(item, index) => {
														const { name } = item;
														return (
															<div
																className="w-2/4  text-center md:mx-0 md:text-left mx-auto xl:mx-0 text-base md:text-lg"
																key={index}
															>
																<div className="font-medium">
																	{name}
																</div>
															</div>
														);
													}
												)}
											</div>
										</div>

										{/* tools  */}
										<div className="mb-10">
											<h4 className="text-xl md:text-2xl font-semibold mb-2 md:text-left  text-primary">
												Tools
											</h4>
											<div className="border-b border-border mb-4"></div>
											{/* tool list  */}
											<div className="flex gap-x-5   justify-center md:justify-start">
												{getData(skillData, "tools").data.map(
													(item, index) => {
														const { icon } = item;
														return (
															<div
																key={index}
																className=" text-3xl md:text-4xl text-primary"
															>
																{icon}
															</div>
														);
													}
												)}
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="qualifications">
									<div className=" font-general_font pb-20">
										<h3 className=" md:text-left text-accent-foreground font-heading_font text-2xl text-center mb-6">
											My Journey
										</h3>
										<div className=" xl:grid xl:grid-cols-2 gap-x-4 relative mb-">
											{/* educations */}
											<div className="  flex flex-col gap-x-4  text-[22px] text-primary px-2">
												<div className=" flex gap-x-4 items-center text-[22px] text-primary">
													<GraduationCap />
													<h4 className=" capitalize font-medium ">
														{
															getData(
																qualificationData,
																"education"
															).title
														}
													</h4>
												</div>
												{/* list  */}
												<div className="flex flex-col gap-y-3 ml-10 mt-2">
													{getData(
														qualificationData,
														"education"
													).data.map((item, index) => {
														const {
															institute,
															qualification,
															years,
														} = item;
														return (
															<div
																className=" bg-primary/10 p-3 group  rounded-sm relative"
																key={index}
															>
																<div className=" h-[80%] w-[2px] bg-border absolute left-0 ml-2 ">
																	<div className=" w-[11px] h-[11px] rounded-full bg-primary relative -left-[5px] top-0 group-hover:top-[95%] transition-all duration-500  "></div>
																</div>

																<div className=" ml-3">
																	<div className="font-semibold text-foreground text-xl leading-none mb-4">
																		{institute}
																	</div>
																	<div className=" text-lg leading-none text-muted-foreground mb-4">
																		{qualification}
																	</div>
																	<div className=" text-base text-muted-foreground font-medium">
																		{years}
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</div>
											{/* experience  */}
											<div className=" flex flex-col gap-x-4 xl:mt-0 mt-8  text-[22px] text-primary">
												<div className=" flex gap-x-4 items-center text-[22px] text-primary ">
													<Briefcase />
													<h4 className=" capitalize font-medium ">
														{
															getData(
																qualificationData,
																"experience"
															).title
														}
													</h4>
												</div>
												{/* list  */}
												<div className="flex flex-col gap-y-3 ml-10 mt-2">
													{getData(
														qualificationData,
														"experience"
													).data.map((item, index) => {
														const { company, role, years } = item;
														return (
															<div
																className=" bg-primary/10 p-3 group  rounded-sm relative"
																key={index}
															>
																<div className=" h-[80%] w-[2px] bg-border absolute left-0 ml-2">
																	<div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:top-[95%] top-0 transition-all duration-500"></div>
																</div>

																<div className=" ml-3">
																	<div className="font-semibold text-foreground text-xl leading-none mb-2">
																		{company}
																	</div>
																	<div className=" text-lg leading-none text-muted-foreground mb-4">
																		{role}
																	</div>
																	<div className=" text-base text-muted-foreground font-medium">
																		{years}
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
