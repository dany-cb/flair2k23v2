import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import EventList from "../components/EventList";

export default function Home() {
  return (
    <main className="scroll-smooth flex-col justify-center">
      <Header />
      <Hero />
      <EventList />
    </main>
  );
}
