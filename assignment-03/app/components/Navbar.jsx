import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full text-white z-10 bg-slate-900 bg-opacity-50">
      <div className="max-w-7xl mx-auto flex flex-col w-full px-4">
        <div className="flex justify-start items-center h-10">
          <ul className="flex space-x-4">
            <li><Link href="#">Download our app</Link></li>
          </ul>
        </div>
        <hr className="border-t border-gray-600" />
        <div className="flex items-center justify-between h-16">
          <Link href="/"><img src="/logo.png" alt="Logo" className="h-14 mr-4" /></Link>
          <ul className="flex-1 flex justify-between items-center space-x-4">
            <li><Link href="#" className="hover:underline">Home</Link></li>
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Services</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
            <li><button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Post an ad</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
