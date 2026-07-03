// All site content lives here so updates are data changes, not markup edits.

export interface Role {
	/** anchor id for in-page links */
	id?: string;
	company: string;
	title: string;
	location?: string;
	period: string;
	highlights: string[];
	/** Optional longer narrative shown in an expandable "Read more" disclosure. */
	details?: string[];
	/** Optional logo path under /public (e.g. "/logos/amazon.svg"). Renders when set. */
	logo?: string;
	/** Optional YouTube video ID — renders a responsive inline player. */
	video?: string;
	/** Optional caption shown beneath an embedded video. */
	videoCaption?: string;
	/** Optional product image path under /public — renders inline (collapsed). */
	image?: string;
	/** Optional caption shown beneath an inline image. */
	imageCaption?: string;
	/** Optional set of screenshots — renders as a small inline gallery (collapsed). */
	gallery?: { src: string; caption?: string }[];
}

export interface Project {
	name: string;
	period: string;
	blurb: string;
	tags: string[];
	/** Public repo URL. Renders a "View code" link when set. */
	href?: string;
	/** Link to an architecture diagram / write-up (e.g. repo README anchor). */
	diagram?: string;
	/** Screenshot path under /public (e.g. "/shots/ferry.png"). Renders when set. */
	shot?: string;
	/** 1–3 phone screenshots — renders a portrait gallery (takes priority over `shot`). */
	screens?: { src: string; caption?: string }[];
}

/**
 * Career "journey" strip — the surfaces I've shipped across, anchored by logo.
 * NOTE: the files in /public/logos are placeholder monograms. Drop in real
 * product/company logos (same filenames) to replace them.
 */
export const journey = [
	{ label: "Microsoft Office", logo: "/logos/microsoft.svg", target: "#role-microsoft" },
	{ label: "Bing", logo: "/logos/bing.svg", target: "#role-bing" },
	{ label: "Skype", logo: "/logos/skype.svg", target: "#role-skype" },
	{ label: "HoloLens", logo: "/logos/hololens.svg", target: "#role-skype" },
	{ label: "Alexa", logo: "/logos/alexa.svg", target: "#role-amazon-alexa" },
	{ label: "Amazon", logo: "/logos/amazon.svg", target: "#role-amazon-principal" },
];

/** Logo attributions. All public domain, sourced via Wikimedia Commons. */
export const imageCredits = [
	{ label: "Amazon logo", credit: "Amazon.com, Inc. / Koto", href: "https://commons.wikimedia.org/w/index.php?curid=151038672" },
	{ label: "Amazon Alexa logo", credit: "Amazon.com, Inc.", href: "https://commons.wikimedia.org/w/index.php?curid=69142563" },
	{ label: "Bing logo", credit: "Microsoft (SVG by Gage Skidmore)", href: "https://commons.wikimedia.org/w/index.php?curid=7019942" },
	{ label: "Skype logo", credit: "Skype / Microsoft", href: "https://commons.wikimedia.org/w/index.php?curid=48483739" },
	{ label: "Microsoft HoloLens logo", credit: "Microsoft", href: "https://commons.wikimedia.org/w/index.php?curid=77478467" },
	{ label: "Microsoft Office 2007 logo", credit: "Jayarathina", href: "https://commons.wikimedia.org/w/index.php?curid=36250168" },
];

export const profile = {
	name: "Brandon V. Taylor",
	role: "Engineering & product leader",
	blurb:
		"I turn complex platform problems into products that teams love to use — by bringing engineering, science, and product into one team.",
	location: "Seattle, WA",
	linkedin: "https://www.linkedin.com/in/brandontaylor",
	github: "https://github.com/rufbulldog",
	photo: "/me-avatar.webp",
	resumePdf: "/Brandon-Taylor-Resume.pdf",
};

export const education = [
	{
		school: "Oregon State University",
		degree: "B.S. Computer Science — minors in Business Administration & Chemistry",
		period: "",
		note: "",
	},
];

