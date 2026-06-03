
export default function ViewCard( {title}: {title:string}) {
    return(
      <div className="text-gray-500 font-sans flex justify-center items-center gap-12 bg-gray-300 rounded-xl text-center h-10 w-70">
      <p>{title}</p>
      <p className="rounded-4xl bg-green-300 h-8 w-12 text-center leading-8">View</p>
      </div>
    )
}