export type Friend = {
    name: string,
    short_desc: string,
    main_skill?: string,
    sub_skills: string[],
};

export const friends: Friend[] = [
    {
        name: "Rasyad",
        short_desc: "He's one of my best friends from Junior HighSchool. He's so curious and also smart!",
        main_skill: "Science",
        sub_skills: ["Science", "Mathematics"]
    },
    {
        name: "Aldo",
        short_desc: "He's my online friend. He's from Texas and also my first friend from outside country",
        sub_skills: ["Programming", "Cyber Security"]
    }
];