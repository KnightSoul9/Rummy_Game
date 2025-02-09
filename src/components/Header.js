import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-customBeige via-customBeige to-customBeige text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/siteLogo.png" alt="Logo" width={120} height={60} />
      </div>
    </header>
  );
};

export default Header;
