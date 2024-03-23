import MenuBar from "./MenuBar";
import { ModeToggle } from "./mode-toggle";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Header = () => {
	const [header, setHeader] = useState(false);

	useEffect(() => {
		const scrollYProg = window.addEventListener("scroll", () => {
			window.scrollY > 30 ? setHeader(true) : setHeader(false);
		});
		return () => window.removeEventListener('scroll',scrollYProg);
	}, []);
  console.log(header)
	const socialIcons = [
		{
			name: "twiteer",
			icons: <FaSquareXTwitter />,
			link: "",
		},
		{
			name: "linkdin",
			icons: <FaLinkedin />,
			link: "",
		},
		{
			name: "github",
			icons: <FaGithub />,
			link: "",
		},
	];

	return (
		<header className={`${header?'py-1 bg-primary/20   backdrop-blur-md shadow-lg ':' bg-transparent '} sticky top-0 z-50 transition-all `}>
			<div className="h-12 flex px-2 mx-auto">
				<div className="flex justify-between items-center w-full">
					{/* Logo */}
					<div className=" text-lg sm:text-xl md:text-2xl xl:text-3xl text-foreground font-aclonica">
						{" "}
						<Logo />
					</div>
					<div>
						<MenuBar
							containerStyles="hidden lg:flex gap-x-8 items-center"
							underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
						/>
					</div>
					<div className="flex gap-3  ">
						{socialIcons.map((item) => (
							<Button
								size="icon"
								variant="outline"
								key={item.name}
								className={`${
									item.name == "themeToggle" ? "relative bottom-1" : ""
								} text-secondary-foreground w-9 h-9 xl:w-10 xl:h-10  text-xl md:text-2xl xl:text-3xl cursor-pointer `}
							>
								{item.icons}
							</Button>
						))}
						<ModeToggle className="xl:w-12 xl:h-12" />
					</div>
				</div>
				{/* mobile menu  */}
			</div>
		
		</header>
	);
};

export default Header;
