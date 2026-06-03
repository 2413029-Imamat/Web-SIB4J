import CardScheduleDestination from "./_components/card";

export default function detaildestinationpage() {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
        <CardScheduleDestination
            title="Min, 17 Mei 2026"
            description="IDR 4.837.400"
        />
        <CardScheduleDestination
            title="Sen, 18 Mei 2026"
            description="IDR 3.512.123"
        />
        <CardScheduleDestination
            title="Sel, 19 Mei 2026"
            description="IDR 3.435.686"
        />
        <CardScheduleDestination
            title="Rab, 20 Mei 2026"
            description="IDR 3.579.614"
        />
        <CardScheduleDestination
            title="Kam, 21 Mei 2026"
            description="IDR 3.587.610"
        />
        <CardScheduleDestination
            title=" Jum, 22 Mei 2026"
            description="IDR 3.510.124"
        />
        <CardScheduleDestination
            title="Sab, 23 Mei 2026"
            description="IDR 3.869.469"
        />
    </div>
  );
}