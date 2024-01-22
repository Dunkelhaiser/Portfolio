import ContactForm from "@components/ContactForm";
import Section from "./Section";

const Contact = () => {
    return (
        <Section id="contact" heading="Contact" threshold={0.9}>
            <p className="mb-2 text-center text-sm">
                Contact me at{" "}
                <a href="mailto:tymchyshynkyrylo@gmail.com" className="underline underline-offset-4">
                tymchyshynkyrylo@gmail.com
                </a>{" "}
                or using this form.
            </p>
            <ContactForm />
        </Section>
    );
};

export default Contact;
