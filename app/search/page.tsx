// import Homepage from "@/ui/homepage";

import { redirect } from "next/navigation";

// import { headers } from 'next/headers'
export default function Home() {
  redirect('/')
  // const header = headers()
  // const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  // return (
  //   <div>
  //     <div className="h-screen w-full flex flex-col items-center justify-center border-2 border-black">
  //
  //       <div className="rounded-lg bg-gradient-to-t from-black/15 to-white/15 backdrop-blur-[100px]">
  //         <div className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-cyan-400">
  //           Weather App
  //         </div>
  //         <div className="p-8">
  //           <Homepage />
  //         </div>
  //       </div>
  //     </div>
  //   </div >
  // );
}
