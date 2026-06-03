import Button from "./button";
import CircleButton from "./circleButton";
import TagCard from "./tagCard";

export default function Card({
  imgSrc,
  cityName,
  type,
}: {
  imgSrc: string;
  cityName: string;
  type: string;
}) {
  return (
    <div className="bg-gray-50 w-80 p-2 rounded-4xl ">
      <img src={imgSrc} className="h-72 w-full rounded-4xl" />
      <div className="flex flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold">{cityName}</h1>
          <p className="text-gray-400">{type}</p>
        </div>
        <div className="flex gap-6 flex-wrap">
          <TagCard imgSrc="/tag.svg" title="from $120" />
          <TagCard imgSrc="plane-tilt.svg" title="SFO" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button />
          <CircleButton imgSrc="/heart.svg" />
        </div>
      </div>
    </div>
  );
}