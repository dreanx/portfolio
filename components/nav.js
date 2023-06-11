import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto py-4 text-center">
        <div className="flex justify-around ">
          <div>
            <Link href="/">
              <span className="font-bangers text-white text-2xl">Logo</span>
            </Link>
          </div>
          {/*DK : more space between menu items */}
          <ul className="flex space-x-4 items-center lg:space-x-16">
            <li>
              <Link href="/WebProjects">
                <span className="text-white hover:text-gray-300">Web Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/GameProjects">
                <span className="text-white hover:text-gray-300">Game Development</span>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <span className="text-white hover:text-gray-300">About</span>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <span className="text-white hover:text-gray-300">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
