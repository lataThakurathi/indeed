import Container from "./Container";
import SearchArea from "./SearchArea";

const HeroSection = () => {
    return (
        <div className="h-60 rounded-br-[5rem] bg-primary relative">
            <Container className="flex flex-col h-full items-start justify-center max-w-4xl">
                <p className="text-white font-bold text-3xl mb-2">
                    Discover your earning potential
                </p>
                <p className="text-white">
                    Explore high-paying careers, salaries, and job openings by
                    industry and location.
                </p>
            </Container>
            <SearchArea />
        </div>
    );
};

export default HeroSection;
