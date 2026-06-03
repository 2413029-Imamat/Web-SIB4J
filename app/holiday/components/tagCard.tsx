export default function TagCard({
  imgSrc,
  title,
}: {
  imgSrc: string;
  title: string;
}) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <img src={imgSrc} className="h-5 w-5" />
      <p className="font-medium">{title}</p>
    </div>
  );
}