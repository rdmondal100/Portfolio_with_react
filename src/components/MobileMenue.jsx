import { MenuBarDetails } from "@/constants/menuBarDetails";
const MobileMenue = () => {
	return (
		<nav>
			<div className="flex xl:hidden fixed justify-between px-6 pb-3 h-20 items-center right-0 bottom-0 bg-glass w-full  backdrop-blur-md  backdrop-brightness-125">
        {MenuBarDetails.map((item)=>(<li key={item.slug}>{item.icon}</li>))}

			</div>
		</nav>
	);
};

export default MobileMenue;
