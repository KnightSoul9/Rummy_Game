import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-customBeige to-customBeige shadow-md py-3 px-6">
      <div className="container mx-auto flex justify-center">
        <Link href="/">
          <Image 
            src="/siteLogo.png" 
            alt="Logo" 
            width={160} 
            height={80} 
            className="h-auto w-auto"
            priority 
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
