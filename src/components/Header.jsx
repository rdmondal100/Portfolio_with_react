import MenuBar from "./MenuBar";
import { ModeToggle } from "./mode-toggle";
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scrollYProg = window.addEventListener("scroll", () => {
            window.scrollY > 30 ? setHeader(true) : setHeader(false);
        });
        return () => window.removeEventListener("scroll", scrollYProg);
    }, []);
    console.log(header);
    const socialIcons = [
        {
            name: "twiteer",
            icons: <FaSquareXTwitter />,
            link: "https://twitter.com/rdmondal100",
        },
        {
            name: "linkdin",
            icons: <FaLinkedin />,
            link: "https://www.linkedin.com/in/ridaymondal100/",
        },
        {
            name: "github",
            icons: <FaGithub />,
            link: "https://github.com/rdmondal100",
        },
    ];

    return (
        <header
            className={`${
                header
                    ? "py-1    backdrop-blur-sm shadow-lg "
                    : " bg-transparent "
            } lg:pt-2 sticky top-0 z-50 transition-all px-8`}
        >
            <div className='h-12 flex px-2 mx-auto'>
                <div className='flex justify-between items-center w-full'>
                    {/* Logo */}
                    <div className=' text-xl  md:text-2xl xl:text-3xl text-foreground font-aclonica'>
                        {" "}
                        <Logo />
                    </div>
                    <div>
                        <MenuBar
                            containerStyles='hidden lg:flex gap-x-8 items-center'
                            underLineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                    </div>
                    <div className='flex gap-3  '>
                        {socialIcons.map((item) => (
                            <Link key={item.name} to={item.link}>
                                <Button
                                    size='icon'
                                    variant='outline'
                                    className={`${
                                        item.name == "themeToggle"
                                            ? "relative bottom-1"
                                            : ""
                                    } text-secondary-foreground w-9 h-9 xl:w-10 xl:h-10  text-xl md:text-2xl xl:text-3xl cursor-pointer `}
                                >
                                    {item.icons}
                                </Button>
                            </Link>
                        ))}
                        <ModeToggle className='xl:w-12 xl:h-12' />
                    </div>
                </div>
                {/* mobile menu  */}
            </div>
        </header>
    );
};

export default Header;
