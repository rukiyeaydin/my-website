import { JobType, PostType, ProfileType, ProjectType, SkillProps } from "@/types";
import {
    BiLogoReact,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoRedux,
    BiLogoTailwindCss,
    BiLogoBootstrap,
    BiLogoPython,
    BiLogoGit,
    BiLogoVisualStudio,
    BiLogoGithub,
    BiLogoLinkedinSquare,
    BiLogoCPlusPlus,
    BiLogoNodejs,
    BiLogoMongodb,
} from "react-icons/bi";

import { FaKaggle } from "react-icons/fa";

// import ArchLinuxIcon from '../components/shared/ArchLinuxIcon';
// import CSharpIcon from "../components/shared/CSharpIcon";

export const userProfile: ProfileType = {
    id: "p1",
    fullName: "Rukiye Aydin",
    headline: "Computer Engineer",
    profileImage: {
        image: "/images/illustrations/home.png",
        alt: "Rukiye Aydin Avatar"
    },
    shortBio: "I'm Rukiye Aydin, a computer engineer passionate about learning and building open-source software that is beneficial to developers and the world at large.",
    email: "rukiyeaydinlive@gmail.com",
    location: "Mersin, Turkey",
    resumeURL: "aa.pdf",
};

export const jobs: JobType[] = [
    // {
    //     id: "j2",
    //     name: "Borda Technology: IoT for Healthcare",
    //     jobTitle: "Software Developer",
    //     logo: "/images/jobs/borda.png",
    //     url: "https://www.bordatech.com/",
    //     description: "At Borda Technology, I'm currently spearheading the development of the Lighthouse mobile application, a vital tool enabling hospital staff to expertly manage and oversee their essential assets.",
    //     startDate: "2021-09-5",
    //     endDate: ""
    // },
    // {
    //     id: "j1",
    //     name: "ONE Bilgi Sistemleri Ticaret A.Ş.",
    //     jobTitle: "Software Developer",
    //     logo: "/images/jobs/one.png",
    //     url: "https://one.com.tr/",
    //     description: "At One Bilgi Sistemleri, I used Flutter and Firebase to develop apps and executed web scraping tasks.",
    //     startDate: "2020-09-01",
    //     endDate: "2021-09-03"
    // }
];

