module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            base: "1.6rem",
            md: "2.2rem",
            lg: "2.6rem",
            xl: "4.4rem",
            icons: "3rem",
        },
        lineHeight: {
            auto: "auto",
            xs: "1rem",
            sm: "1.4rem",
            base: "1.6rem",
            md: "2.2rem",
            lg: "2.4rem",
            xl: "4.4rem",
        },
        colors: {
            black: "#12252b",
            offBlack: "#384b52",
            blue: "#7eaecd",
            lightBlue: "#a1dcf0",
            offWhite: "#efefef",
            white: "#f9f9f9",
            cardBG: "rgba(18, 37, 43, 0.9)",
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        },
        extend: {
            screens: {
                tablet: "57.6rem",
                desktop: "87.5rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
