export type Achievement = {
    title: string,
    description: string,
    date_get: Date,
    link?: string;
};

export const achievements: Achievement[] = [
    {
        title: "Best Subject in Mathematics 2023/2024",
        description: "I've got this achievement because of being the best subject in mathematics. I've got this from Mitra Industri Vocational HighSchool",
        date_get: new Date("2024-07-13T10:50:10")
    },
    {
        title: "Best Subject in Electronics 2023/2024",
        description: "I've got this achievement because of being the best subject in electronics. I've got this from Mitra Industri Vocational HighSchool",
        date_get: new Date("2024-07-13T10:50:10")
    },
    {
        title: "Scientific Computing with Python Certificate",
        description: "This certificate proofs that I can create a solution for a world problems using a programming language, Python!",
        date_get: new Date("2025-01-05T21:25:50"),
        link: "https://www.freecodecamp.org/certification/Iwann/scientific-computing-with-python-v7"
    },
    {
        title: "JavaScript Algorithm and Data Structures",
        description: "This certificate proofs that I can create an algorithm that can solves many problems with JavaScript",
        date_get: new Date("2025-01-05T21:25:50"),
        link: "https://www.freecodecamp.org/certification/Iwann/javascript-algorithms-and-data-structures-v8"
    }
];