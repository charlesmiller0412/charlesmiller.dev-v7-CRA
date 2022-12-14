import { Button } from "../../components/button";
import { Headings } from "../../components/headings";
import { ProjectCard } from "./components/projectCard";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Images from "../../assets/Images";
import Lottie from "react-lottie";

export const Projects = (props: any) => {
    let content;

    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.logos.loading,
    };
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.logos.error,
    };

    if (props.loading) {
        content = (
            <div className="flex w-full justify-center">
                <Lottie options={logoOptions} height={60} width={200} />
            </div>
        );
    } else if (props.error) {
        content = <Lottie options={errorOptions} />;
    } else {
        content = (
            <div className="projects__container grid grid-cols-1 landscape:grid-cols-2 tablet:grid-cols-2 desktop:landscape:grid-cols-3 gap-y-14 gap-5 desktop:gap-x-28 place-items-center max-w-[120rem] m-auto">
                {props.projects.map((project: any) => (
                    <ProjectCard key={project._id} project={project} />
                ))}

                <a
                    href="https://charlesmiller.dev/projectDatabase"
                    target="__blank"
                >
                    <Button
                        className="flex btn btn__light--blue bg-blue dark:border-offWhite hover:bg-offWhite border-offBlack border-2 dark:hover:bg-offBlack tablet:whitespace-nowrap w-fit px-20 h-fit items-center"
                        text="View all projects in my database"
                        icon={faAnglesRight}
                    />
                </a>
            </div>
        );
    }
    return (
        <section className="projects" id="projects">
            <div className="projects__heading flex justify-between items-center tablet:mb-[5rem]">
                <Headings
                    h5className="headings__left--h5 text-sm"
                    h2className="headings--h2 text-lg tablet:text-xl text-black dark:text-white"
                    h5="My work"
                    h2="Featured Projects"
                />
            </div>
            {content}
        </section>
    );
};
