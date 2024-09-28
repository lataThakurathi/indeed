/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "hsl(216deg, 76%, 95%)",
                    300: "hsl(216deg, 76%, 41%)",
                    400: "hsl(216deg, 76%, 31%)",
                    DEFAULT: "hsl(216deg, 76%, 21%)",
                },
            },
            height: {
                navHeight: "73px",
            },
        },
    },
    plugins: [],
};
