import MobileMenue from "./MobileMenue";
import Nav from "./Nav";
import { ModeToggle } from "./mode-toggle";

const Header = () => {

	

	return (
		<header>
			<div className="container mx-auto ">
				<div className="flex justify-between items-center">
					{/* Logo */}
					logo
					<div>
						<Nav containerStyles='hidden xl:flex gap-x-8 items-center'/>
						<ModeToggle/>
					
					</div>
				</div>
					{/* mobile menu  */}            
						<MobileMenue/>
						
			</div>
		</header>
	);
};

export default Header;
