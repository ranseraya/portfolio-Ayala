import { Trophy, Award, Star } from "lucide-react";
import { achievementsList } from "@/lib/data/certifications";

export default function Achievements() {
  const hasAchievements = achievementsList.length > 0;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-primary">
        My Achievements & Accomplishments
      </h1>
      <p className="text-sm sm:text-lg my-2 text-muted-foreground text-center">
        A showcase of badges, awards, hackathon wins, and recognitions that
        highlight my journey — stay tuned!
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasAchievements ? (
          achievementsList.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-card rounded-xl p-6 flex flex-col items-center justify-center border border-border shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl text-primary mb-4">
                {achievement.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground my-2 text-center">
                {achievement.title}
              </h2>
              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))
        ) : (
          <div className="bg-card rounded-xl p-6 flex flex-col items-center justify-center border border-border shadow-md col-span-full">
            <div className="text-4xl mb-4 text-muted-foreground">🏆</div>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground my-2 text-center">
              Coming Soon
            </h2>
            <p className="text-center text-xs sm:text-sm text-muted-foreground">
              Achievement details are on their way. Check back later for
              updates!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
