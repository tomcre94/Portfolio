import React from "react";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export default function HomePage() {
    return (
        <div>
            <Home />
            <About />
            <Projects />
        </div>
    );
}
