// CareerGoals.jsx
import { Code2, Briefcase, Rocket, ShieldIcon, GitPullRequest } from "lucide-react";

const goals = [
    {
        title: "Master React.js",
        desc: "Build production-ready applications and reusable components.",
        icon: <Code2 className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Explore Cybersecurity",
        desc: "Gain certifications and hands-on penetration testing experience.",
        icon: <ShieldIcon className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Contribute to Open Source",
        desc: "Collaborate with developer communities and publish useful tools.",
        icon: <GitPullRequest className="w-6 h-6 text-primary" />, 
    },
    {
        title: "Build Personal Projects",
        desc: "Launch full-stack apps showcasing end-to-end development.",
        icon: <Rocket className="w-6 h-6 text-primary" />,
    },
];

export default function CareerGoals(){
    return (
        <section className="px-0 sm:px-5 py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Career Goals 🚀</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {goals.map((goal, i) => (
                    <div
                        key={i}
                        className="bg-card px-2 py-4 sm:px-5 rounded-xl border border-border shadow-md hover:shadow-lg transition duration-300"
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