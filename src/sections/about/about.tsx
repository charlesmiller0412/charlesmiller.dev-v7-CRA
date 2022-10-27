import { Headings } from "../../components/headings";
import { GitCommits } from "./components/gitCommits";
import { GithubLanguages } from "./components/githubLanguages";
import { ExperienceCard } from "./components/experienceCard";
import { AboutText } from "./components/aboutText";
import { AboutSkills } from "./components/aboutSkills";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = () => {
    return (
        <section className="about w-full h-auto tablet:h-screen " id="about">
            <Headings
                h5className="headings__left--h5 text-sm "
                h2className="headings--h2 text-lg tablet:text-xl"
                h5="My Life"
                h2="About Me"
            />
            <div className="about__container w-full h-3/5 flex justify-between flex-col tablet:flex-row tablet:mt-[5rem] max-w-[120rem] m-auto mt-5">
                <div className="about__left w-full tablet:w-1/2 flex flex-col h-full justify-between items:start">
                    <AboutText />
                    <AboutSkills />
                </div>
                <AnimationOnScroll
                    animateIn="animate__slideInRight"
                    animateOnce
                >
                    <div className="about__right w-fit m-auto pt-5 tablet:mt-0 h-full tablet:w-fit tablet:h-full flex flex-col justify-between">
                        <ExperienceCard />
                        <GitCommits />
                        <GithubLanguages />
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    );
};