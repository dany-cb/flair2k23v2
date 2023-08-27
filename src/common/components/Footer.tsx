import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black rounded-lg shadow dark:bg-neededcolor-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flair2k23.vercel.app/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src={"/img/Logo v1.png"}
              width={90}
              height={100}
              className="h-8 mr-3"
              alt="Flair2K23 Logo"
            />
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©
          <a href="https://flowbite.com/" className="hover:underline">
            Flair2K23
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
