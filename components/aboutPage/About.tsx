import AboutMe from "./AboutMe";
import BrandLogos from "./BrandLogos";
import Facts from "./Facts";
import MyServices from "./MyServices";
import Prices from "./Prices";
import Testimonials from "./Testimonials";
import Title from "../Title";

export default function About() {
    return (
        <section className="h-full overflow-y-scroll myScroll">
            <Title name="درباره من" />
            <AboutMe />

            <Title name="خدمات من" />
            <MyServices />

            <Title name="قیمت گذاری" />
            <Prices />

            <Title name="مشتری ها" />
            <BrandLogos />

            <Title name="توصیفات" />
            <Testimonials />

            <Title name="سرگرمی ها" />
            <Facts />
        </section>
    );
}
