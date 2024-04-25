import React from "react";
import Home from "../components/Home/Home";
import Home2 from "../components/Home/Home2";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/ContactMe/ContactMe";

export default function HomePage() {
    return (
        <div>
            <Home />
            <Home2 />
            <Projects />
            <About />
            <ContactForm />
        </div>
    );
}
