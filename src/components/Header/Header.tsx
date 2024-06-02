import image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
    <>
        <header className="full-container py-10">
            <nav className="space-x-5 flex justify-center">
                <Link href="/">
                    <p className="hover:bg-gray-400 rounded py-1 px-2">Home</p>
                </Link>
                {/* <Link href="/about">
                    <p className="hover:bg-gray-400 rounded py-1 px-2">About</p>
                </Link> */}
            </nav>
            <hr className="mt-4 opacity-20" />
        </header>
    </>
    )
}