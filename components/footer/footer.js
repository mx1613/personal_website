import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="absolute w-screen rounded-t-lg bg-slate-800 py-4 flex flex-row justify-between bottom-0">
            <div className="right-0 px-4">
                &copy; {new Date().getFullYear()} Copyright Michele Xiloyannis
            </div>
            <div className="px-4 flex gap-2">
                <Image src="/icons/github-logo.svg" width={30} height={30} />
                <Link href="https://github.com/mx1613/michele.info">
                    Source Code
                </Link>
            </div>
        </footer>
    )
}