import { Button } from "../../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const ProjectCard = (props: any) => {
    return (
        <div className="card tablet:h-[26rem] tablet:w-[37rem] bg-offWhite rounded-[.4rem] flex flex-col overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,.25)] dark:shadow-[0_4px_4px_0_rgba(255,255,255,.25)] relative">
            <div className="card__image w-full h-5/6 relative">
                <img
                    src={props.project.imgurl}
                    alt={props.project.title}
                    className="card__image"
                />
            </div>
            <div className="card__links w-full flex justify-evenly self-end z-20 bg-offWhite h-[1/6]">
                <a href={props.project.siteurl} target="__blank">
                    <Button
                        className="cardBtn cardBtn__light"
                        text="View site"
                        icon={faAnglesRight}
                    />
                </a>
                <a href={props.project.codeurl} target="__blank">
                    <Button
                        className="cardBtn cardBtn__dark"
                        text="View code"
                        icon={faAnglesRight}
                    />
                </a>
            </div>
            <div className="card__overlay absolute top-0 left-0 w-full h-full min-h-fit bg-gradient-to-r from-cardBG to-cardBG z-10 flex justify-start flex-col px-5 opacity-0 active:opacity-100 hover:opacity-100 hover:cursor-crosshair transition-all tablet:portrait:justify-evenly">
                <h4 className="text-base text-blue font-semiBold leading-base">
                    {props.project.title}
                </h4>
                <p className="font-medium text-xs leading-0 text-white tracking-wide h-1/4 overflow-auto my-[5vh]">
                    {props.project.description}
                </p>
                <ul className="px-3 grid grid-cols-3 gap-3 text-center uppercase">
                    {props.project.languages.map((language: any) => (
                        <li
                            key={language}
                            className="bg-blue rounded-xl py-1 text-offBlack"
                        >
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
