import {
    FaSquareXTwitter,
    FaLinkedin,
    FaGithub,
    FaFacebook,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Socials = ({ containerStyles, iconStyles }) => {
    const socialData = [
        {
            path: "https://github.com/rdmondal100",
            icon: <FaGithub />,
            name: "Github",
            style: "hover:text-black",
        },
        {
            path: "https://twitter.com/rdmondal100",
            icon: <FaSquareXTwitter />,
            name: "Twitter",
            style: "hover:text-black ",
        },
        {
            path: "https://www.linkedin.com/in/ridaymondal100/",
            icon: <FaLinkedin />,
            name: "Linkedin",
            style: "hover:text-cyan-700",
        },
        {
            path: "https://www.facebook.com/rd.mondal.35/",
            icon: <FaFacebook />,
            name: "Facebook",
            style: "hover:text-blue-600",
        },
    ];
    return (
        <div className={`${containerStyles} `}>
            {socialData.map((social, index) => {
                return (
                    <Link key={index} to={social.path} className=' hover:scale-110 transition-all duration-300 ease-in-out'>
                        <div className={`${iconStyles} ${social.style} `}>
                            {social.icon}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
