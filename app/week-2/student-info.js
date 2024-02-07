import Link from 'next/link';

export default function StudentInfo() { 
  return (
    <main className="flex main-h-screen flex-col items-centre justify-centre bg-black-100 p-10">
        <div className="shadow-lg border border-cyan-400 p-7 rounded-lg w-full bg-black">
            <p className="text-xl font-bold">Darak Ajmani</p>
            <p className="text-lg mt-1">
                GitHub:
                <Link href="https://github.com/Darak376" className="text-yellow-300">Darak376
                </Link>
            </p>
      
        </div>
    </main>
  );
}