/** Testimonials — LinkedIn recommendations and peer / direct-report quotes. */
export const testimonials: {
	quote: string;
	name: string;
	title: string;
	href?: string;
}[] = [
	{
		quote:
			"I highly endorse Brandon as a manager. He is extremely passionate about delivering high quality products and understanding user needs. He clearly articulates the product vision to rally the team and drive the product to success. Brandon is a thinker, and is always willing to listen and consider other opinions. As a manager, he takes extra time with his reports to listen and coach them and provide invaluable insight.",
		name: "Jessica Glago",
		title: "Product Leader · former direct report at Microsoft",
		href: "https://www.linkedin.com/in/jessicaglago/",
	},
	{
		quote:
			"Brandon sets a high bar but creates a safe space for his teams to innovate and be creative in meeting that bar. He's successfully scaled his leadership across increased scope and additional teams by empowering his direct reports. Fun to be a member of his team and motivating to see the continued growth in his leadership.",
		name: "Direct report",
		title: "Amazon",
	},
	{
		quote:
			"Brandon creates a psychologically safe environment that encourages experimentation with ambitious ideas. He supported me in three experimental initiatives last year, fostering an atmosphere where I feel comfortable pursuing innovative approaches without fear of failure.",
		name: "Peer",
		title: "Amazon",
	},
	{
		quote:
			"Brandon exemplifies thoughtful leadership by providing timely, specific feedback that enables growth. When my promotion case needed work, he clearly articulated the gaps and provided concrete ideas to bridge them. He never left me uncertain about next steps, which built my confidence and accelerated my development.",
		name: "Direct report",
		title: "Amazon",
	},
	{
		quote:
			"Brandon excels at handling tricky cross-team situations with clarity and fairness. He provides direct feedback on shortcomings while also giving clarity when misalignment exists with other teams. I can rely on him to help distinguish between gaps and strengths, especially when prioritization is unclear.",
		name: "Peer",
		title: "Amazon",
	},
	{
		quote:
			"Brandon's ability to Think Big led to a major project I'm currently working on. What started as a simple question — 'Why not make use of our historical data?' — evolved into a significant initiative. His vision to look beyond the obvious and identify opportunities in existing assets demonstrates how thinking big can unlock meaningful innovation.",
		name: "Direct report",
		title: "Amazon",
	},
];

export const stats = [
	{ value: "25 yrs", label: "shipping products" },
	{ value: "$1.5B+", label: "annual revenue impact" },
	{ value: "18", label: "issued patents" },
	{ value: "30+", label: "person org led" },
];

export const about = [
	"I'm an engineering and product leader in Seattle. I run a 30+ person org at Amazon spanning engineering, applied science, and product — three platform charters that thousands of engineers build on daily. My teams own customer-facing performance (latency as a product), distributed tracing across a 90,000+ service graph, and AI-powered code migration that turns multi-year programs into automated workflows.",
	"Before Amazon: a decade at Microsoft shipping Skype, HoloLens, Bing Mobile, and Office — including stints in London and Zürich.",
	"What defines my leadership: I set a high bar while creating psychological safety for teams to experiment with ambitious ideas. I believe the best products come from empowered people who feel safe to take risks. I mentor across the org with a focus on underrepresented voices in engineering leadership. Outside work, I build and ship real apps with AI to stay close to the craft.",
];

/** "How I Lead" section — recurring themes from peer/direct-report feedback. */
export const leadership = [
	{
		title: "High bar, safe space.",
		body: "I believe the best work happens when people feel safe to take risks and are held to a high standard. These aren't in tension — they reinforce each other.",
	},
	{
		title: "Mechanisms over heroics.",
		body: "Monthly demos, learning days, structured mentorship. I build systems that make good outcomes repeatable rather than depending on individual brilliance.",
	},
	{
		title: "Pattern recognition across domains.",
		body: "I look for what worked in one area and apply it to challenges in another. The best solutions are often already proven somewhere — they just need someone to see the connection.",
	},
	{
		title: "Know when to say no.",
		body: "The hardest leadership skill is declining opportunities that don't align with strategy. I'd rather a team do three things exceptionally than seven things adequately.",
	},
];

