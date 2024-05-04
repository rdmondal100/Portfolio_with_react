import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "@/components/theme-provider";
import { MobileMenueBar } from "./components/MenuBar";
import { Toaster } from "@/components/ui/toaster";

function App() {
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

export default App;
