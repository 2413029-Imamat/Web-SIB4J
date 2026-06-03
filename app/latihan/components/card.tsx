import House from "./house"
import Rating from "./rating"
import TagCard from "./tagCard"
import ViewCard from "./viewCard"
export default function Card({imgSrc}:{imgSrc : string}) {
  return (

<div className="bg-white flex justify-around rounded-2xl p-4">
      <img src={imgSrc} className="rounded-2xl h-60 w-80"/>
      <div className="flex flex-col text-gray-950">
      <House houseName="Victory House Hotel"/>
      <div className="flex justify-start gap-2 text-gray-500 text-sm">
        <TagCard imgSrc="/mail.svg" title="3.2 miles to centre"/>
        <TagCard imgSrc="/star.svg" title="4 star hotel"/>
      </div>
      <Rating rate="7.5" title="Great" reviews="(2,405 reviews)"/>
      </div>
      <div className="flex flex-col gap-4">
      <ViewCard title="Booking.com $220"/>
      <ViewCard title="Lastminute.com $235"/>
      <ViewCard title="Trip.com $238"/>
      <ViewCard title="+16 more $240"/>
      </div>
      </div>
    )
  }