export const experience: Role[] = [
	{
		company: "Amazon",
		id: "amazon-principal",
		logo: "/logos/amazon.svg",
		title: "Principal Manager — Product, Engineering & Science",
		location: "Seattle & Vancouver, BC",
		period: "2019 — Present",
		highlights: [
			"Lead a 30+ person, multi-discipline org — engineering managers and their teams, product, and an applied-science lead — across three central Amazon.com platform charters.",
			"Central Performance & Latency: cut amazon.com shopping latency ~40% (the fastest in years); the latency and quality work is estimated to drive $1.5B+ in annual revenue.",
			"Central Observability: stood up distributed tracing and analytics across a 90,000+ service graph.",
			"AI-Powered Code Migration: manage a team building custom AI that turns multi-year migration programs into automated, repeatable workflows.",
		],
		details: [
			"My org sits at the center of the amazon.com storefront — three platform charters that thousands of Amazon engineers build on every day. I run it as one multi-discipline team: engineering managers and their teams, a product function, and an applied-science lead, spanning Seattle and Vancouver, BC.",
			"On performance, we treated latency as a product: instrumenting the critical path, going after the slowest real customer experiences, and proving the revenue impact of every millisecond. That produced the fastest amazon.com shopping latency in years and a program estimated to drive $1.5B+ in annual revenue.",
			"On observability, we built distributed tracing and analytics across a 90,000+ service graph so teams could see, in one place, how a customer request actually flows through the system. And I manage a team applying custom AI to turn slow, manual migration programs into automated, repeatable workflows.",
			"I inherited this org with low morale and unclear direction: assessed the product portfolio, wrote a vision document that resonated with senior leadership, and rebuilt the culture from the ground up — zero attrition through the transition. Within six months, operational health scores went from 25% to 90% on one product line and 12% to 50% on another.",
			"On the people side: three promotions in one year, exceeded hiring targets, and restructured when performance gaps emerged — always pairing high standards with individualized growth plans.",
			"On strategy: when asked to evaluate a new business opportunity in package delivery latency, I delegated the analysis to my economist and TPM, collaborated with senior principal engineers across three orgs, and delivered a recommendation within one month — the most efficient senior-leadership document review in my nine years at the company. We recommended a strategic support role rather than full ownership, transitioned it cleanly, and kept the team focused on our core charter.",
			"When a partner team wanted to rush new workflows straight to production, I pushed back and helped them navigate it more deliberately instead, then gave extensive feedback ahead of their executive demo. They succeeded — a reminder that backbone and generosity aren't mutually exclusive.",
		],
	},
	{
		company: "Amazon",
		id: "amazon-stpm",
		logo: "/logos/amazon.svg",
		title: "Senior Technical Program Manager",
		period: "2017 — 2019",
		highlights: [
			"Owned a large-scale data-processing framework on AWS that kept worldwide HR systems running on up-to-date employee data.",
			"Built the framework behind two Alexa for Work skills, extending voice interactions company-wide into conference rooms and kitchens.",
		],
	},
	{
		company: "Amazon — Alexa Communications",
		id: "amazon-alexa",
		logo: "/logos/alexa.svg",
		title: "Senior Product Manager, Technical",
		period: "2016 — 2017",
		highlights: [
			"Product manager for the launch of calling and messaging on Alexa, including the Echo Show; delivered two pre-launch demos to Jeff Bezos.",
			"Shipped in-home family communications — “Alexa, make an announcement” and voice-message-to-SMS.",
		],
		details: [
			"I was a PM working on bringing voice and video calling and messaging to Alexa — the first communications experience on the platform — and for the launch of the Echo Show, Alexa's first device with a screen.",
		],
		image: "/shots/echo-show.svg",
		imageCaption: "Amazon Echo Show (1st gen) — the launch device for calling and messaging on Alexa.",
	},
	{
		company: "Skype · Microsoft",
		id: "skype",
		logo: "/logos/skype.svg",
		title: "Senior Product Manager Lead",
		location: "London, UK",
		period: "2013 — 2016",
		video: "AWLncecL2Wc",
		videoCaption:
			"Skype on HoloLens — an AR call connecting to the International Space Station.",
		highlights: [
			"Led the PM team owning strategy and roadmap for next-generation Skype messaging; built a web-based messaging experience hosted inside the native iOS and Android apps.",
			"Designed and launched Skype on HoloLens tablet companion app - AR video calls with drawing and photo insertion; flown to the International Space Station and used in orbit by astronaut Scott Kelly.",
		],
		details: [
			"I led the PM team setting strategy and roadmap for the next generation of Skype messaging, used by hundreds of millions of people. We built a web-based messaging experience that ran inside the native iOS and Android apps — a write-once approach that let us ship faster across surfaces.",
			"Designed and launched Skype on HoloLens tablet companion app - AR video calls where you would Skype call someone from a tablet to a remote person's space (wearing HoloLens) and point, draw, and drop in photos. HoloLens flew to the International Space Station and was used in orbit by astronaut Scott Kelly, with NASA Mission Control doing a Skype call and drawing so he could see inside the space station.",
		],
	},
	{
		company: "Bing Mobile · Microsoft",
		id: "bing",
		logo: "/logos/bing.svg",
		title: "Senior Product Manager Lead",
		period: "2010 — 2013",
		highlights: [
			"Doubled mobile MAU, migrated to a shared backend with Bing desktop, and cut deployment time from three months to daily.",
			"Designed and launched bSeattle, a Windows Phone restaurant-discovery app with ML dish summaries (4.5★ lifetime rating).",
		],
		details: [
			"I doubled mobile monthly active users while migrating mobile onto a shared backend with Bing desktop and compressing release cadence from quarterly to daily — a full CI/CD modernization.",
			"I was PM for the UI for a new Windows Phone app, bSeattle — a restaurant-discovery app with a hyperlocal focus: human-authored news feeds, ML-generated dish summaries, and panoramas of interiors. It held a 4.5-star lifetime rating.",
		],
		gallery: [
			{ src: "/shots/bseattle-buzz.svg", caption: "bSeattle — neighborhood buzz" },
			{ src: "/shots/bseattle-localfavs.svg", caption: "bSeattle — local favorites" },
		],
	},
	{
		company: "Microsoft — Office, SharePoint & Communicator",
		id: "microsoft",
		logo: "/logos/microsoft.svg",
		title: "Product Owner",
		location: "Zürich & Redmond",
		period: "2001 — 2010",
		highlights: [
			"Launched Communicator 2007 Attendant and shipped group video calling and delegation in Office Communicator 2007 (Zürich).",
			"Product owner for enterprise document management in Office 2007 and the server-side antivirus API for SharePoint.",
		],
	},
];

