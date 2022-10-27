import { Button } from "../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "./components/social";
import { Headings } from "../../components/headings";
import { ProjectCarousel } from "./components/projectCarousel";
import IMAGES from "../../assets/Images";
import useThemeStore from "../../appStore";
export const Hero = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <section
            className="hero w-screen max-w-[120rem] m-auto h-screen pt-[10vh] px-10 tablet:pt-[8vh] tablet:px-[10rem] flex flex-col tablet:flex-row items-center"
            id="hero"
        >
            <div className="hero__left w-full flex justify-between h-full flex-col">
                <div className="tablet:justify-center items-start tablet:items-start flex flex-col h-2/3 tablet:h-full">
                    <Headings
                        h5className="headings__left--h5 text-sm"
                        h2className="headings--h2 text-xl tablet:text-xl"
                        h5="my name is"
                        h2={
                            <>
                                Charles
                                <span className="text-blue text-xl tablet:text-xl font-bold leading-[6.6rem] ml-3">
                                    Miller
                                </span>
                            </>
                        }
                    />
                    <h3 className="text-md text-center w-fit m-auto tablet:w-full tablet:text-lg font-bold my-[1rem] tablet:my-[3.5rem] tablet:text-left z-10 text-black dark:text-offWhite">
                        I&apos;m a Front End Developer <br />&<br /> UX/UI
                        Designer
                    </h3>
                    <SocialLinks className="socialLinks text-icons w-[17rem] flex justify-between m-auto tablet:m-0" />
                    <div className="hero__buttons flex justify-evenly tablet:justify-between w-full m-auto tablet:m-0 tablet:w-full tablet:max-w-[28rem] my-[1rem] tablet:mt-[4.5rem] z-10 desktop:max-w-[35rem]">
                        <a href="#projects">
                            <Button
                                className="btn btn__light--blue w-[12rem] whitespace-nowrap dark:border dark:border-offWhite border border-black"
                                text="See my work"
                                icon={faAnglesRight}
                            />
                        </a>{" "}
                        <a href="#contact">
                            <Button
                                className="btn btn__light--black hover:bg-black w-[12rem] whitespace-nowrap"
                                text="Hire Me"
                                icon={faAnglesRight}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero__image w-1/2 tablet:w-full tablet:h-fit relative min-w-[33.7rem]">
                <img
                    src={
                        theme === "light"
                            ? IMAGES.hero.photoDark
                            : IMAGES.hero.photoLight
                    }
                    className="w-2/3 tablet:w-full m-auto h-full"
                    alt="Charles Miller"
                />
                <ProjectCarousel projects={props.projects} />
            </div>
        </section>
    );
};
