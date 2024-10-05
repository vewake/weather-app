import SearchPage from "@/ui/components/searchpage";
import TopBar from "@/ui/components/topbar";
// import { headers } from 'next/headers'
export default function Home() {
  // const header = headers()
  // const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          akdfsj
        </div>
        <div>
          heleh
        </div>
      </div>
      <div >
        <TopBar />
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-center border-2 border-black/10">

        <div className="rounded-lg bg-gradient-to-t from-black/15 to-white/15 backdrop-blur-[100px]">
          <div className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-cyan-400">
            Weather App
          </div >
          <SearchPage />
        </div>
      </div>
    </div >
  );
}
