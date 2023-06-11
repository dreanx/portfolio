import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-900">
      <ul className="flex justify-center items-center py-4 space-x-6">
        <li>
          <Link href="/">
            <span className="font-bold text-white cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/WebProjects">
            <span className="font-bold text-white cursor-pointer">Web Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/GameProjects">
            <span className="font-bold text-white cursor-pointer">Game Development</span>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <span className="font-bold text-white cursor-pointer">About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
