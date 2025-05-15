import CircularProgress from "./circular-progress";
import logoSample from "@/assets/images.jpg"

export default function Technologies() {
    return (
        <div className="">
            <div>
                <h1 className="text-2xl sm:text-4xl">Frontend</h1>
                <ul className="grid grid-cols-5 gap-2">
                    <li className="border h-20">
                        <div className="flex flex-row items-center gap-3">
                            <CircularProgress percentage={95} color="#38bdf8" logo={logoSample} />
                            <h2 className="text-bold">React <span className="text-green-600">(95%)</span></h2>
                        </div>
                        <div className="my-1 flex justify-between">
                            <p className="text-xs sm:text-sm text-muted-foreground">2 Years experiences</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">10 Projects</p>

                        </div>
                    </li>
                    <li className="border h-10"></li>
                    <li className="border h-10"></li>
                    <li className="border h-10"></li>
                    <li className="border h-10"></li>
                </ul>
            </div>
        </div>
    )
}