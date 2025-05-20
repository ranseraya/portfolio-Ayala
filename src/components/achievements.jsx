export default function Achievements() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl sm:text-4xl text-bold text-center">My Achievements & Accomplishments</h1>
                <p className="text-sm sm:text-lg my-5 text-muted-foreground text-center">A showcase of badges, awards, hackathon wins, and recognitions that highlight my journey — stay tuned!</p>
            </div>
            <div className="w-11/12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-muted/50 aspect-video rounded-xl p-4 flex flex-col items-center justify-center border-3 border-dotted">
                    <div className="text-4xl">🏆</div>
                    <h1 className="text-lg sm:text-2xl my-2">Comming Soon</h1>
                    <p className="text-center text-xs sm:text-sm text-muted-foreground">Achievement #1 is on its way. Check back later for updates!</p>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl p-4 flex flex-col items-center justify-center border-3 border-dotted">
                    <div className="text-4xl">🏆</div>
                    <h1 className="text-lg sm:text-2xl my-2">Comming Soon</h1>
                    <p className="text-center text-xs sm:text-sm text-muted-foreground">Achievement #2 is on its way. Check back later for updates!</p>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl p-4 flex flex-col items-center justify-center border-3 border-dotted">
                    <div className="text-4xl">🏆</div>
                    <h1 className="text-lg sm:text-2xl my-2">Comming Soon</h1>
                    <p className="text-center text-xs sm:text-sm text-muted-foreground">Achievement #3 is on its way. Check back later for updates!</p>
                </div>
            </div>
        </div>
    )
}