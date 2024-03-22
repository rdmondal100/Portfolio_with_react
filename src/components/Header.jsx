import MenuBar from "./MenuBar";
import { ModeToggle } from "./mode-toggle";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MobileMenueBar } from "./MenuBar";
import { Button } from "./ui/button";

const Header = () => {

	const socialIcons=[
		{
			name:"twiteer",
			icons: <FaSquareXTwitter />,
			link:''
		},
		{
			name:"linkdin",
			icons: <FaLinkedin />,
			link:''
		},
		{
			name:"github",
			icons: <FaGithub />,
			link:''
		},
	
	] 

	return (
		<header>
			<div className=" px-2 mx-auto bg-foreground/20  h-16 flex backdrop-blur-md">
				<div className="flex justify-between items-center w-full">
					{/* Logo */}
					<div className=" text-sm sm:text-lg md:text-xl xl:text-2xl text-foreground font-aclonica">Riday Mondal</div>
					<div>
						<MenuBar containerStyles='hidden md:flex gap-x-8 items-center' underLineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
					
					</div>
					<div className="flex gap-3  ">
						{socialIcons.map((item)=>(<Button size="icon" variant="outline"  key={item.name}  className={`${item.name=="themeToggle"?'relative bottom-1':''} text-secondary-foreground w-9 h-9 xl:w-10 xl:h-10  text-xl md:text-2xl xl:text-3xl cursor-pointer `}>{item.icons}</Button>))}
						<ModeToggle className="xl:w-12 xl:h-12"/>
						
					</div>

				</div>
					{/* mobile menu  */}            
					
			</div>
					<MobileMenueBar mobileTopLine='absolute rounded-lg bottom-full h-[2px] bg-primary w-16 '/>

		</header>
	);
};

export default Header;
