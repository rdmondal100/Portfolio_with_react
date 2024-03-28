// eslint-disable-next-line react/prop-types
import { HiHome } from "react-icons/hi";
import { FaBloggerB } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
	{
		name: "Home",
		activeName: "<Home/>",
		icon: <HiHome />,
		slug: "/",
	},
	{
		name: "Projects",
		activeName: "<Projects/>",

		icon: <FaCode />,
		slug: "/projects",
	},
	{
		name: "Blogs",
		activeName: "<Blogs/>",

		icon: <FaBloggerB />,
		slug: "/blogs",
	},
	{
		name: "Contact",
		activeName: "<Contact/>",

		icon: <MdMarkEmailRead />,
		slug: "/contact",
	},
];

// eslint-disable-next-line react/prop-types
//dekstop menu bar
const MenuBar = ({ containerStyles, underLineStyles }) => {
	const navigate = useNavigate();
	const currentPath = useLocation();
	return (
		<div
			className={`${containerStyles} list-none text-foreground text-lg xl:text-xl xl:gap-24 md:gap-16 font-aclonica`}
		>
			{navItems.map((item) => (
				<li
					key={item.name}
					className={`cursor-pointer transition-all hover:text-primary  ${
						currentPath.pathname == item.slug
							? "text-primary  scale-110 -translate-y-[.2rem] "
							: null
					} `}
					onClick={() => navigate(item.slug)}
				>
					{currentPath.pathname == item.slug && (
						<motion.span
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							transition={{ type: "tween" }}
							layoutId="underLine"
							className={`${underLineStyles}`}
						/>
					)}
					{currentPath.pathname == item.slug ? item.activeName : item.name}
				</li>
			))}
		</div>
	);
};

// eslint-disable-next-line react/prop-types
//mobile menu bar
export const MobileMenueBar = ({mobileTopLine}) => {
	const navigate = useNavigate();
	const currentPath = useLocation();
	console.log(currentPath);

	return (
		<div className="list-none fixed bottom-0 flex justify-between items-center w-full px-8 h-12 md:h-14 bg-foreground/20 backdrop-blur-sm lg:hidden  text-muted-foreground pb-4 border-t-[.01rem] border-t-foreground/10">
			{navItems.map((item) => (
				<li
					key={item.slug}
					className={`cursor-pointer text-xl flex flex-col justify-center transition-all items-center sm:text-2xl  ${
						currentPath.pathname == item.slug && "text-primary "
					}`}
					onClick={() => navigate(item.slug)}
				>
					
					{item.icon}{" "}
					
					<span className="text-[.7rem] absolute top-5 font-aclonica">
						{item.name}
					</span>
					{currentPath.pathname == item.slug && (
						<motion.span
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							transition={{ type: "tween" }}
							layoutId="mobilemenu"
							className={`${mobileTopLine}`}
						/>
					)}
				</li>
			))}
		</div>
	);
};

export default MenuBar;
