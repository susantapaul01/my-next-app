import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex space-x-6 mb-6">
            <div className="bg-indigo-500 px-4 py-2 text-white"><Link href="/">Home</Link></div>
            <div className="bg-indigo-500 px-4 py-2 text-white"><Link href="/blog">Blog</Link></div>
            <div className="bg-indigo-500 px-4 py-2 text-white"><Link href="/deshboard">Deshboard</Link></div>
        </nav>
    )
}