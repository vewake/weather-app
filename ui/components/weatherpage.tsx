import Image from "next/image";

export default function WeatherPage({ response }: { response: any }) {

  return (
    <div>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className=" lg:m-8 lg:p-4 text-7xl text-zinc-700 font-bold">
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
      <div className="w-full  flex lg:flex-row flex-col justify-center items-center">
        <div className="-m-14 lg:visible invisible">
          <Image src={'https://openweathermap.org/img/wn/' + response?.weather?.[0]?.icon + '.png'} alt="icon" width={120} height={120}

            className="mt-2" />
        </div>
        <div className="text-center m-12 text-5xl lg:text-8xl font-bold lg:p-12 lg:m-12 lg:border-r-2 ">
          {Math.floor(response.main.temp)}°C
          <div className="text-2xl text-center lg:text-2xl">
            {response.weather[0].description}
          </div>
        </div>

        <div className="flex flex-col">

          <div className="flex flex-col items-center justify-center text-center text-2xl text-blue-300 p-2 m-2 rounded-lg bg-black/35">
            <div>
              <Image src={'/wind.svg'} alt={'wind'} width={80} height={80} />
            </div>
            <div>
              Wind Speed - {response.wind.speed} Km/h
            </div>
          </div>


          <div className="flex flex-col items-center justify-center text-center text-2xl text-blue-300 p-2 m-2 rounded-lg bg-black/35">
            <div>
              <Image src={'/humidity.png'} alt={'wind'} width={80} height={80} />
            </div>
            <div>
              Humidity - {response.main.humidity}%
            </div>
          </div>


          <div className="flex flex-col items-center justify-center text-center text-2xl text-blue-300 p-2 m-2 rounded-lg bg-black/35">
            <div>
              <Image src={'/clouds.png'} alt={'wind'} width={80} height={80} />
            </div>
            <div>
              {response.clouds.all}%
            </div>
          </div>


        </div>


        {/* <div className=" text-2xl "> */}
        {/*   <div className="m-2 p-2 border-d-2"> */}
        {/*     Pressure - {response.main.pressure} hPa */}
        {/*   </div> */}
        {/**/}
        {/**/}
        {/*   <div className="m-2 p-2 border-d-2"> */}
        {/*     Humidity - {response.main.humidity}% */}
        {/*   </div> */}
        {/**/}
        {/*   <div className="m-2 p-2 border-d-2"> */}
        {/*     Wind Speed - {response.wind.speed} Km/h */}
        {/*   </div> */}
        {/* </div> */}
        {/**/}

      </div>
      <div>
      </div>
    </div >
  )
}
