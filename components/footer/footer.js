import Link from 'next/link';

export function Footer({ isDarkMode }) {

    return (
        <footer className={`absolute w-screen rounded-t-lg ${isDarkMode ? "bg-slate-900" : "bg-slate-800 "}  text-slate-300 py-4 flex flex-row justify-between bottom-0 shadow-lg`}>
            <div className="right-0 px-4">
                <p className='md:text-sm '>&copy; {new Date().getFullYear()} Michele Xiloyannis</p>
            </div>
            <div className=" px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://github.com/mx1613/michele.info">
                    <p className='md:text-sm '>Page src code</p>
                </Link>
            </div>
        </footer>
    )
}