export type ResearchSection = {
  heading: string;
  paragraphs: string[];
};

export type ResearchWork = {
  slug: string;
  route: string;
  year: string;
  type: string;
  title: string;
  authors: string;
  venue: string;
  summary: string;
  topics: string[];
  readingLabel: string;
  sourceLabel: string;
  sourceUrl: string;
  citation: string;
  sections: ResearchSection[];
  specializedReader?: boolean;
};

export const researchWorks: ResearchWork[] = [
  {
    slug: "inference-orchestration-tax",
    route: "/research/inference-orchestration-tax",
    year: "2026",
    type: "Systems architecture paper",
    title: "Eliminating Software Orchestration Tax in Modern Large Language Model Inference",
    authors: "Drake Stapleton · AIEN Sovereign Systems",
    venue: "Independent systems research",
    summary:
      "An architectural study of compiled inference control planes, paged KV cache management, continuous batching, and measured execution on NVIDIA Grace Blackwell GB10.",
    topics: ["LLM inference", "Rust", "Mojo", "KV cache", "Grace Blackwell"],
    readingLabel: "Full paper on site",
    sourceLabel: "View implementation source on GitHub",
    sourceUrl: "https://github.com/dhgmonkey/aien-sovereign-core",
    citation:
      "Stapleton, Drake. “Eliminating Software Orchestration Tax in Modern Large Language Model Inference.” AIEN Sovereign Systems, 2026.",
    sections: [],
    specializedReader: true,
  },
  {
    slug: "ionic-liquid-thesis",
    route: "/research/ionic-liquid-thesis",
    year: "2018",
    type: "Master of Science thesis",
    title:
      "Imidazolium Ionic Liquids as Multifunctional Solvents, Ligands, and Reducing Agents for Noble Metal Deposition onto Well-Defined Heterostructures and the Effect of Synthetic History on Catalytic Performance",
    authors: "Michael Drake Ballentine",
    venue: "Western Kentucky University · Department of Chemistry",
    summary:
      "Graduate materials-chemistry research on platinum deposition onto CdSe@CdS nanorods using an imidazolium ionic liquid, with catalytic performance tied back to particle topology and synthetic history.",
    topics: ["Nanomaterials", "Ionic liquids", "Photocatalysis", "CdSe@CdS", "Platinum"],
    readingLabel: "On-site research reader",
    sourceLabel: "Open the archived thesis at WKU",
    sourceUrl: "https://digitalcommons.wku.edu/theses/2101/",
    citation:
      "Ballentine, Michael Drake. “Imidazolium Ionic Liquids as Multifunctional Solvents, Ligands, and Reducing Agents for Noble Metal Deposition onto Well-Defined Heterostructures and the Effect of Synthetic History on Catalytic Performance.” M.S. thesis, Western Kentucky University, 2018.",
    sections: [
      {
        heading: "Research question",
        paragraphs: [
          "The thesis investigated whether 1-butyl-3-methylimidazolium bis(trifluoromethylsulfonyl)imide, [BMIM]Tf2N, could serve several roles in one nanomaterials synthesis system: reaction medium, surface ligand, and reducing environment for noble-metal deposition.",
          "The experimental platform used well-defined CdSe@CdS dot-in-rod semiconductor heterostructures. Platinum deposition routes were compared across thermal and photochemical conditions so particle placement, rod morphology, and catalytic behavior could be connected to synthetic history.",
        ],
      },
      {
        heading: "Experimental program",
        paragraphs: [
          "Thermal platinum deposition used Pt(acac)2 and compared the ionic-liquid route with a conventional polyol-style organic system. Photochemical deposition at room temperature compared the ionic-liquid system with a toluene dispersion.",
          "Transmission electron microscopy was used to evaluate metal-particle placement and nanorod morphology. Photocatalytic methylene-blue degradation then connected material structure to catalytic performance.",
        ],
      },
      {
        heading: "What the work established",
        paragraphs: [
          "The ionic-liquid route produced distinct platinum-decorated CdSe@CdS structures and showed a catalytic-performance advantage in the tested dye-degradation system. The broader contribution was a synthesis strategy in which the reaction medium actively participates in nanomaterial formation instead of acting as an inert carrier.",
          "This work became the foundation for the peer-reviewed 2019 paper listed in this archive.",
        ],
      },
    ],
  },
  {
    slug: "metal-particles-semiconductor-nanorods",
    route: "/research/metal-particles-semiconductor-nanorods",
    year: "2019",
    type: "Peer-reviewed journal article",
    title: "Deposition of metal particles onto semiconductor nanorods using an ionic liquid",
    authors: "Michael D. Ballentine · Elizabeth G. Embry · Marco A. Garcia · Lawrence J. Hill",
    venue: "Beilstein Journal of Nanotechnology · 10:718–724",
    summary:
      "A peer-reviewed study testing ionic-liquid deposition of platinum, gold, and silver nanoparticles onto CdSe@CdS nanorods and evaluating the resulting photocatalytic behavior.",
    topics: ["Nanorods", "Catalysis", "Ionic liquids", "Platinum", "Materials chemistry"],
    readingLabel: "On-site research reader",
    sourceLabel: "Open the peer-reviewed article",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6423590/",
    citation:
      "Ballentine, Michael D., Elizabeth G. Embry, Marco A. Garcia, and Lawrence J. Hill. “Deposition of metal particles onto semiconductor nanorods using an ionic liquid.” Beilstein Journal of Nanotechnology 10 (2019): 718–724. DOI: 10.3762/bjnano.10.71.",
    sections: [
      {
        heading: "Study",
        paragraphs: [
          "The paper tested ionic-liquid deposition of metal nanoparticles onto existing semiconductor nanorods and asked how the synthesis route changed catalytic performance.",
          "Platinum, gold, and silver particles were deposited onto CdSe@CdS core-shell nanorods from metal salts in [BMIM]Tf2N. The resulting heterostructures were characterized and compared with materials prepared through organic-solvent routes.",
        ],
      },
      {
        heading: "Catalytic evaluation",
        paragraphs: [
          "Photocatalytic dye-degradation experiments compared the activity of the synthesized structures. Platinum-decorated nanorods prepared in the ionic-liquid system showed stronger performance than the comparison materials in the reported experiments.",
          "Electron microscopy also showed that the deposited metal particles remained associated with the semiconductor nanorods through transfer into organic media, supporting the practical value of the synthetic route.",
        ],
      },
      {
        heading: "Contribution",
        paragraphs: [
          "The work demonstrated a direct route for preparing metal-semiconductor heterostructures from metal salts and an ionic liquid while preserving defined nanorod structures. It also linked synthesis history, particle topology, and catalytic response in one experimental program.",
          "The article is open access, and the canonical full text remains available from PubMed Central through the source link above.",
        ],
      },
    ],
  },
];

export function getResearchWork(slug: string | undefined) {
  return researchWorks.find((work) => work.slug === slug);
}
