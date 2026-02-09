import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo"><Link href="/"><Image 
        src="/untad.svg" 
        alt="Logo untad" width={60} height={60} priority
        /></Link></div>
        
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/Posts">Posts</Link>
          <Link href="/about">About</Link>
        </div>
        <ThemeSwitcher/>
      </nav>

      </header>
  );
}

export default Header