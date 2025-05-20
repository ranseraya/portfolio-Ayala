import CircularProgress from "./circular-progress";
import logoSample from "@/assets/images.jpg"


const listTechs = [
    {
        Title: "Frontend",
        Technologies: [
            {
                name: "HTML5",
                presentase: 95,
                exp: "3 Years",
                projects: "20+",
                logo: logoSample,
            },
            {
                name: "CSS3",
                presentase: 90,
                exp: "3 Years",
                projects: "20+",
                logo: logoSample,
            },
            {
                name: "Javascript ES6+",
                presentase: 90,
                exp: "3 Years",
                projects: "20+",
                logo: logoSample,
            },
            {
                name: "PHP",
                presentase: 60,
                exp: "2 Years",
                projects: "3+",
                logo: logoSample,
            },
            {
                name: "Tailwind",
                presentase: 90,
                exp: "2 Years",
                projects: "10+",
                logo: logoSample,
            },
            {
                name: "Boostrap+",
                presentase: 40,
                exp: "6 Month",
                projects: "2",
                logo: logoSample,
            },
            {
                name: "React",
                presentase: 80,
                exp: "1.5 Years",
                projects: "5+",
                logo: logoSample,
            },
            {
                name: "Next JS",
                presentase: 80,
                exp: "1 Years",
                projects: "3",
                logo: logoSample,
            },
            {
                name: "Redux",
                presentase: 70,
                exp: "1 Years",
                projects: "2",
                logo: logoSample,
            },
            {
                name: "Shadcn UI",
                presentase: 60,
                exp: "6 Month",
                projects: "2",
                logo: logoSample,
            },
            {
                name: "Motion",
                presentase: 80,
                exp: "1.5 Years",
                projects: "6",
                logo: logoSample,
            },
            {
                name: "Laravel",
                presentase: 40,
                exp: "1 Years",
                projects: "2",
                logo: logoSample,
            },
        ]
    },
    {
        Title: "Backend",
        Technologies: [
            {
                name: "Node.Js",
                presentase: 90,
                exp: "2 Years",
                projects: '',
                logo: logoSample,
            },
            {
                name: "Express.Js",
                presentase: 40,
                exp: "3 Month",
                projects: '',
                logo: logoSample,
            },
            {
                name: "MySQL",
                presentase: 95,
                exp: "2 Years",
                projects: '',
                logo: logoSample,
            },
            {
                name: "MongoDB",
                presentase: 50,
                exp: "6 Month",
                projects: '',
                logo: logoSample,
            },
            {
                name: "REST API",
                presentase: 50,
                exp: "6 Month",
                projects: '',
                logo: logoSample,
            },
        ]
    },
    {
        Title: "More Tools",
        Technologies: [
            {
                name: "Kali/Parrot Linux",
                presentase: 90,
                exp: "4 Years",
                projects: '',
                logo: logoSample,
            },
            {
                name: "Git (Github)",
                presentase: 50,
                exp: "4 Years",
                projects: '',
                logo: logoSample,
            },
            {
                name: "Google Cloud (CC)",
                presentase: 40,
                exp: "3x GCP",
                projects: '',
                logo: logoSample,
            },
        ]
    },
    {
        Title: "Cybersecurity",
        Technologies: [
            {
                name: "Cyber Crime Analyst",
                presentase: 50,
                exp: "1 Years",
                projects: '',
                logo: logoSample,
            },
            {
                name: "Networking",
                presentase: 80,
                exp: "3 Years",
                projects: '',
                logo: logoSample,
            },
        ]
    },
    {
        Title: "Soft Skills",
        Technologies: [
            {
                name: "English Fluet",
                presentase: 70,
                exp: "Around 500 TOELF",
                projects: '',
                logo: logoSample,
            },
            {
                name: "Life",
                presentase: 100,
                exp: "20+ Years",
                projects: '',
                logo: logoSample,
            },
        ]
    },
]
export default function Technologies() {
    return (
        <div className="">
            {listTechs.map((Categoty, index) => {
                return (
                    <div key={index}>
                        <h1 className="text-2xl sm:text-4xl mt-15 mb-3">{Categoty.Title}</h1>
                        <ul className="grid grid-cols-2 sm:grid-cols-5 gap-5">
                            {Categoty.Technologies.map((tech, index) => {
                                return (
                                    <li className="h-26 flex flex-col justify-between glassmorph rounded-xl p-4" key={index}>
                                        <div className="flex flex-row items-center gap-3">
                                            <CircularProgress percentage={tech.presentase} color="#38bdf8" logo={tech.logo} />
                                            <h2 className="text-sm sm:text-lg text-bold">{tech.name}<span className="text-green-600"> ({tech.presentase}%)</span></h2>
                                        </div>
                                        <div className="my-1 flex flex-col sm:flex-row justify-around">
                                            { tech.exp ?  <p className="text-xs sm:text-sm text-muted-foreground">{tech.exp} exp</p> : ''}
                                            { tech.projects ?  <p className="text-xs sm:text-sm text-muted-foreground">{tech.projects} Projects</p> : ''}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}