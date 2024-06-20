import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MobileMenueBar } from "@/components/MenuBar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";


function RootLayout() {
    return (
        <>
                <Header />
                <Toaster />
                <Outlet />
                <Footer />
                <div className='fixed bottom-0'>
                    <MobileMenueBar mobileTopLine=' fixed rounded-lg bottom-full h-[2px] bg-primary w-16' />
                </div>
        </>
    );
}

export default RootLayout;
