import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import EventList from "../components/EventList";
import Contact from "../components/contactus";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <EventList />
      {/* <div class="mx-20 relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-800"></div>
      </div> */}
      <Contact />
    </main>
  );
}
