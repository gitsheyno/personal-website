import LandingPage from "../components/LandingPage";
import "../app/globals.css";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import M from "@/components/M";
export default function Home() {
  return (
    <div>
      <M />
      <LandingPage />
      <Portfolio />
      <Contact />
    </div>
  );
}
