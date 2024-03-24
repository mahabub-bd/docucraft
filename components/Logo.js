import Image from "next/image";
import Link from "next/link";
import LogoImage from "../public/logo.svg";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image src={LogoImage} alt="Protocol" className="h-6 w-auto" />
      </Link>
    </div>
  );
}
