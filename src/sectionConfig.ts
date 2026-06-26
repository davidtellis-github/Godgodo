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
    color: "#FBE4D8",
    blobColor: "rgba(133,79,140,0.15)",
    blobPos: { bottom: "-120px", left: "50%" },
    ghostText: "OUR STORY",
  },
  {
    id: "story",
    label: "Story",
    number: 2,
    color: "#DFB6B2",
    blobColor: "rgba(133,79,140,0.2)",
    blobPos: { top: "5%", left: "-80px" },
    ghostText: "THREE PILLARS",
  },
  {
    id: "philosophy",
    label: "Sound",
    number: 3,
    color: "#854F8C",
    blobColor: "rgba(223,182,178,0.3)",
    blobPos: { bottom: "5%", right: "-60px" },
    ghostText: "HOW WE GOT HERE",
  },
  {
    id: "timeline",
    label: "Timeline",
    number: 4,
    color: "#522B5B",
    blobColor: "rgba(133,79,140,0.35)",
    blobPos: { top: "25%", left: "-80px" },
    ghostText: "OUR MUSIC",
  },
  {
    id: "music-showcase",
    label: "Music",
    number: 5,
    color: "#522B5B",
    blobColor: "rgba(82,43,91,0.4)",
    blobPos: { bottom: "15%", right: "-60px" },
    ghostText: "LIVE SHOWS",
  },
  {
    id: "stage",
    label: "Stage",
    number: 6,
    color: "#2B124C",
    blobColor: "rgba(43,18,76,0.5)",
    blobPos: { top: "20%", right: "-80px" },
    ghostText: "THE COMMUNITY",
  },
  {
    id: "fans",
    label: "Community",
    number: 7,
    color: "#2B124C",
    blobColor: "rgba(43,18,76,0.5)",
    blobPos: { bottom: "10%", left: "-60px" },
    ghostText: "BOOK US",
  },
  {
    id: "contact",
    label: "Book",
    number: 8,
    color: "#190019",
    blobColor: "rgba(43,18,76,0.5)",
    blobPos: { top: "15%", right: "-80px" },
    ghostText: "",
  },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export const SECTION_COLORS: Record<string, string> = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s.color])
);
