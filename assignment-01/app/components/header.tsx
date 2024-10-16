import Link from "next/link"
export default function Header () {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
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