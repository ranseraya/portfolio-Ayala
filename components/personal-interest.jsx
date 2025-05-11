import { Code2, Briefcase, Rocket, ShieldIcon, GitPullRequest } from "lucide-react";

const lists = [
  {
    title: "CTF",
    desc: "Main CTF",
    icon: <Code2 className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Chess",
    desc: "Main Chess",
    icon: <ShieldIcon className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Contribute to Open Source",
    desc: "Collaborate with developer communities and publish useful tools.",
    icon: <GitPullRequest className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Badminton",
    desc: "Main Badminton",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Ngaji",
    desc: "Ngaji dunia",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Music",
    desc: "Mendengarkan Musik",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
  },
];

export default function PersonalInterest(){
  return (
    <section className="px-5 py-10">
      <h2 className="text-3xl font-bold text-green-400 mb-6">Personal Interest 🚀</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {lists.map((goal, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-zinc-800 rounded-full">{goal.icon}</div>
              <h3 className="text-lg font-semibold">{goal.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{goal.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
