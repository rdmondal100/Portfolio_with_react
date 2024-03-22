// eslint-disable-next-line react/prop-types
import { HiHome } from "react-icons/hi";
import { FaBloggerB } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
	{
		name: "Home",
		icon: <HiHome />,
		slug: "/home",
	},
	{
		name: "Projects",
		icon: <FaCode />,
		slug: "/projects",
	},
	{
		name: "Blogs",
		icon: <FaBloggerB />,
		slug: "/blogs",
	},
	{
		name: "Contact",
		icon: <MdMarkEmailRead />,
		slug: "/contact",
	},
];

const MenuBar = ({ containerStyles }) => {
	const navigate = useNavigate();
	const currentPath = useLocation();
	return (
		<div className={`${containerStyles} list-none text-foreground text-xl`}>
			{navItems.map((item) => (
				<li
					key={item.name}
					className={`cursor-pointer transition-all hover:text-muted-foreground  ${
						currentPath.pathname == item.slug ? "text-primary border-b-2 border-primary scale-110 -translate-y-[.2rem] " : null
					} `}
					onClick={() => navigate(item.slug)}
				>
					{item.name}
				</li>
			))}
		</div>
	);
};

export const MobileMenueBar = () => {
	const navigate = useNavigate();
	const currentPath = useLocation();
	console.log(currentPath);

	return (
		<div className="list-none fixed bottom-0 flex justify-between items-center w-full px-3 h-12 md:h-14 bg-foreground/20 backdrop-blur-xl md:hidden  text-muted-foreground pb-4 border-t-[.01rem] border-t-foreground/10">
			{navItems.map((item) => (
				<li
					key={item.slug}
					className={`cursor-pointer text-xl flex flex-col justify-center items-center sm:text-2xl  ${
						currentPath.pathname == item.slug ? "text-primary " : null
					}`}
					onClick={() => navigate(item.slug)}
				>
					{item.icon}{" "}
					<span
						className={` absolute transition-all	 ${
							currentPath.pathname == item.slug
								? "w-14 h-[.2rem] top-0 bg-primary rounded-sm "
								: null
						}`}
					></span>
					<span className="text-[.7rem] absolute top-5">{item.name}</span>
				</li>
			))}
		</div>
	);
};

export default MenuBar;
