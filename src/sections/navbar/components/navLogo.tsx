import IMAGES from "../../../assets/Images";
import useThemeStore from "../../../appStore";

export const NavLogo = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <div className={props.className}>
            <a href="/">
                <img
                    src={
                        theme === "dark"
                            ? IMAGES.logos.logoLight
                            : IMAGES.logos.logoDark
                    }
                    alt="logo"
                />
            </a>
        </div>
    );
};
