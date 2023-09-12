import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <nav
          className="mx-auto flex max-w-8xl items-center justify-between p-2.5 lg:px-8 backdrop-filter backdrop-blur-sm "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">FLAIR2K23</span>
              <img
                className="md:h-14 h-14  w-auto"
                src="/img/licet2.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open here</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-lg font-semibold leading-6">
              Home
            </Link>
            <Link href="/#events" className="text-lg font-semibold leading-6 ">
              Events
            </Link>
            <Link href="/#contact" className="text-lg font-semibold leading-6 ">
              Contact us
            </Link>
            <Link href="/faq" className="text-lg font-semibold leading-6 ">
              FAQ
            </Link>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#030014] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="-m-1.5 p-1.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/img/Logo v1.png" alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <RiCloseFill
                    className="h-6 w-6 text-zinc-50"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/#events"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Events
                    </Link>
                    <Link
                      href="/#contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/faq"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
