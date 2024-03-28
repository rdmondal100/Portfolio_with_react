import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutImg } from "@/assets";

const infoData = [];
const About = () => {
	return (
		<section className=" xl:h-[860px] h-screen pb-12 xl:py-24 relative top-0">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto text-primary/90  font-general_font ">
					About me
				</h2>
				<div className="info w-full flex flex-col md:flex-row">
					{/* img  */}
					<div className=" hidden md:flex md:w-2/4 ">
						<img src={aboutImg} alt="" className=" w-72  xl:w-96" />
					</div>
					{/* tabs */}
					<div className=" flex-1 gap-6  md:w-2/4 w-full justify-center ">
						<Tabs defaultValue="personal">
							<TabsList className="flex justify-between xl:h-12 xl:max-w-[520px] font-general_font ">
								<TabsTrigger value="personal" className=" xl:text-xl text-base md:text-lg">
									Personal Info{" "}
								</TabsTrigger>
								<TabsTrigger value="skill" className="xl:text-xl text-base md:text-lg">Skills</TabsTrigger>
								<TabsTrigger value="qualifications" className="xl:text-xl text-base md:text-lg">
									Qualifications
								</TabsTrigger>
							</TabsList>
							{/* tabs contents */}
							<div className="text-lg mt-12 xl:mt-8">
								<TabsContent value="personal">
									{" "}
									personal info
								</TabsContent>
								<TabsContent value="skill"> Skills info</TabsContent>
								<TabsContent value="qualifications">
									qualifications info
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
