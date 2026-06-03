export default function Menu() {
    return(
        <div className="p-4 font-sans flex flex-col">
            <div className="flex justify-start gap-3 p-4">
            <img src="/dashboard.svg" alt="ikon" />
            <p>Dashboard</p>
            </div>
            <div className="flex justify-start gap-3 p-4">
            <img src="/overview.svg" alt="ikon" />
            <p>Overview</p>
            </div>
            <div className="flex justify-start gap-3 p-4">
            <img src="/analytic.svg" alt="ikon" />
            <p>Analytic</p>
            </div>
        </div>
    )
}