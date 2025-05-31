import { careerGoalsData } from "@/lib/data/about";

export default function CareerGoals() {
  return (
    <section className="px-0 sm:px-5 pt-5">
      <h2 className="text-xl sm:text-3xl font-bold text-primary mb-6">
        Career Goals
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {careerGoalsData.map((goal, i) => (
          <div
            key={i}
            className="bg-card px-2 py-4 sm:px-5 rounded-xl border border-border shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-secondary rounded-full">{goal.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">
                {goal.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">{goal.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
