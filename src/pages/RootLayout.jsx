import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MobileMenueBar } from "@/components/MenuBar";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";


function RootLayout() {
    return (
        <>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <Header />
                <Toaster />
                <Outlet />
                <Footer />
                <div className='fixed bottom-0'>
                    <MobileMenueBar mobileTopLine=' fixed rounded-lg bottom-full h-[2px] bg-primary w-16' />
                </div>
            </ThemeProvider>
        </>
    );
}

export default RootLayout;
