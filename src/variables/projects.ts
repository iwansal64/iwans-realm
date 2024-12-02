export const projects_data: {
    title: string,
    description: string,
    features: string[],
    software?: string[],
    techStack?: {
        website?:{
            frontend: string[],
            backend?: string[]
        }
    },
    links?: string[],
    tools?: string[],
    materials?: string[],
    dateStart: Date,
    dateEnd?: Date,
    category: string[],
    state: string
}[] = [
    {
        title: "Fitness Advisor",
        description: "This is my first hackathon projects that i've ever done. I teamed up with 7 peoples around the world to create a software that will be submitted to a competition (Hackathon) from Google.",
        software: ["Visual Studio Code", "GitLens"],
        techStack: {
            website: {
                frontend: ["React JS"],
                backend: ["Express JS", "MongoDB"]
            }
        },
        features: [
            "Creating fitness advice to the user from data they gave.",
            "Can ask to the AI"
        ],
        dateStart: new Date("2024-10-27T07:42:37Z"),
        category: ["Programming", "Website"],
        state: "On Progress"
    },
    {
        title: "Classmeeting Event Website",
        description: "This is my first website that i built for client which is a school, SMAN 1 SETU. I built this website because of my friend request. It contains the informations about the event",
        software: ["Visual Studio Code", "GitLens"],
        techStack: {
            website: {
                frontend: ["Astro JS"]
            }
        },
        features: [
            "Give a brief informations about the events",
            "Give navigations for clients to learn more about the event",
            "Fast performance website with less loading",
        ],
        dateStart: new Date("2024-08-22T06:26:00Z"),
        dateEnd: new Date("2024-08-23T06:53:00Z"),
        category: ["Programming", "Website"],
        links: ["scvol3.vercel.app"],
        state: "Completed"
    },
    {
        title: "Cat Sniffer",
        description: "Cat Sniffer is a project that i create with my friend at school. This electronics device can be used to pentest WiFi network, Bluetooth, and LAN",
        software: ["Visual Studio Code", "Platform IO"],
        features: [
            "Can test WiFi security",
            "Can test device security wirelessly",
            "Can test Bluetooth Security",
            "Can check security vulnerability around LAN",
        ],
        dateStart: new Date("2024-08-22T06:26:00Z"),
        category: ["Electronics", "Programming", "Cyber Security"],
        links: ["scvol3.vercel.app"],
        state: "On Progress"
    },
];