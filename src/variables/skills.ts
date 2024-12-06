import type { ImageMetadata } from "astro";
import ProgrammingImage from "../images/coding_time.jpg";
import CyberSecurityImage from "../images/cyber_security.png";
import ElectronicsImage from "../images/electronics.jpg";
import MathematicsImage from "../images/mathematics.jpg";
import PhysicsImage from "../images/physics.jpg";

export const skills: {
    skill_name: string,
    skill_desc: string,
    skill_date: Date,
    skill_link: string,
    skill_relations: string[],
    skill_image: ImageMetadata,
}[] = [
        {
            skill_name: "Programming",
            skill_desc: "Learn how to solve a particular problem by writing it down the solution into editor in the form of code is an art that can't be replaced in my heart.",
            skill_date: new Date("2020-02-29T19:00:00Z"),
            skill_link: "/branches/programming",
            skill_relations: ["Mathematics", "Electronics", "Physics", "Cyber Security"],
            skill_image: ProgrammingImage
        },
        {
            skill_name: "Cyber Security",
            skill_desc: "Cyber Security is a field that i get interesting because of how vulnerable we are. Especially we will exposed to technology in all aspects and it makes securing our devices so important for us",
            skill_date: new Date("2024-11-03T18:00:00Z"),
            skill_link: "/branches/cyber-security",
            skill_relations: ["Mathematics", "Electronics", "Programming"],
            skill_image: CyberSecurityImage
        },
        {
            skill_name: "Mathematics",
            skill_desc: "I love math cause it makes us think how to make a hard and complex equation to simpler one.",
            skill_date: new Date("2021-05-20T07:00:00Z"),
            skill_link: "/branches/mathematics",
            skill_relations: ["Programming", "Electronics", "Physics", "Cyber Security"],
            skill_image: MathematicsImage
        },
        {
            skill_name: "Electronics",
            skill_desc: "This field teaches me how to be more creative and makes my hand stronger and faster than before!",
            skill_date: new Date("2023-08-15T15:00:00Z"),
            skill_link: "/branches/electronics",
            skill_relations: ["Mathematics", "Programming", "Physics", "Cyber Security"],
            skill_image: ElectronicsImage
        },
        {
            skill_name: "Physics",
            skill_desc: "I love how it forces us to think deeper and makes us crazy. It's hard, but it's beautiful.",
            skill_date: new Date("2021-02-10T21:00:00Z"),
            skill_link: "/branches/physics",
            skill_relations: ["Mathematics", "Programming", "Electronics", "Cyber Security"],
            skill_image: PhysicsImage
        },
    ];