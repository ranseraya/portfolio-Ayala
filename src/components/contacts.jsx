import { Code2, Briefcase, Rocket, ShieldIcon, GitPullRequest } from "lucide-react";

const lists = [
    {
        title: "What's App",
        desc: "+62 857 3017 xxxx",
        icon: <Rocket width={20} height={20} className="text-blue-500" />,
    },
    {
        title: "Email",
        desc: "ayalarahanda0@gmail.com",
        icon: <Code2 width={20} height={20} className="text-blue-500" />,
    },
    {
        title: "LinkedIn",
        desc: "@ranseraya",
        icon: <Briefcase width={20} height={20} className="text-blue-500" />,
    },
    {
        title: "Instagram",
        desc: "@ranseraya",
        icon: <ShieldIcon width={20} height={20} className="text-blue-500" />,
    },
    {
        title: "Github",
        desc: "@ranseraya",
        icon: <GitPullRequest width={20} height={20} className="text-blue-500" />,
    },
    {
        title: "Youtube",
        desc: "@ranseraya",
        icon: <Rocket width={20} height={20} className="text-blue-500" />,
    },
];

export default function Contacts() {
    return (
<section className="px-0 sm:px-5 py-10">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">More Contacts</h2>
  <div className="grid sm:grid-cols-3 gap-6">
    {lists.map((goal, i) => (
      <div
        key={i}
        className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-zinc-700"
      >
        <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
          {goal.icon}
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{goal.title}</h3>
          <p className="text-sm text-gray-600 dark:text-blue-400 spaceGrotesk">{goal.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    )
}