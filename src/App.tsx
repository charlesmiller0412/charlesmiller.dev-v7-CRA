import React, { useState, useEffect } from "react";
import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { Hero } from "./sections/hero/hero";
import { MobileNav } from "./sections/navbar/mobileNav/mobileNav";
import { Navbar } from "./sections/navbar/navbar";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import useThemeStore from "./appStore";
import { Octokit } from "octokit";

function App() {
    const theme = useThemeStore((state: any) => state.theme);
    const setTheme = useThemeStore((state: any) => state.setTheme);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [projects, setProjects] = useState([]);
    const [data, setData] = useState<any>([]);
    const [loadingData, setLoadingData] = useState(true);

    const getData = async () => {
        let list = [];

        const octokit = new Octokit({
            auth: process.env.REACT_APP_GHP_TOKEN,
        });
        let res: any = await octokit.request(
            "GET /users/{username}/events/public",
            {
                username: "charlesmiller0412",
            }
        );

        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].type === "PushEvent") {
                if (list.length < 5) {
                    list.push(res.data[i]);
                }
            }
        }
        setData(list);
        setLoadingData(false);
    };

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://millerportfolioprojects.herokuapp.com/api/projects"
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            return;
        } catch (err: any) {
            setError(true);
            console.error(err.message);
        }
    };

    function handleTheme() {
        theme === "dark"
            ? document.getElementById("main")?.classList.add("dark")
            : document.getElementById("main")?.classList.remove("dark");
    }
    useEffect(() => {
        fetchProjects();
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return (
        <>
            <main
                className="overflow-x-hidden dark bg-white dark:bg-black"
                id="main"
            >
                <Navbar theme={theme} setTheme={setTheme} />
                <MobileNav />
                <Hero theme={theme} projects={projects} />
                <Projects projects={projects} error={error} loading={loading} />
                <Skills />
                <About data={data} loadingData={loadingData} />
                <Contact />
            </main>
            <footer className="bg-white dark:bg-black h-[2rem] text-black dark:text-white text-xs flex justify-center items-center">
                {new Date().getFullYear()} Copyright &copy; Charles Miller. All
                rights reserved.
            </footer>
        </>
    );
}

export default App;
