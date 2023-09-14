import Header from "../components/header";
import Hero from "../components/hero";
import EventList from "../components/EventList";
import Contact from "../components/contactus";
import Sponsers from "@/components/Sponsers";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <EventList />
      <Sponsers />
      <Contact />
    </main>
  );
}
