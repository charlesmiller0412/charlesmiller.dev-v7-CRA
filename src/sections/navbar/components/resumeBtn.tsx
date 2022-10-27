export const ResumeBtn = () => {
    return (
        <button
            onClick={() => {
                window.location.href =
                    "https://charlesmiller.dev/" +
                    process.env.REACT_APP_CURRENT_RESUME;
            }}
            className="navbar__right--resume border-2 flex items-center justify-center text-xs h-fit m-auto font-medium text-black dark:text-white transition-all order-0 self-stretch shadow-[-4px_4px_0_0_#12252b] dark:shadow-[-4px_4px_0_0_#efefef] py-[1rem] px-[1.8rem] hover:bg-blue"
        >
            R&egrave;sum&egrave;
        </button>
    );
};
