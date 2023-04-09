import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-gray-400 fixed top-0 w-full flex p-7 items-center justify-between">
            <div className="bg-gray-300 p-2 rounded">
                <Link href="/">EnesDmc</Link>
            </div>
            <nav className="bg-gray-300 p-2 rounded flex gap-5">
                <Link href="/login">Login</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
