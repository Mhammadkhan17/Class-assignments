import Link from "next/link"
export default function Navbar () {
  return (
    <header className="sm:flex justify-between bg-slate-800 text-white shadow-lg w-svw">
      <div className="sm:text-3xl pt-3">Assignment-05</div>
        <div className="flex justify-between h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <nav className="md flex space-x-10 items-center p-5">
            <Link href='./'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/products'>Products</Link>
            </nav>
        </div>
        </div>
        </header>
  )
}