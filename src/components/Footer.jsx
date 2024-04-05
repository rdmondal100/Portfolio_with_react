import Socials from "./Socials"

const Footer = () => { 
  return (
    <footer className=" bg-footer-background py-12 lg:pb-2  border-solid  rounded-md">
      <div className=" mx-auto my-3">
        <div className="">
          <Socials containerStyles='flex gap-x-6  justify-center' iconStyles='text-footer-foreground  text-[25px] md:text-[27px] xl:text-[29px] mb-4 ' />
          <div className=" text-muted-foreground text-center">
            Copyright &copy; Riday Mondal. All rights reserved.
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer