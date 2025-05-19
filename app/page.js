import Link from "next/link";
import Features from "./components/features";
import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import OtherTools from "./components/othertools";
import Users from "./components/user";
import Whatiswordora from "./components/whatiswordora";
import Footer from "./components/footer";

export default function Page() {
  
  return (
    <main className="min-h-screen flex items        -center  flex-col">
      
      <Herosection/>
      <Whatiswordora/>
      <Features/>
      <Users/>
      <OtherTools/>
      <div className="flex flex-col gap-5 p-12 justify-center items-center shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-purple-600">
              Start Reading!
            </h2>
            <Link href="/">
              <button
                type="button"
                className=" w-[100%]  focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2"
              >
                Start Now!
              </button>
            </Link>
          </div>
  </main>
    );
}
