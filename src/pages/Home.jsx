import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Work/>
			<Reviews/>
			<Cta/>
			
		</>
	);
};

export default Home;
