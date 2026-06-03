import Card from "./components/card";

export default function HolidayPage() {
  return (
    <div className="h-screen text-gray-900 flex justify-center items-center gap-4">
      <Card
        imgSrc="/golden-gate.jpg"
        cityName="San Francisco"
        type="Premium Economy"
      />
      <Card imgSrc="/ikn.jpg" cityName="IKN" type="Business Class" />
      <Card imgSrc="/resort2.jpg" cityName="Bali" type="Beach House"/>
    </div>
  );
}