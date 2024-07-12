/* eslint-disable react/no-unescaped-entities */
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { GrSend } from "react-icons/gr";


const Cta = () => {
  return (
    <section className=" py-16 bg-accent rounded-t-xl">
      <div className="mx-auto pb-12 px-3">
        <div className="flex flex-col items-center">
          <h2 className=" font-heading_font text-foreground text-[1.7rem] md:text-3xl xl:text-4xl mb-8 text-center  max-w-xl  text-green-600 animate-bounce">Looking for a developer to turn your ideas into reality? I'm here to help</h2>
            <Link to={'/contact'}>
            <Button className=' text-lg'>Contact me<GrSend className=" ml-2 text-lg"/></Button>
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta