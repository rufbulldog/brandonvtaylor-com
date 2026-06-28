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
		"I build consumer products by bringing engineering, science, and product together.",
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
];

export const stats = [
	{ value: "25 yrs", label: "shipping products" },
	{ value: "$1.5B+", label: "annual revenue impact" },
	{ value: "18", label: "issued patents" },
	{ value: "30+", label: "person org led" },
];

export const about = [
	"I'm an engineering and product leader based in Seattle. At Amazon I lead a 30+ person organization spanning engineering, applied science, and product — owning customer-facing performance, observability across a 50,000+ service graph, and AI-driven code migration.",
	"Before Amazon I spent over a decade at Microsoft shipping consumer products people use every day — Skype, Skype on HoloLens, and Bing Mobile — including stints in London and Zurich.",
	"I care about empathetic leadership, growing engineers, and sponsoring women in engineering. These days I build and ship apps with AI as a way to stay close to the craft.",
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
			"Central Observability: stood up distributed tracing and analytics across a 50,000+ service graph.",
			"AI-Powered Code Migration: manage a team building custom AI that turns multi-year migration programs into automated, repeatable workflows.",
		],
		details: [
			"My org sits at the center of the amazon.com storefront — three platform charters that thousands of Amazon engineers build on every day. I run it as one multi-discipline team: engineering managers and their teams, a product function, and an applied-science lead, spanning Seattle and Vancouver, BC.",
			"On performance, we treated latency as a product: instrumenting the critical path, going after the slowest real customer experiences, and proving the revenue impact of every millisecond. That produced the fastest amazon.com shopping latency in years and a program estimated to drive $1.5B+ in annual revenue.",
			"On observability, we built distributed tracing and analytics across a 50,000+ service graph so teams could see, in one place, how a customer request actually flows through the system. And I manage a team applying custom AI to turn slow, manual migration programs into automated, repeatable workflows.",
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
			"Shipped two Alexa for Work skills deployed across conference rooms and kitchens.",
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
			"I was the PM for bringing voice and video calling and messaging to Alexa — the first communications experience on the platform — and for the launch of the Echo Show, Alexa's first device with a screen.",
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
			"Product owner for Skype on HoloLens — AR video calls with drawing and photo insertion; flown to the International Space Station and used in orbit by astronaut Scott Kelly.",
		],
		details: [
			"I led the PM team setting strategy and roadmap for the next generation of Skype messaging, used by hundreds of millions of people. We built a web-based messaging experience that ran inside the native iOS and Android apps — a write-once approach that let us ship faster across surfaces.",
			"I was also product owner for Skype on HoloLens: AR video calls where you could draw in a remote person's space and drop in photos. It flew to the International Space Station and was used in orbit by astronaut Scott Kelly.",
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
			"On the side I designed and launched bSeattle, a Windows Phone restaurant-discovery app with ML-generated dish summaries that held a 4.5-star lifetime rating.",
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
		location: "Zurich & Redmond",
		period: "2001 — 2010",
		highlights: [
			"Launched Communicator 2007 Attendant and shipped group video calling and delegation in Office Communicator 2007 (Zurich).",
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
