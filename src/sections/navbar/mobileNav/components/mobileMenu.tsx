import { SocialLinks } from "../../../hero/components/social";
import { NavLogo } from "../../components/navLogo";
import { ResumeBtn } from "../../components/resumeBtn";

export const MobileMenu = (props: any) => {
    return (
        <>
            <div
                className={
                    props.showMenu === true
                        ? "mobileMenu fixed top-0 right-0 w-full h-screen bg-white dark:bg-black z-40 flex items-center justify-center text-center transition-all duration-1000 text-black dark:text-white"
                        : "mobileMenu fixed top-0 -right-full w-full h-screen bg-white dark:bg-black z-40 flex items-center transition-all duration-1000"
                }
            >
                <ul className="">
                    <li className="py-5">
                        {
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                href="#"
                                className="text-lg font-bold"
                                onClick={props.handleClick}
                            >
                                Home
                            </a>
                        }
                    </li>
                    <li className="py-5">
                        <a
                            href="#projects"
                            className="text-lg font-bold"
                            onClick={props.handleClick}
                        >
                            My Work
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#skills"
                            className="text-lg font-bold"
                            onClick={props.handleClick}
                        >
                            My Specialties
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#about"
                            className="text-lg font-bold"
                            onClick={props.handleClick}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#contact"
                            className="text-lg font-bold"
                            onClick={props.handleClick}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
                <div className="mobileMenu__social w-3/4 absolute bottom-0 left-1/2 -translate-x-1/2">
                    <NavLogo className="navbar__logo w-[8.7rem] h-[2.5rem] relative m-auto mb-12" />
                    <ResumeBtn />
                    <SocialLinks
                        className="w-full flex justify-between py-12"
                        onClick={props.handleClick}
                    />
                </div>
            </div>
        </>
    );
};
