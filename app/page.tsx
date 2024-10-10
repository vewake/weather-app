import SearchPage from "@/ui/components/searchpage";
import TopBar from "@/ui/components/topbar";
export default async function Home() {
  return (
    <div>
      <div >
        <TopBar />
      </div>
      <div className=" h-screen w-full flex flex-col items-center justify-center border-2 border-black/10">

        <div className="rounded-lg bg-gradient-to-t from-black/15 to-white/15 backdrop-blur-[100px]">
          <div className="mt-4 text-center text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-cyan-400">
            Weather App
          </div >
          <div className="p-8">
            <SearchPage />
          </div>
        </div>
      </div>
    </div >
  );
}
