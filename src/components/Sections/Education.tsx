import Timeline from "@components/Timeline";
import Section from "./Section";

const education = [
    {
        title: "Secondary High School №63",
        duration: "September 2011 - June 2018",
        description: "It was my first school where I studied up to 7th class.",
        icon: "/icons/education/63.png",
    },
    {
        title: "Lviv Academic Gymnasium",
        duration: "September 2018 - June 2021",
        description: "It was my second school where I studied from 8th till 11th class.",
        icon: "/icons/education/lag.jpg",
    },
    {
        title: "Ivan Franko National University of Lviv",
        subTitle: "Faculty of Electronics and Computer Technologies",
        duration: "September 2021 - Present",
        description: "Currently I'm studying computer sciense at Lviv National University.",
        icon: "/icons/education/lnu.png",
    },
    {
        title: "Udemy",
        description: "Place where I study a lot of different topics.",
        icon: "/icons/education/udemy.svg",
        link: "/Certificates.zip",
    },
];

const Education = () => {
    return (
        <Section id="education" heading="Education" className="mt-8 sm:mt-20" threshold={0.65}>
            <Timeline elements={education} />
        </Section>
    );
};
export default Education;
