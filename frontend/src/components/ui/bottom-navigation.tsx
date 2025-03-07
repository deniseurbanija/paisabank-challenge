import Link from "next/link";
import Image from "next/image";

interface BottomNavigationProps {
  active: "home" | "movimientos" | "send";
}

export function BottomNavigation({ active }: BottomNavigationProps) {
  return (
    <div className="flex justify-around items-center max-w-md py-3 px-4 border-t border-white/10 bg-white">
      <Link href="/home" className="flex flex-col items-center">
        <Image
          src={active === "home" ? "/HomeActive.svg" : "/Home.svg"}
          alt="Home"
          width={24}
          height={24}
        />
      </Link>

      <Link href="/movimientos" className="flex flex-col items-center">
        <Image
          src={
            active === "movimientos" ? "/DocumentActive.svg" : "/Document.svg"
          }
          alt="Movements"
          width={24}
          height={24}
        />
      </Link>

      <Link href="/" className="flex flex-col items-center">
        <Image src="/logout.svg" alt="Logout" width={24} height={24} />
      </Link>
    </div>
  );
}
