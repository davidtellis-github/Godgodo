import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
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
import { SECTIONS, SECTION_COLORS } from "./sectionConfig";

export default function App() {
  const activeId = useSectionTracker();

  // Update app-shell background and stamp --section-color on every section element
  useEffect(() => {
    const shell = document.getElementById("app-shell");
    if (shell) {
      shell.style.backgroundColor = SECTION_COLORS[activeId] ?? "#FBE4D8";
    }

    // Give each section its own color so the ::after bottom-fade matches
    SECTIONS.forEach(({ id, color }) => {
      const el = document.getElementById(id);
      if (el) el.style.setProperty("--section-color", color);
    });
  }, [activeId]);

  return (
    <div id="app-shell">
      <Nav activeId={activeId} />
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
