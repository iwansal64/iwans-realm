export type ProjectData = {
    project_id: number,
    title: string,
    description: string,
    features: string[],
    software?: string[],
    techStack?: {
        website?: {
            frontend: string[],
            backend?: string[];
        };
        other?: string[];
    },
    links?: {
        name: string,
        link: string;
    }[],
    tools?: string[],
    materials?: string[],
    dateStart: Date,
    dateEnd?: Date,
    category: string[],
    state: string;
};

export const projects_data: ProjectData[] = [
    {
        project_id: 0,
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
        project_id: 1,
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
        links: [{
            name: "SCVol3 Website",
            link: "https://scvol3.netlify.app/"
        }],
        state: "Completed"
    },
    {
        project_id: 2,
        title: "Cat Sniffer",
        description: "Cat Sniffer is a project that i create with my friend at school. This electronics device can be used to pentest WiFi network, Bluetooth, and LAN",
        software: ["Visual Studio Code", "Platform IO"],
        features: [
            "Can test WiFi security",
            "Can test device security wirelessly",
            "Can test Bluetooth Security",
            "Can check security vulnerability around LAN",
        ],
        techStack: {
            other: ["C++"]
        },
        dateStart: new Date("2024-08-22T06:26:00Z"),
        category: ["Electronics", "Programming", "Cyber Security"],
        state: "On Progress"
    },
    {
        project_id: 3,
        title: "Team IT Organization Website",
        description: "I have been a part of a team to create a website for Team IT Community in Mitra Industri Vocational HighSchool. It includes the brief explanation of Team IT and Projects that we've made.",
        software: ["Visual Studio Code"],
        features: [
            "Give a brief explanation to what is Team IT",
            "Includes a registration form to join Team IT",
        ],
        techStack: {
            website: {
                frontend: ["React JS", "Tailwind"]
            }
        },
        links: [{
            name: "Team IT Website",
            link: "https://it-mivhs.vercel.app/"
        }],
        dateStart: new Date("2024-12-14T20:00:00Z"),
        dateEnd: new Date("2025-01-10T05:49:00Z"),
        category: ["Programming"],
        state: "Completed"
    },
    {
        project_id: 4,
        title: "Instaf1nder",
        description: "Instaf1nder is a tool that used to gather information about Instagram account",
        software: ["Visual Studio Code"],
        features: [
            "Get Instagram account's followers and following",
            "Get Instagram account's links, maps, and emails if available",
            "Get Instagram account's bio, posts, and profile picture",
            "Dump all of the data into a file"
        ],
        techStack: {
            other: ["Python"]
        },
        links: [{
            name: "Github Repository",
            link: "https://github.com/iwansal64/instaf1nder-py"
        }],
        dateStart: new Date("2024-12-25T00:00:00Z"),
        category: ["Programming", "Cyber Security"],
        state: "Will Be Updated"
    },
];