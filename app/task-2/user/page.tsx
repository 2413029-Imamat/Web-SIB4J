export default function userPage() {
    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
            <div className="bg-white p-10 h-150 w-130 rounded-4xl flex flex-col gap-8"> 
                <div className="flex justify-between">
                    <p className="text-3xl font-extralight text-gray-800"> Client details </p>
                    <img src="x.svg" alt="x" className=" h-7 w-7" />
                </div>

{/* Profile */}
                <div className="flex gap-4 justify-start">
                    <div>
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="cornelius" className="rounded-full h-15 w-15" />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-2xl font-bold text-gray-950">Cornelius Greendfelder</p>
                        
                        <div className="bg-green-300 h-7 w-24 flex justify-center items-center gap-0.5 rounded-4xl"> 
                            <img src="centang.svg" alt="status" />
                            <p className=" text-gray-900"> Verified </p>
                        </div>
                    </div>
                </div>
{/* Projects */}
                <div className="flex flex-col gap-4 bg-gray-200 text-gray-800 rounded-2xl p-6">
                <p className="text-2xl"> Projects</p>
                    <div className="flex justify-between text-gray-500">
                        <div className="flex flex-col">

                        <div className="flex justify-center gap-2">
                            <img className ="w-5 h-5 bg-purple-300"src="jam.svg" alt="jam" />
                            <p className="">Ongoing</p>
                        </div>
                        <div className="flex justify-start gap-1 text-2xl">
                            <p className="font-bold text-gray-950">2</p>
                            <p>($3.8k)</p>
                        </div>
                        </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center gap-2">
                            <img className="bg-green-300" src="kelar.svg" alt="kelar" />
                            <p>Completed</p>
                        </div>
                        <div className="flex justify-start gap-1 text-2xl">
                            <p className="font-bold text-gray-950">25</p>
                            <p>($54k)</p>
                        </div>
                    </div>
                    </div>
                </div>
{/*Location*/}
                <div className="flex justify-between text-2xl">
                    <p className="text-gray-950">Location</p>
                    <p className="text-gray-400">United States, New York</p>
                </div>
{/* With us */}
                <div className="flex justify-between text-2xl">
                    <p className="text-gray-950">With Us</p>
                    <p className="text-gray-400">6 Jan 2024</p>
                </div>
{/* Message */}
                <div className="flex justify-start gap-5 text-2xl">
                    <img className = "h-12 w-12"src="menu.svg" alt="list-tree" />
                    <div className="flex justify-center gap-2 bg-blue-600 rounded-3xl h-13 w-100">
                    <img className="h-8 w-8" src="mail.svg" alt="ikon pesan" />
                    <p>Message</p>
                    </div>
                </div>
                </div>
            </div>


    )
}