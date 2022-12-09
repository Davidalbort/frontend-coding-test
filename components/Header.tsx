import Link from "next/link"

export const Header = () => {
    return(
        <nav className="bg-white h-10 px-4 flex justify-between border-b shadow-sm sticky top-0 z-10">
            <Link
                href={'https://www.datasketch.co/'}
            >
            <span className="text-pink-500 text-2xl cursor-pointer">Datasketch</span>
            </Link>
            <Link
                href={'/'}
            >
            <span className="text-pink-500 text-2xl cursor-pointer">Home</span>
            </Link>
        </nav>
    )
}