import Link from "next/link";
import React from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="logo">
                <Image alt="logo" src="/logo.png" width={128} height={77} />
            </div>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <Link href="/about" legacyBehavior><a >About</a></Link>
            <Link href="/ninjas" legacyBehavior><a >Ninja List</a></Link>
        </nav>
    );
}

export default NavBar;