export const projects: ProjectType[] = [
    {
        id: "5",
        name: "E-Book",
        slug: "e-book",
        tagline: "A dynamic platform for readers and writers to share, discover, and immerse in captivating stories.",
        projectUrl: "",
        logo: "/images/logos/ebook.png",
        description: `
        <p><strong>E-Book</strong> is an interactive platform where users can write, read, and share books in a seamless digital environment. The app enables both writers and readers to engage with captivating stories while offering features that help foster a creative community.</p>
        <br>
        <p><strong>E-Book</strong> is designed with flexibility in mind, allowing users to edit their written works, follow other writers, and discover new books easily. The platform offers robust customization options to personalize your reading and writing experience.</p>
        <br>
        <p><strong>E-Book</strong> provides numerous features, including:</p>
        <br>
        <ul>
            <li><strong>Write and Edit Your Own Books</strong>: Authors can create books directly on the platform and make edits as needed, ensuring their works are always up to date and polished.</li>
            <br>
            <li><strong>Discover and Read Books by Other Users</strong>: Browse through a library of books written by other users, with the ability to search and filter books based on your preferences.</li>
            <br>
            <li><strong>Follow Other Writers</strong>: Stay connected with your favorite authors by following them, making it easy to keep track of new releases or updates to their books.</li>
            <br>
            <li><strong>Search and Filter Books</strong>: Easily find books by genre, title, or author using the powerful search and filtering tools.</li>
            <br>
            <li><strong>View and Edit User Profiles</strong>: Customize your user profile, adjust your personal information, and manage your reading and writing preferences through the settings.</li>
            <br>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/rukiyeaydin/e-book-fullStack",
        screenshots: [
            "/images/apps/e-book/image.png",
            "/images/apps/e-book/image2.png",
            "/images/apps/e-book/image3.png",
            "/images/apps/e-book/image4.png",
            "/images/apps/e-book/image5.png",
            "/images/apps/e-book/image6.png",
            "/images/apps/e-book/image7.png",
            "/images/apps/e-book/image8.png",
        ],
    },
    {
        id: "4",
        name: "Startup",
        slug: "startup",
        tagline: "An efficient and easy-to-use tool for startups.",
        projectUrl: "",
        logo: "/images/logos/startup.png",
        description: `
        <p>
            <strong>Startup Showcase</strong> is a React-based web application designed to provide users with a comprehensive overview of a startup's offerings.
        </p>
        <br>
        <p>
            Key features and achievements of this project include:
        </p>
        <br>
        <ul>
            <li>Presenting an engaging <em>About</em> section, where users can learn about the startup’s mission, vision, and team.</li>
            <br>
            <li>Offering a <em>Communication</em> module that allows users to easily reach out to the startup via integrated contact forms and messaging options.</li>
            <br>
            <li>Detailing the startup's <em>Services</em> with clear descriptions and visual elements, providing users with a thorough understanding of what’s offered.</li>
            <br>
            <li>Implementing a responsive and intuitive design, ensuring a seamless user experience across various devices and screen sizes.</li>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/rukiyeaydin/startupReact",
        screenshots: [
            "/images/apps/startup/image1.png",
            "/images/apps/startup/image2.png",
            "/images/apps/startup/image3.png",
        ],
    },
    {
        id: "3",
        name: "E-Commerce",
        slug: "e-commerce",
        tagline: "Streamlined shopping experience with a modern React interface.",
        projectUrl: "",
        logo: "/images/logos/ecommerce.png",
        description: `
        <p>
            <strong>Startup Showcase</strong> is a React-based web application that delivers a clear and engaging presentation of a startup's core aspects.
        </p>
        <br>
        <p>
            Key features and achievements of this project include:
        </p>
        <br>
        <ul>
            <li>Featuring an <em>About</em> section where users can discover the startup’s mission, vision, and team.</li>
            <br>
            <li>Providing a <em>Contact</em> module that enables users to reach out to the startup through integrated forms and messaging.</li>
            <br>
            <li>Highlighting the startup's <em>Services</em> with straightforward descriptions and visuals to help users understand offerings.</li>
            <br>
            <li>Ensuring a responsive and user-friendly design for a consistent experience across all devices and screen sizes.</li>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/rukiyeaydin/e-commerce",
        screenshots: [
            "/images/apps/e-commerce/image1.png",
            "/images/apps/e-commerce/image2.png",
            "/images/apps/e-commerce/image3.png",
        ],
    },
];

export const posts: PostType[] = [
    /*     {
            id: "po1",
            createdAt: "2022-01-01T00:00:00Z",
            title: "My Journey in Tech",
            slug: "my-journey-in-tech",
            description: "A summary of my journey in the tech industry.",
            date: "2022-01-01",
            coverImage: {
                image: "",
                alt: "A scenic road representing a journey"
            },
            tags: ["tech", "journey", "career"],
            author: {
                name: "John Doe",
                photo: {
                    image: "",
                    alt: "Portrait of John Doe"
                },
                twitterUrl: "https://twitter.com/example"
            },
            body: "",
            featured: true,
            isPublished: true
        } 
    */
];

// export const images = 60;

// export const images = 39;

export const skills: SkillProps[] = [
    { name: 'Python', icon: BiLogoPython, color: '#00C853' },
    { name: 'C++', icon: BiLogoCPlusPlus, color: '#FFEB3B' },
    { name: 'Html', icon: BiLogoHtml5, color: '#FB8C00' },
    { name: 'Css', icon: BiLogoCss3, color: '#3C99D4' },
    { name: 'Tailwind', icon: BiLogoTailwindCss, color: '#00C853' },
    { name: 'Bootstrap', icon: BiLogoBootstrap, color: '#FFEB3B' },
    { name: 'Javascript', icon: BiLogoJavascript, color: '#DDA0DD' },
    { name: 'React', icon: BiLogoReact, color: '#FB8C00' },
    { name: 'Redux', icon: BiLogoRedux, color: '#3C99D4' },
    { name: 'NodeJS', icon: BiLogoNodejs, color: '#00C853' },
    { name: 'MongoDB', icon: BiLogoMongodb, color: '#FB8C00' },
    { name: 'Git', icon: BiLogoGit, color: '#FFEB3B' },
    { name: 'VsCode', icon: BiLogoVisualStudio, color: '#DDA0DD' },
];

export const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/rukiyeaydin",
        icon: BiLogoGithub,
    },
    {
        id: 2,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/rukiye-aydin/",
        icon: BiLogoLinkedinSquare,
    },
    {
        id: 3,
        name: "Kaggle",
        url: "https://www.kaggle.com/rukiyeaydn",
        icon: FaKaggle,
    }
];
