export default function Card({header, imgSrc1, imgSrc2, imgSrc3,title1, title2, title3}: {header: string, imgSrc1: string, imgSrc2:string, imgSrc3:string, title1:string, title2:string, title3:string}) {
    return(
        <div className="p-2">
                    <p>{header}</p>
                    <div className="flex justify-start gap-2 p-2">
                        <img src={imgSrc1}/>
                        <p>{title1}</p>
                    </div>
                    <div className="flex justify-start gap-2 p-2">
                        <img src={imgSrc2}/>
                        <p>{title2}</p>
                    </div>
                    <div className="flex justify-start gap-2 p-2">
                        <img src={imgSrc3}/>
                        <p>{title3}</p>
                    </div>
                </div>
    )
}