import Contact from "../components/contactus";
import Header from "../components/header";
import { Inter } from "next/font/google";

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="contact scroll-smooth mt-20">
        <Contact />
      </main>
    </>
  );
}
