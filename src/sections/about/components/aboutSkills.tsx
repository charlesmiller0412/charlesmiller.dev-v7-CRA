import images from "../../../assets/Images";

export const AboutSkills = () => {
    return (
        <div className="aboutSkills grid mt-10 tablet:mt-0 gap-3 w-11/12 mx-auto">
            <h4>experienced in</h4>
            <div className="experience flex justify-center gap-5 flex-wrap tablet:inline-grid tablet:grid-cols-11 tablet:w-full tablet:gap-3">
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="HTML"
                >
                    <img src={images.icons.html} alt="HTML" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="CSS"
                >
                    <img src={images.icons.css} alt="CSS" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="JavaScript"
                >
                    <img src={images.icons.javascript} alt="JavaScript" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="TypeScript"
                >
                    <img src={images.icons.typescript} alt="TypeScript" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="MongoDB"
                >
                    <img src={images.icons.mongoDB} alt="MongoDB" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="React.JS"
                >
                    <img src={images.icons.reactIcon} alt="React.JS" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Next.JS"
                >
                    <img src={images.icons.next} alt="Next.JS" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Express.JS"
                >
                    <img src={images.icons.expressJS} alt="Express.JS" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Node.JS"
                >
                    <img src={images.icons.nodeJS} alt="Node.JS" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="jQuery"
                >
                    <img src={images.icons.jquery} alt="jQuery" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Sass"
                >
                    <img src={images.icons.sass} alt="Sass" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Bootstrap"
                >
                    <img src={images.icons.bootstrap} alt="Bootstrap" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="TailwindCSS"
                >
                    <img src={images.icons.tailwind} alt="TailwindCSS" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Git"
                >
                    <img src={images.icons.git} alt="Git" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="PHP"
                >
                    <img src={images.icons.php} alt="PHP" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Python"
                >
                    <img src={images.icons.python} alt="Python" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Java"
                >
                    <img src={images.icons.java} alt="Java" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="JSON"
                >
                    <img src={images.icons.jsonIcon} alt="JSON" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Bash"
                >
                    <img src={images.icons.bash} alt="Bash" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Markdown"
                >
                    <img src={images.icons.markdown} alt="Markdown" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Rest API"
                >
                    <img src={images.icons.restAPI} alt="Rest API" />
                </span>
            </div>

            <h4 className="mt-5">tools i use</h4>
            <div className="tools flex justify-center gap-5 flex-wrap tablet:inline-grid tablet:grid-cols-11 tablet:w-full tablet:gap-3">
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="VS Code"
                >
                    <img src={images.icons.vsCode} alt="Visual Studio Code" />
                </span>
                <span
                    className="tooltip tooltip__tall w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Node Package Manager (NPM)"
                >
                    <img
                        src={images.icons.npmIcon}
                        alt="Node Package Manager (NPM)"
                    />
                </span>
                <span
                    className="tooltip tooltip__tall w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Block Element Modifier"
                >
                    <img src={images.icons.bem} alt="BEM" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Github"
                >
                    <img src={images.icons.github} alt="Github" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Wordpress"
                >
                    <img src={images.icons.wordpress} alt="Wordpress" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Amazon Web Services"
                >
                    <img src={images.icons.aws} alt="Amazon Web Services" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Google"
                >
                    <img src={images.icons.google} alt="Google" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Vercel"
                >
                    <img src={images.icons.vercel} alt="Vercel" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Figma"
                >
                    <img src={images.icons.figma} alt="Figma" />
                </span>

                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Photoshop"
                >
                    <img src={images.icons.photoshop} alt="Photoshop" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Illustrator"
                >
                    <img src={images.icons.illustrator} alt="Illustrator" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="XD"
                >
                    <img src={images.icons.xd} alt="XD" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="After Effects"
                >
                    <img src={images.icons.afterEffects} alt="After Effects" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Premier Pro"
                >
                    <img src={images.icons.premier} alt="Premier Pro" />
                </span>
                <span
                    className="tooltip w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                    data-tooltip="Stack Overflow &#128512.5;"
                >
                    <img
                        src={images.icons.stackOverflow}
                        alt="Stack Overflow"
                    />
                </span>
            </div>
        </div>
    );
};
