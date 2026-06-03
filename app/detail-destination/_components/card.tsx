export default function CardScheduleDestination({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-slate-300 px-4 py-3 w-48 h-20">
      <p className="text-black text-center">{title}</p>
      <p className="text-black font-bold text-center flex justify-center items-center">{description}</p>
    </div>
  );
}