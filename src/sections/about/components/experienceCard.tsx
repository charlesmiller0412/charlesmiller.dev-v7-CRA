export const ExperienceCard = () => {
    const date = new Date();
    let year: any = date.getFullYear();
    return (
        <div className="experienceCard w-full h-fit text-black bg-white text-center rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.05)] border-[.02rem] border-[rgba(65,65,65,.5)] flex flex-col justify-center py-[1.2rem] relative text-xl">
            {year - 2010} years
            <span className="font-light text-sm tracking-[.75rem] leading-lg uppercase text-offBlack">
                Experience
            </span>
        </div>
    );
};
