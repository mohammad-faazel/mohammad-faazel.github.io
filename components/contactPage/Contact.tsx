import Title from "../Title";
import ContactForm from "./ContactForm";
import Location from "./Location";

export default function Contact() {
    return (
        <section className="h-full overflow-y-scroll myScroll">
            <Title name="در تماس باشید" />
            <Location />

            <Title name="فرم تماس" />
            <ContactForm />
        </section>
    );
}
