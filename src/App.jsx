import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import { useEffect } from "react";
import ProjectDetails from "./components/ProjectDetails.jsx";

function App() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("lastVisitedPage", pathname);
    }, [pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const lastVisitedPage = localStorage.getItem("lastVisitedPage");
        if (lastVisitedPage && pathname === "/") {
            navigate(lastVisitedPage);
        }
    }, [pathname, navigate]);

    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='projects'>
                    <Route index element={<Projects />} />
                    <Route path=':id/:slug' element={<ProjectDetails />} />
                </Route>
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
