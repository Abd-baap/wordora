import Link from "next/link";

export default function Footer() {
    return (
      <div className="footer my-8 w-screen flex bg-purple-50 flex-col gap-6 p-2 bottom-0 py-3 shadow hover:shadow-xl rounded-md justify-center items-center text-center">
        <h1 className="text-xl font-bold">Start Reading</h1>
        <p>If You Want to Let us Know What We Didn&#39t, We Will Be Grateful</p>
        <div className="flex sm:flex-row flex-col gap-2 sm:justify-around w-[100%] text-left  items-center">
          <div className="flex contacts flex-col justify-center items-center">
            <h1 className="font-bold">Contacts</h1>
            <span>
              <Link href="https://www.youtube.com/@DesiEdilances">Youtube</Link>
            </span>
            <span>
              <Link href="https://www.instagram.com/desi_edilances?igsh=eG93azQ0ZH1bTcy">Instagram</Link>
            </span>
            <span>Gmail id: abhigya.abd@gmail.com</span>
          </div>
          <div className="Pages flex flex-col justify-center items-center">
            <h1 className="font-bold">Pages</h1>
            <span>
              <Link href="/">Home</Link>
            </span>
            <span>
              <Link href="/About">About Us</Link>
            </span>
            <span>
              <Link href="/Support">Support Us</Link>
            </span>
          </div>
        </div>
        <p className="flex gap-1">© 2025 Start Reading. All Rights Reserved</p>
      </div>
    );
  }