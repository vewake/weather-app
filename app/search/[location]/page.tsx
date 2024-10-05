import WeatherPage from "@/ui/components/weatherpage";
import axios from "axios";
import Link from "next/link";

export default async function Weather({ params }: { params: { location: string } }) {
  const location = params.location
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eb27f1a52ef4312eb4c2980a1833d852&units=metric`)
    const weatherdata = response.data
    return (
      <WeatherPage response={weatherdata} />
    );

  } catch (e) {
    return (
      <div className=" w-full h-full flex flex-col items-center justify-center ">
        <div className="m-8 p-4 text-7xl text-zinc-700 font-bold">
          Weather for {location} is not available, try another location
        </div>
        <Link href="/">
          <div className="m-8 p-4 text-2xl border-2 bg-cyan-100/10 border-zinc-600 rounded-lg text-white font-bold">
            go Home
          </div >
        </Link>
      </div >
    );

  }

}
