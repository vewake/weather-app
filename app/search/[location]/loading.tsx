import Image from "next/image"
export default function Loading() {
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className=" lg:m-8 lg:p-4 text-7xl text-zinc-700 font-bold">
          <div className="flex flex-row ">
            <div>
              Loading...
            </div>
            <div className="mt-4 ml-4">
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex lg:flex-row flex-col justify-center items-center">
        <div className="-m-14 lg:visible invisible">

        </div>
        <div className="text-center m-12 text-5xl lg:text-8xl font-bold lg:p-12 lg:m-12 lg:border-r-2 ">
          loading...
          <div className="text-2xl text-center lg:text-2xl">
            loading....
          </div>
        </div>

        <div className="flex flex-col">

          <div className="flex flex-col items-center justify-center text-center text-2xl text-blue-300 p-2 m-2 rounded-lg bg-black/35">
            <div>
              <Image src={'/wind.svg'} alt={'wind'} width={80} height={80} />
            </div>
            <div>
              Wind Speed -  loading...           </div>
          </div>


          <div className="flex flex-col items-center justify-center text-center text-2xl text-blue-300 p-2 m-2 rounded-lg bg-black/35">
            <div>
              <Image src={'/humidity.png'} alt={'wind'} width={80} height={80} />
            </div>
            <div>
              Humidity -  loading....           </div>
          </div>


          <div className="flex flex-col items-center justify-center text-center text-2xl text-blue-300 p-2 m-2 rounded-lg bg-black/35">
            <div>
              <Image src={'/clouds.png'} alt={'wind'} width={80} height={80} />
            </div>
            <div>
              loading....
            </div>
          </div>


        </div>

      </div>
      <div>
      </div>
    </div >
  )
}
