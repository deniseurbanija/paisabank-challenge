import Link from "next/link";
import Logout from "/logout.svg";
import Home from "/Home.svg";
import HomeActive from "/HomeActive.svg";
import Document from "/Document.svg";
import DocumentActive from "/DocumentActive.svg";

interface BottomNavigationProps {
  active: "home" | "movimientos" | "send";
}

export function BottomNavigation({ active }: BottomNavigationProps) {
  return (
    <div className="flex justify-around items-center max-w-md py-3 px-4 border-t border-white/10 bg-white">
      <Link href="/home" className="flex flex-col items-center">
        {active === "home" ? <HomeActive /> : <Home />}
      </Link>

      <Link href="/movimientos" className="flex flex-col items-center">
        {active === "movimientos" ? <DocumentActive /> : <Document />}
      </Link>

      <Link href="/" className="flex flex-col items-center">
        <Logout />
      </Link>
    </div>
  );
}
