import { Button } from "../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "./components/social";
import { Headings } from "../../components/headings";
import { ProjectCarousel } from "./components/projectCarousel";
import { HeroImg } from "./components/heroImg";
export const Hero = (props: any) => {
    return (
        // w-full pt-[11rem] landscape:justify-center landscape:pt-0 max-w-[120rem] m-auto h-screen pb-52 px-10 landscape:tablet:pt-[8vh] tablet:px-[10rem] flex flex-col tablet:flex-row items-center justify-evenly landscape:flex-row landscape:h-full tablet:landscape:h-screen gap-10 tablet:gap-0
        <section
            className="hero w-full max-w-[120rem] m-auto h-screen gap-12 pb-40 pt-[7.5rem] px-10 tablet:pt-[8vh] tablet:px-[10rem] flex flex-col tablet:flex-row items-center justify-center portrait:justify-evenly landscape:flex-row landscape:justify-center landscape:items-center landscape:h-full landscape:tablet:h-screen"
            id="hero"
        >
            <div className="hero__left w-screen flex justify-between h-fit flex-col landscape:w-1/2 landscape:h-1/2">
                <div className="flex justify-between items-center landscape:items-start tablet:items-start flex-col h-1/2 w-screen px-10 landscape:w-full landscape:h-full landscape:justify-evenly">
                    <Headings
                        h5className="headings__left--h5 portrait:hidden tablet:portrait:flex landscape:flex text-xs tablet:landscape:text-sm landscape:text-xs"
                        h2className="headings--h2 mb-0 text-md tablet:landscape:text-xl landscape:text-lg tablet:landscape:leading-[6.6rem] landscape:leading-[3rem] landscape:-[3rem]"
                        h5="my name is"
                        h2={
                            <>
                                Charles
                                <span className="text-blue text-md landscape:text-lg tablet:landscape:text-xl font-bold tablet:landscape:leading-[6rem] landscape:leading-[3rem] leading-[3rem] ml-3">
                                    Miller
                                </span>
                            </>
                        }
                    />
                    <h3 className="landscape:text-sm text-sm landscape:m-0 landscape:text-left text-center w-fit m-auto tablet:w-full tablet:landscape:text-md font-bold my-[.2rem] tablet:my-[3.5rem] tablet:text-left z-10 text-black dark:text-offWhite">
                        I&apos;m a Front End Developer{" "}
                        <span className="-my-2 block text-sm tablet:text-md">
                            &
                        </span>{" "}
                        UX/UI Designer
                    </h3>
                    <SocialLinks className="socialLinks text-icons portrait:w-2/5 w-2/3 flex justify-between tablet:m-0 landscape:my-2 m-auto landscape:m-0" />
                    <div className="hero__buttons flex justify-evenly landscape:justify-between gap-5 landscape:m-0 tablet:justify-between w-1/2 m-auto tablet:m-0 tablet:w-full tablet:max-w-[30rem] z-10">
                        <a href="#projects">
                            <Button
                                className="btn btn__light--blue w-[12rem] tablet:landscape:w-[12rem] landscape:w-[10rem] whitespace-nowrap dark:border dark:border-offWhite border border-black"
                                text="See my work"
                                icon={faAnglesRight}
                            />
                        </a>{" "}
                        <a href="#contact">
                            <Button
                                className="btn btn__light--black w-[12rem] hover:bg-black tablet:landscape:w-[12rem] landscape:w-[10rem] whitespace-nowrap"
                                text="Hire Me"
                                icon={faAnglesRight}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero__image min-w-[40rem] max-w-[50vw] h-fit w-full relative grid place-items-center gap-3 landscape:w-1/2 landscape:h-fit">
                <HeroImg />
                <ProjectCarousel projects={props.projects} />
            </div>
        </section>
    );
};
