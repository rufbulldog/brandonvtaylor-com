// Persona "views" of the site. The chooser (/) sends each visitor to the view
// closest to their own work; each view re-frames the same facts in resume.ts.
// Copy that only one view needs lives here, so content updates stay data changes.

export type ViewId = "product" | "engineering" | "science" | "management";

export const views: {
  id: ViewId;
  label: string;
  href: string;
  /** Chooser card: short pitch line + call to action. */
  headline: string;
  pitch: string;
  cta: string;
}[] = [
  {
    id: "product",
    label: "Product",
    href: "/product",
    headline: "I build things people use.",
    pitch:
      "Launches, case studies and the design calls behind Alexa calling, Skype on HoloLens and bSeattle.",
    cta: "View as a PM →",
  },
  {
    id: "engineering",
    label: "Engineering",
    href: "/engineering",
    headline: "Still ships code. Weekly.",
    pitch:
      "Repos, architecture and stacks: React Native, AWS CDK, Bedrock, FFT pipelines.",
    cta: "./enter --engineering_",
  },
  {
    id: "science",
    label: "Science",
    href: "/science",
    headline: "Measure it, then make it better.",
    pitch:
      "AI evaluation with LLM-as-a-judge, latency as a causal lever, and signal processing for fun.",
    cta: "Read the abstract →",
  },
  {
    id: "management",
    label: "Management",
    href: "/management",
    headline: "High bar, safe space.",
    pitch:
      "A 30+ person org across engineering, product and science, and what the people in it say.",
    cta: "See how I lead →",
  },
];

/** Product view — outcome-led case studies (Problem → Bet → Outcome). */
export const caseStudies: {
  title: string;
  meta: string;
  problem: string;
  bet: string;
  outcome: string;
  /** Optional YouTube id embedded above the case study. */
  video?: string;
  videoTitle?: string;
  /** Optional big-number treatment instead of the three columns. */
  figures?: { value: string; label: string }[];
}[] = [
  {
    title: "Giving Alexa a voice to call home",
    meta: "Amazon Alexa Communications · Sr. PM, Technical · 2016—17",
    problem:
      "Alexa could answer questions but couldn't connect people. Echo Show was about to add a screen.",
    bet: "Make calling and messaging native to voice, then to video on Echo Show, plus “Alexa, make an announcement” for the whole house.",
    outcome:
      "Launched as Alexa's first communications experience. Two pre-launch demos to Jeff Bezos.",
  },
  {
    title: "A Skype call into orbit",
    meta: "Skype · Microsoft, London · Sr. PM Lead · 2013—16",
    problem:
      "Remote help means “describe what you see.” Pointing at things is impossible over video.",
    bet: "A tablet companion that lets the helper draw and drop photos into the HoloLens wearer's real space.",
    outcome:
      "Flown to the ISS and used in orbit by astronaut Scott Kelly. Next-gen Skype messaging also shipped to hundreds of millions of people.",
    video: "AWLncecL2Wc",
    videoTitle:
      "Skype on HoloLens — an AR call connecting to the International Space Station",
  },
  {
    title: "Hyperlocal before it had a name",
    meta: "Bing Mobile · Microsoft · Sr. PM Lead · 2010—13",
    problem:
      "Restaurant search was a list of stars. Nobody could tell you what to order.",
    bet: "bSeattle: human-written neighborhood buzz, ML dish summaries and interior panoramas.",
    outcome:
      "4.5★ lifetime rating. Across Bing Mobile: 2× MAU and releases went from quarterly to daily.",
  },
  {
    title: "Treating speed as a product",
    meta: "Amazon · Principal Manager · 2019—now",
    problem: "",
    bet: "Latency got a roadmap, a customer and a P&L. We went after the slowest real experiences first and proved what each millisecond was worth.",
    outcome: "",
    figures: [
      { value: "~40%", label: "faster amazon.com shopping" },
      { value: "$1.5B+", label: "estimated annual revenue" },
    ],
  },
];

/** Science view — paper sections. Paragraphs may contain <em>/<strong>. */
export const paper = {
  title:
    "Measure It, Then Make It Better: Evaluation, Latency and Signals in Production Systems",
  affiliation:
    "Amazon, Seattle WA & Vancouver BC · B.S. Computer Science (minor in Chemistry), Oregon State University",
  abstract:
    "I lead a multi-discipline org of engineers, product managers and a growing applied-science team responsible for central amazon.com platforms. This page summarizes four lines of work: (i) an <em>AI evaluation platform</em> that combines deterministic validators with LLM-as-a-judge scoring so teams can baseline and compare agents; (ii) treating <em>latency as a causal lever</em> on revenue, yielding a ~40% reduction in shopping latency and an estimated $1.5B+ in annual revenue; (iii) distributed tracing over a 90,000+ service graph; and (iv) small, honest models in personal projects, from FFT-based turntable metrology to trimmed-mean travel-time estimates.",
  keywords:
    "LLM evaluation · causal impact · performance engineering · observability · signal processing",
};

/** Management view — the memo's numbered sections (HTML allowed). */
export const memo: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "The turnaround",
    paragraphs: [
      "I inherited this org with low morale and unclear direction. I assessed the product portfolio, wrote a vision document that resonated with senior leadership, and rebuilt the culture from the ground up, with <strong>zero attrition</strong> through the transition.",
    ],
  },
  {
    heading: "People",
    paragraphs: [
      "Three promotions in one year. Hiring targets exceeded. When performance gaps emerged I restructured, always pairing high standards with individual growth plans. I mentor across the org, with a focus on underrepresented voices in engineering leadership.",
    ],
  },
  {
    heading: "Judgment",
    paragraphs: [
      "Asked to evaluate a new business in package-delivery latency, I delegated the analysis to my economist and TPM, worked with senior principal engineers across three orgs, and delivered a recommendation in a month: the most efficient senior-leadership document review in my nine years at the company. We recommended a support role rather than ownership, handed it off cleanly, and kept the team on its core charter.",
      "When a partner team wanted to rush new workflows to production, I pushed back, helped them move more deliberately, and gave detailed feedback before their executive demo. They succeeded. Backbone and generosity aren't mutually exclusive.",
    ],
  },
  {
    heading: "What the team delivered",
    paragraphs: [
      "amazon.com shopping latency down ~40%, an estimated <strong>$1.5B+</strong> in annual revenue. GenAI engineering standards across the software lifecycle. An AI evaluation platform internal teams use to compare their agents.",
    ],
  },
  {
    heading: "Before Amazon",
    paragraphs: [
      "A decade at Microsoft leading PM teams: Skype messaging and HoloLens in London, Bing Mobile in Redmond (2× MAU, quarterly to daily releases), and Office in Zürich and Redmond.",
    ],
  },
];

export const turnaround = [
  { label: "Operational health, product line A", value: "25% → 90%" },
  { label: "Operational health, product line B", value: "12% → 50%" },
];
