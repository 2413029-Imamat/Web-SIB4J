export default function CircleButton({ imgSrc }: { imgSrc: string }) {
  return (
    <button className="rounded-full border-2 border-gray-200 p-3 flex justify-center items-center">
      <img src={imgSrc} className="w-6 h-6" />
    </button>
  );
}