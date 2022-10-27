export const NavLinks = () => {
    return (
        <div className="navbar__links flex justify-between items-center w-1/2 max-w-[62.5rem] desktop:text-base font-bold text-base">
            <a
                href="#hero"
                className="relative cursor-pointer after:content-[''] after:w-full after:h-[.3rem] after:absolute after:bottom-0 after:left-0 hover:after:bg-blue text-black dark:text-white"
            >
                Home
            </a>
            <a
                href="#projects"
                className="relative cursor-pointer after:content-[''] after:w-full after:h-[.3rem] after:absolute after:bottom-0 after:left-0 hover:after:bg-blue text-black dark:text-white"
            >
                My Work
            </a>
            <a
                href="#skills"
                className="relative cursor-pointer after:content-[''] after:w-full after:h-[.3rem] after:absolute after:bottom-0 after:left-0 hover:after:bg-blue text-black dark:text-white"
            >
                My Specialties
            </a>
            <a
                href="#about"
                className="relative cursor-pointer after:content-[''] after:w-full after:h-[.3rem] after:absolute after:bottom-0 after:left-0 hover:after:bg-blue text-black dark:text-white"
            >
                About Me
            </a>
            <a
                href="#contact"
                className="relative cursor-pointer after:content-[''] after:w-full after:h-[.3rem] after:absolute after:bottom-0 after:left-0 hover:after:bg-blue text-black dark:text-white"
            >
                Contact Me
            </a>
        </div>
    );
};
