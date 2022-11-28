import IMAGES from "../../../../assets/Images";
import useThemeStore from "../../../../appStore";

export const MobileLogo = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <div className={props.className}>
            <a href="/">
                <img
                    src={
                        theme === "dark"
                            ? IMAGES.logos.logoDark
                            : IMAGES.logos.logoLight
                    }
                    alt="logo"
                />
            </a>
        </div>
    );
};
