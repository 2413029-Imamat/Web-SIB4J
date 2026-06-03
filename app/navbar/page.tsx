import Account from "./components/account"
import General from "./components/general"
import Menu from "./components/menu"

export default function Navbar() {
    return (

<div className="bg-white h-screen flex justify-center items-center p-120">
    <div className="bg-gray-500 flex flex-col w-auto h-auto rounded-2xl">
        <h1 className="font-bold text-2xl text-center p-4">CoodingLab</h1>
        <div className="p-4">
        <p>Main Menu</p>
        <Menu/>
        </div>
        <div className="p-4">
        <p>General</p>
        <General/>
        </div>
        <div className="p-4">
        <p>Account</p>
        <Account/>
        </div>
    </div>
</div>
    )
}