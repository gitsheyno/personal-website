import LandingPage from "../components/LandingPage";
import "../app/globals.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import HomeHeader from "@/components/Header";
import M from "@/components/M";
export default function Home() {
  return (
    <div>
      <M />
      <LandingPage />
      {/* <Experience /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </div>
  );
}
