import Timeline from "@components/Timeline";
import Section from "./Section";

const education = [
    {
        title: "Secondary High School №63",
        duration: "September 2011 - June 2018",
        description: "It was my first school where I studied up to 7th class.",
        icon: "/icons/education/63.png",
        link: "https://www.school63.school.social/",
    },
    {
        title: "Lviv Academic Gymnasium",
        duration: "September 2018 - June 2021",
        description: "It was my second school where I studied from 8th till 11th class.",
        icon: "/icons/education/lag.jpg",
        link: "https://lag.lviv.ua/",
    },
    {
        title: "Ivan Franko National University of Lviv",
        subTitle: "Faculty of Electronics and Computer Technologies",
        duration: "September 2021 - Present",
        description: "Currently I'm studying computer sciense at Lviv National University.",
        icon: "/icons/education/lnu.png",
        link: "https://lnu.edu.ua/",
    },
    {
        title: "Udemy",
        description: "Place where I study a lot of different topics.",
        icon: "/icons/education/udemy.svg",
        button: "/Certificates.zip",
        buttonLabel: "My Certificates",
        link: "https://www.udemy.com/",
    },
];

const Education = () => {
    return (
        <Section id="education" heading="Education" threshold={0.65}>
            <Timeline elements={education} />
        </Section>
    );
};
export default Education;
