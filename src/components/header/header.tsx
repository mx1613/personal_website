import Link from 'next/link';
import Image from 'next/image';
import clsx from "clsx";

interface HeaderProps {
    isDarkMode?: boolean;
}
  

export function Header({ isDarkMode = false }: HeaderProps) {
    return (
        <div className={clsx("absolute w-32 py-4 rounded-bl-lg", {"bg-slate-800":isDarkMode, "bg-slate-900":!isDarkMode}, "flex justify-between top-0 right-0 shadow-lg")}>
            <div className="px-4  gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://scholar.google.com/citations?user=e8gAwugAAAAJ&hl=en">
                    <Image src="/icons/scholar.svg" alt="Scholar icon" width={30} height={30} />
                </Link>
            </div>
            <div className="px-4 flex gap-2" style={{ cursor: 'pointer' }}>
                <Link href="https://www.linkedin.com/in/michelexiloyannis/" passHref>
                    <Image src="/icons/linkedin.svg" alt="Linkedin icon" width={30} height={30} />
                </Link>
            </div>

        </div>
    )
}