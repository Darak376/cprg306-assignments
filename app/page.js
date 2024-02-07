import Link from "next/link";


export default function HomePage() {
  return (
      <main className="flex main-h-screen flex-col items-centre justify-centre bg-orange-500 p-10">
         
              <h1 className="text-4xl font-mono font-bold text-black mb-5">CPRG 306: Web Development-2 Assignments</h1>
              <Link href="/week-2" className="bg-cyan-900 text-black font-bold py-5 px-7 text-yellow-300 transition duration-200">
                  Week2
              </Link>
              <Link href="/week-3" className="bg-cyan-900 text-black font-bold py-5 px-7 text-yellow-300 transition duration-200">
                  Week3
              </Link>
      </main>
    );}