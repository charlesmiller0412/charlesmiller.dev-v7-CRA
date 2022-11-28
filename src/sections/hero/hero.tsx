import { Button } from "../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectCarousel } from "./components/projectCarousel";

export const Hero = (props: any) => {
    return (
        // w-full pt-[11rem] landscape:justify-center landscape:pt-0 max-w-[120rem] m-auto h-screen pb-52 px-10 landscape:tablet:pt-[8vh] tablet:px-[10rem] flex flex-col tablet:flex-row items-center justify-evenly landscape:flex-row landscape:h-full tablet:landscape:h-screen gap-10 tablet:gap-0
        <section
            className="hero w-full m-auto h-screen grid place-items-center before:bg-hero-image-light dark:before:bg-hero-image-dark before:bg-no-repeat before:bg-cover before:w-full before:overflow-hidden before:h-screen before:absolute before:-z-10 relative z-10"
            // className="hero h-screen  flex flex-col landscape:flex-row items-center gap-10 pt-[7.5rem]"
            id="hero"
        >
            <div className="hero__main font-medium text-md tablet:text-lg uppercase text-center text--offBlack dark:text-offWhite tracking-widest">
                <div className="text-lightBlue">hello, world!</div>
                <div className="text-lg tablet:text-xl font-semiBold">
                    I'm{" "}
                    <h1 className="inline tracking-wider">Charles Miller</h1>
                </div>
                <div className="font-light">
                    Front-end developer | UX/UI Designer
                </div>
                <div className="hero__buttons grid grid-cols-2 gap-36 mt-20 ">
                    <a href="#projects">
                        <Button
                            className="btn btn__light--blue w-[12rem] tablet:landscape:w-[12rem] landscape:w-[10rem] whitespace-nowrap dark:border dark:border-offWhite border border-black"
                            text="See my work"
                            icon={faAnglesRight}
                        />
                    </a>
                    <a href="#contact">
                        <Button
                            className="btn btn__light--blue w-[12rem] hover:bg-blue tablet:landscape:w-[12rem] landscape:w-[10rem] whitespace-nowrap dark:border dark:border-offWhite border border-black"
                            text="Contact Me"
                            icon={faAnglesRight}
                        />
                    </a>
                </div>
            </div>
            <div className="hero__bottom absolute bottom-48 tablet::bottom-20 left-1/2 -translate-x-1/2">
                <ProjectCarousel projects={props.projects} />
            </div>
        </section>
    );
};
