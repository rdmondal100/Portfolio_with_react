import { FaLaptopCode } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { TbDeviceMobileCode } from "react-icons/tb";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const servicesData = [
    {
        icon: <HiPaintBrush />,
        title: "Web Design",
        descriptions:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt molestias deserunt, ducimus necessitatibus adipisci?",
    },
    {
        icon: <FaLaptopCode />,
        title: "Web Development",
        descriptions:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt molestias deserunt, ducimus necessitatibus adipisci?",
    },
    {
        icon: <TbDeviceMobileCode />,
        title: "App Development",
        descriptions: "Up Comming",
    },
];
const Services = () => {
    return (
        <section className=" mb-12 xl:mb-36">
            <div className=" container px-4 mx-auto ">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto text-primary/90  font-general_font ">
                    My Services
                </h2>
                {/* services name  */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                className="w-full max-w-[424px] h-[300px] flex-col pt-16 pb-10 justify-center items-center bg-background  relative border-primary/20 shadow-lg"
                            >
                                <CardHeader className=" text-primary absolute -top-12 w-full justify-center flex items-center ">
                                    <div
                                        className=" xl:text-5xl text-[2rem] w-20  h-16 rounded-sm
                    bg-background flex justify-center items-center"
                                    >
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className=" text-center pb-5 font-heading_font text-foreground/85 font-normal">
                                        <CardTitle>{item.title}</CardTitle>
                                    </div>
                                    <div className=" text-center text-muted-foreground xl:text-lg text-base">
                                        <CardDescription>
                                            {item.descriptions}
                                        </CardDescription>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
