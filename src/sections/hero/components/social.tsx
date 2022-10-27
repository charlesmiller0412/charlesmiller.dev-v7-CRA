import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
    faGithub,
    faLinkedin,
    faDiscord,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const SocialLinks = (props: any) => {
    return (
        <div className={props.className}>
            <a
                href="https://www.github.com/charlesmiller0412"
                target="__blank"
                onClick={props.onClick}
                className="text-icons hover:text-blue dark:hover:text-lightBlue text-offBlack dark:text-white transition-all"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://www.linkedin.com/in/charlesmiller0412"
                target="__blank"
                onClick={props.onClick}
                className="text-icons hover:text-blue dark:hover:text-lightBlue text-offBlack dark:text-white transition-all"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://discordapp.com/users/2807/"
                target="__blank"
                onClick={props.onClick}
                className="text-icons hover:text-blue dark:hover:text-lightBlue text-offBlack dark:text-white transition-all"
            >
                <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a
                href="https://twitter.com/millersWebDev"
                target="__blank"
                onClick={props.onClick}
                className="text-icons hover:text-blue dark:hover:text-lightBlue text-offBlack dark:text-white transition-all"
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
                href="mailto:charles@charlesmiller.dev"
                target="__blank"
                onClick={props.onClick}
                className="text-icons hover:text-blue dark:hover:text-lightBlue text-offBlack dark:text-white transition-all"
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </a>
        </div>
    );
};
