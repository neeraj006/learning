import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import JobDetails from "@/views/jobDetails";
import NotFound from "@/views/not-found";
import Home from "@/views/home";
import NavBar from "@/components/NavBar";
import Contact from "@/views/contact";

/**
 * The only Inertia page in this app.
 *
 * Laravel serves this same component for every URL (see routes/web.php), so
 * React Router — not Laravel — decides what renders. Adding a screen means
 * adding a <Route> below; the backend never needs to know about it.
 */
export default function Shell() {
    return (
        <BrowserRouter>
            <ChakraProvider value={defaultSystem}>
                <NavBar
                    links={[
                        { href: "/", label: "Home" },
                        { href: "/about", label: "About" },
                        { href: "/contact", label: "Contact" },
                    ]}
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs/:jobId" element={<JobDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    );
}
