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
      <Contact />
    </main>
  );
}
