import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GradualBlur from "./components/GradualBlur";
import SectionProgress from "./components/SectionProgress";
import Story from "./sections/Story";
import Philosophy from "./sections/Philosophy";
import Timeline from "./sections/Timeline";
import MusicShowcase from "./sections/MusicShowcase";
import StagePresence from "./sections/StagePresence";
import FanEngagement from "./sections/FanEngagement";
import Booking from "./sections/Booking";
import Footer from "./sections/Footer";
import { useSectionTracker } from "./hooks/useSectionTracker";
import { SECTION_COLORS } from "./sectionConfig";

export default function App() {
  const activeId = useSectionTracker();

  useEffect(() => {
    const shell = document.getElementById("app-shell");
    if (shell) {
      shell.style.backgroundColor = SECTION_COLORS[activeId] ?? "#0F1B3D";
    }
  }, [activeId]);

  return (
    <div id="app-shell">
      <Nav activeId={activeId} />
      <GradualBlur
        target="page"
        position="top"
        height="10rem"
        strength={3}
        divCount={8}
        curve="bezier"
        exponential={false}
        opacity={1}
        zIndex={100}
      />
      <SectionProgress activeId={activeId} />
      <div id="scroll-container">
        <Hero />
        <main>
          <Story />
          <Philosophy />
          <Timeline />
          <MusicShowcase />
          <StagePresence />
          <FanEngagement />
          <Booking />
        </main>
        <Footer />
      </div>
    </div>
  );
}
