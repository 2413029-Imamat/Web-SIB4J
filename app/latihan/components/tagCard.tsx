export default function TagCard( {imgSrc,title}: {imgSrc:string, title:string}) {
    return(
        <div className="flex justify-between gap-2">
            <img src= {imgSrc}/>
            <p>{title}</p>
        </div>
    )
}
