import React from "react";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/ResumeNew"

export default function HomePage() {
    return (
        <div>
            <Home />
            <About />
            <Projects />
            <Resume />
        </div>
    );
}
