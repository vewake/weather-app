import Image from "next/image";

export default function WeatherPage({ response }: { response: any }) {
  return (
    <div>
      {JSON.stringify(response)}
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="m-8 p-4 text-7xl text-zinc-700 font-bold">
          <div className="flex flex-row ">
            <div>
              {response.name}
            </div>
            <div className="mt-4 ml-4">
              <Image src={`https://flagcdn.com/144x108/${response.sys.country.toLowerCase()}.png`} alt="icon" width={50} height={50} className="" />

            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-row justify-center items-center">
        <div className="text-8xl font-bold p-12 m-12 border-r-2 ">
          {Math.floor(response.main.temp)}°C
        </div>

        <div className=" text-2xl">

          <div className="m-2 p-2 border-d-2">
            {response.weather[0].description}
          </div>

          <div className="m-2 p-2 border-d-2">
            {response.main.pressure} hPa
          </div>


          <div className="m-2 p-2 border-d-2">
            {response.main.humidity}%
          </div>

          <div className="m-2 p-2 border-d-2">
            {response.wind.speed} Km/h
          </div>


        </div>
      </div>
      <div>
      </div>
    </div >
  )
}
