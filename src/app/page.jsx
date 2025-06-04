import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col text-center gap-4 w-6/12">
        <h2 className="font-bold text-8xl">Indian Atlas</h2>
        <p className="text-2xl">A public dataset of Indian states and their cities in multiple formats (JSON, CSV, SQL). Useful for developers, open data projects, and location-based applications.</p>
      </div>
    </div>
  );
}
