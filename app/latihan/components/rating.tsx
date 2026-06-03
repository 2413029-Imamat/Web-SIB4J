export default function Rating({title, rate, reviews}: {title:string, rate:string, reviews:string}) {
    return (
        <div className="flex justify-start gap-2 py-16">
      <h1 className="text-3xl bg-blue-900 rounded-md w-15 h-10 text-center text-white">{rate}</h1>
      <div className="flex flex-col">
      <p>{title}</p>
      <p className="text-gray-500">{reviews}</p>
      </div>
      </div>
    )
}