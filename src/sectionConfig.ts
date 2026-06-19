export type SectionMeta = {
  id: string;
  label: string;
  number: number;
  color: string;
  blobColor: string;
  blobPos: { top?: string; bottom?: string; left?: string; right?: string };
  ghostText: string;
};

export const SECTIONS: SectionMeta[] = [
  {
    id: "hero",
    label: "Home",
    number: 1,
    color: "#0F1935",
    blobColor: "rgba(0,210,190,0.28)",
    blobPos: { bottom: "-120px", left: "50%" },
    ghostText: "OUR STORY",
  },
  {
    id: "story",
    label: "Story",
    number: 2,
    color: "#D94F4F",
    blobColor: "rgba(255,240,180,0.22)",
    blobPos: { top: "5%", left: "-80px" },
    ghostText: "THREE PILLARS",
  },
  {
    id: "philosophy",
    label: "Sound",
    number: 3,
    color: "#D9A23B",
    blobColor: "rgba(255,255,220,0.18)",
    blobPos: { bottom: "5%", right: "-60px" },
    ghostText: "HOW WE GOT HERE",
  },
  {
    id: "timeline",
    label: "Timeline",
    number: 4,
    color: "#1F6F5C",
    blobColor: "rgba(200,255,230,0.18)",
    blobPos: { top: "25%", left: "-80px" },
    ghostText: "OUR MUSIC",
  },
  {
    id: "music-showcase",
    label: "Music",
    number: 5,
    color: "#D94F4F",
    blobColor: "rgba(255,210,160,0.2)",
    blobPos: { bottom: "15%", right: "-60px" },
    ghostText: "LIVE SHOWS",
  },
  {
    id: "stage",
    label: "Stage",
    number: 6,
    color: "#1F6F5C",
    blobColor: "rgba(180,255,220,0.15)",
    blobPos: { top: "20%", right: "-80px" },
    ghostText: "THE COMMUNITY",
  },
  {
    id: "fans",
    label: "Community",
    number: 7,
    color: "#D9A23B",
    blobColor: "rgba(255,240,160,0.2)",
    blobPos: { bottom: "10%", left: "-60px" },
    ghostText: "BOOK US",
  },
  {
    id: "contact",
    label: "Book",
    number: 8,
    color: "#0F1B3D",
    blobColor: "rgba(180,200,255,0.18)",
    blobPos: { top: "15%", right: "-80px" },
    ghostText: "",
  },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export const SECTION_COLORS: Record<string, string> = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s.color])
);
