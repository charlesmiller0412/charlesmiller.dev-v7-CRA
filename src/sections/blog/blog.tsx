import { Button } from "../../components/button";
import { Headings } from "../../components/headings";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const Blog = (props: any) => {
    return (
        <section
            id="blog"
            className="blog bg-white w-full dark:bg-black transition-color duration-1000"
        >
            <Headings
                h5className="headings__right--h5 text-end text-sm"
                h2className="headings--h2 text-lg text-end tablet:text-xl"
                h5="My Discussions"
                h2="Blog"
            />
            <div className="blog__container grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-10 text-black dark:text-white">
                {props.articles.map((article: any) => (
                    <div
                        className="blog__card m-auto card transition-all relative w-[35rem] landscape:w-full tablet:w-[38rem] h-[26rem] bg-white cursor-default rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.2)] border-[.02rem] border-[rgba(65,65,65,.05)] dark:border-[rgba(150,150,150,0.6)] px-[3rem] pb-[2.6rem] pt-[4.5rem] flex flex-col justify-between text-black"
                        key={article.id}
                    >
                        <h3 className="text-sm">{article.title}</h3>
                        <p className="text-xs">
                            {article.readable_publish_date}
                        </p>
                        <p className="text-xs ml-2">
                            {article.description}
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-end gap-3 text-blue underline hover:overline"
                            >
                                Read More...
                            </a>
                        </p>
                        <ul className="text-xxs flex gap-3">
                            {article.tag_list.map((tag: any) => (
                                <li key={tag}>#{tag}</li>
                            ))}
                        </ul>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-1/2 items-end gap-3 text-blue underline hover:overline"
                        >
                            Read full article on
                            <img
                                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                                className="w-1/4"
                                alt="dev.to"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <a
                href="https://charlesmiller.tech"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    className="flex btn btn__light--blue tablet:whitespace-nowrap w-fit px-20 h-fit items-center my-10 mx-auto"
                    text="View my blog & social media site"
                    icon={faAnglesRight}
                />
            </a>
        </section>
    );
};
