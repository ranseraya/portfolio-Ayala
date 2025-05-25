s// PersonalInterest.jsx
import { Code2, Briefcase, Rocket, ShieldIcon, GitPullRequest, MusicIcon, Globe } from "lucide-react"; 

const lists = [
    {
        title: "Badminton",
        desc: "Main Badminton",
        icon: <Rocket className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Chess",
        desc: "Main Chess",
        icon: <ShieldIcon className="w-6 h-6 text-primary" />, 
    },
    {
        title: "CTF",
        desc: "Main CTF",
        icon: <Code2 className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Contribute to Open Source",
        desc: "Collaborate with developer communities and publish useful tools.",
        icon: <GitPullRequest className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Language Enthusiast", 
        desc: "Exploring new languages for communication and development.", 
        icon: <Globe className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Geography/Geoinformatics", 
        desc: "Interest in geographical data analysis and mapping technologies.", 
        icon: <Globe className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Music",
        desc: "Listening and exploring various music genres.", 
        icon: <MusicIcon className="w-6 h-6 text-primary" />,
    },
];

export default function PersonalInterest(){
    return (
        <section className="px-0 sm:px-5 py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Personal Interest 🚀</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {lists.map((goal, i) => (
                    <div
                        key={i}
                        className="bg-card p-5 rounded-xl border border-border shadow-md hover:shadow-lg transition duration-300 "
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-2 bg-secondary rounded-full">{goal.icon}</div>
                            <h3 className="text-lg font-semibold text-foreground">{goal.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{goal.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};