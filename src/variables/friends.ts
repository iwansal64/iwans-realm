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
        name: "Thoriq",
        short_desc: "He's also one of my best friends from Mitra Industri Vocational HighSchool. He's so smart, he has a vast general knowledge. He also can speaks Germany and excel at Electricity!",
        sub_skills: ["Electricity", "Germany"]
    },
    {
        name: "Aldo",
        short_desc: "He's my online friend. He's from Texas and also my first friend from outside country",
        sub_skills: ["Programming", "Cyber Security"]
    }
];