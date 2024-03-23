import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link
			to={"/"}
			className="flex justify-center items-center gap-1 bg-gradient-to-r from-primary via-purple-500 to-red-500 text-transparent bg-clip-text "
		>
			<FaCode className=" text-2xl sm:text-2xl md:text-3xl  xl:text-4xl text-primary font-aclonica  " />
			Riday
		</Link>
	);
};

export default Logo;
