import Testimonial from "../Testimonial";
import Title from "../Title";
import MyResume from "./MyResume";
import Skills from "./Skills";
import { quoteData } from "../../data";

export default function Resume() {
    return (
        <section className="h-full overflow-y-scroll myScroll">
            <Title name="رزومه" />
            <MyResume />

            <Title name="مهارت ها" />
            <Skills />

            <Title name="نقل قول" />
            <Testimonial testimonial={quoteData} />
        </section>
    );
}
