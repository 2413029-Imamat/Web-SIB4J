import Card from "./components/card"

export default function LatihanPage() {
  return (
    <div className="bg-gray-200 w-full h-full flex flex-col p-8 gap-4">
      <Card imgSrc="/resort1.jpg"/>
      <Card imgSrc="/resort2.jpg"/>
      <Card imgSrc="/ikn.jpg"/>
    </div>
  )
}