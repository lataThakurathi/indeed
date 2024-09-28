import Container from "./Container";
import SearchArea from "./SearchArea";

const HeroSection = () => {
    return (
        <div className="h-44 md:h-60 rounded-br-[5rem] bg-primary relative">
            <Container className="flex flex-col h-full items-start md:justify-center pt-10 md:pt-0 max-w-4xl">
                <p className="text-white font-bold text-xl md:text-3xl mb-2">
                    Discover your earning potential
                </p>
                <p className="text-white text-sm md:text-base">
                    Explore high-paying careers, salaries, and job openings by
                    industry and location.
                </p>
            </Container>
            <SearchArea />
        </div>
    );
};

export default HeroSection;
