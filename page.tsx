import Card from "./components/card"

export default function NewNavbar() {
    return (
        <div className="h-screen bg-white flex justify-center items-center">
            <div className="bg-blue-950 p-4">
                <h1 className="text-2xl font-bold">CodingLab</h1>
                <Card   header="Main Menu"
                        imgSrc1="/dashboard.svg" title1="Dashboard" 
                        imgSrc2="/overview.svg" title2="Overview" 
                        imgSrc3="/analytic.svg" title3="Analytic"/>
                <Card   header="General"
                        imgSrc1="/project.svg" title1="Projects" 
                        imgSrc2="/group.svg" title2="Groups" 
                        imgSrc3="/report.svg" title3="Report"/>
                <Card   header="Account"
                        imgSrc1="/profile.svg" title1="Profile"
                        imgSrc2="/settings.svg" title2="Settings"/>
            </div>
        </div>
    )
}