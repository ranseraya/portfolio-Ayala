import { Code2, Briefcase, Rocket, ShieldIcon, GitPullRequest } from "lucide-react";

const lists = [
    {
        title: "What's App",
        desc: "+62 857 3017 xxxx",
        icon: <Rocket width={40} height={40} className="text-green-400" />,
    },
    {
        title: "Email",
        desc: "ayalarahanda0@gmail.com",
        icon: <Code2 width={40} height={40} className="text-green-400" />,
    },
    {
        title: "LinkedIn",
        desc: "@ranseraya",
        icon: <Briefcase width={40} height={40} className="text-green-400" />,
    },
    {
        title: "Instagram",
        desc: "@ranseraya",
        icon: <ShieldIcon width={40} height={40} className="text-green-400" />,
    },
    {
        title: "Github",
        desc: "@ranseraya",
        icon: <GitPullRequest width={40} height={40} className="text-green-400" />,
    },
    {
        title: "Youtube",
        desc: "@ranseraya",
        icon: <Rocket width={40} height={40} className="text-green-400" />,
    },
];

export default function Contacts() {
    return (
        <section className="px-0 sm:px-5 py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6">More Contacts</h2>
            <div className="grid sm:grid-cols-3 gap-6">
                {lists.map((goal, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900 p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center justify-baseline gap-4 mb-2">
                            <div className="p-5 bg-zinc-800 rounded-full">{goal.icon}</div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg font-semibold">{goal.title}</h3>
                                <h3 className="text-lg font-semibold">{goal.desc}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}