export const projects: Project[] = [
	{
		name: "Ferry Tracker",
		period: "2025",
		blurb:
			"Real-time tracker for Washington State Ferries on iOS, Android, and web. Live vessel positions, upcoming departures, and drive-up space availability, plus personalized “leave by” times from a trimmed-mean model over your own recorded crossings. Serverless AWS CDK backend on the WSDOT ferry APIs.",
		tags: ["React Native", "Expo", "TypeScript", "AWS CDK", "Lambda"],
		shot: "/shots/ferry.svg",
		screens: [
			{ src: "/shots/ferry-2.webp", caption: "Personalized ‘leave by’ time" },
			{ src: "/shots/ferry-1.webp", caption: "Live departures & capacity" },
		],
		href: "https://github.com/rufbulldog/ferry-tracker",
		diagram: "https://github.com/rufbulldog/ferry-tracker#system-architecture",
	},
	{
		name: "Family Retreat Booking",
		period: "2023 — Present",
		blurb:
			"Full-stack app where an extended family reserves days at a shared vacation home — with a booking-approval workflow, shared task tracking, local weather and tides, photo sharing, and an AI chat assistant. Built hands-on across the AWS stack (Cognito, Lambda, DynamoDB, API Gateway, SES, Bedrock, S3, CloudFront) behind a cross-platform React Native front end.",
		tags: ["React Native", "AWS", "Cognito", "Bedrock", "Serverless"],
		shot: "/shots/family-retreat.svg",
		screens: [
			{ src: "/shots/family-retreat-1.webp", caption: "Home — bookings, tasks, tides & weather" },
			{ src: "/shots/family-retreat-2.webp", caption: "Shared family photo feed" },
		],
	},
	{
		name: "Birthday App",
		period: "2025",
		blurb:
			"A custom cross-platform app built as a personal birthday gift — an animated card with ASCII art, confetti cannons, balloons, and interactive fireworks, bundled with a few homemade mini-games (basketball, Snake, and a Wordle clone).",
		tags: ["React Native", "Expo", "TypeScript"],
		shot: "/shots/birthday.svg",
		screens: [
			{ src: "/shots/birthday-1.webp", caption: "The animated birthday card" },
		],
	},
	{
		name: "Turntable Speed",
		period: "2025",
		blurb:
			"Point a phone camera at a spinning record and it measures the turntable's true speed and wow-and-flutter in real time — tracking the label's rotation frame-by-frame through an FFT and phase-correlation pipeline, no test record or strobe disc required. The signal-processing core is dependency-free and unit-tested.",
		tags: ["React Native", "Vision Camera", "Signal Processing", "TypeScript"],
		shot: "/shots/turntable.svg",
		screens: [
			{ src: "/shots/turntable-1.webp", caption: "Live RPM & wow-and-flutter" },
			{ src: "/shots/turntable-2.webp", caption: "Calibration result" },
		],
	},
];
