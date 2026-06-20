// All site content lives here so updates are data changes, not markup edits.

export interface Role {
	company: string;
	title: string;
	location?: string;
	period: string;
	highlights: string[];
}

export interface Project {
	name: string;
	period: string;
	blurb: string;
	tags: string[];
	href?: string;
}

export const profile = {
	name: "Brandon V. Taylor",
	role: "Engineering & product leader",
	blurb:
		"I build consumer products by bringing engineering, science, and product together.",
	location: "Seattle, WA",
	email: "brtaylorapps@gmail.com",
	linkedin: "https://www.linkedin.com/in/brandontaylor",
};

export const stats = [
	{ value: "20+ yrs", label: "shipping products" },
	{ value: "$1.5B+", label: "annual revenue impact" },
	{ value: "18", label: "issued patents" },
	{ value: "30", label: "person org led" },
];

export const about = [
	"I'm an engineering and product leader based in Seattle. At Amazon I lead a 30-person organization spanning engineering, applied science, and product — owning customer-facing performance, observability across a 50,000+ service graph, and AI-driven code migration.",
	"Before Amazon I spent over a decade at Microsoft shipping consumer products people use every day — Skype, Skype on HoloLens, and Bing Mobile — including stints in London and Zurich.",
	"I care about empathetic leadership, growing engineers, and sponsoring women in engineering. These days I build and ship apps with AI as a way to stay close to the craft.",
];

export const experience: Role[] = [
	{
		company: "Amazon",
		title: "Principal Manager — Product, Engineering & Science",
		location: "Seattle & Vancouver, BC",
		period: "2019 — Present",
		highlights: [
			"Lead a 30-person, multi-discipline org — engineering managers and their teams, product, and an applied-science lead — across three central Amazon.com platform charters.",
			"Central Performance & Latency: cut amazon.com shopping latency ~40% (the fastest in years); the latency and quality work is estimated to drive $1.5B+ in annual revenue.",
			"Central Observability: stood up distributed tracing and analytics across a 50,000+ service graph.",
			"AI-Powered Code Migration: founded a team building custom AI that turns multi-year migration programs into automated, repeatable workflows.",
		],
	},
	{
		company: "Amazon",
		title: "Senior Technical Program Manager",
		period: "2017 — 2019",
		highlights: [
			"Owned a large-scale data-processing framework on AWS that kept worldwide HR systems running on up-to-date employee data.",
			"Shipped two Alexa for Work skills deployed across conference rooms and kitchens.",
		],
	},
	{
		company: "Amazon — Alexa Communications",
		title: "Senior Product Manager, Technical",
		period: "2016 — 2017",
		highlights: [
			"Product manager for the launch of calling and messaging on Alexa, including the Echo Show; delivered two pre-launch demos to Jeff Bezos.",
			"Shipped in-home family communications — “Alexa, make an announcement” and voice-message-to-SMS.",
		],
	},
	{
		company: "Skype · Microsoft",
		title: "Senior Product Manager Lead",
		location: "London, UK",
		period: "2013 — 2016",
		highlights: [
			"Led the PM team owning strategy and roadmap for next-generation Skype messaging; built a web-based messaging experience hosted inside the native iOS and Android apps.",
			"Product owner for Skype on HoloLens — AR video calls with drawing and photo insertion; flown to the International Space Station and used in orbit by astronaut Scott Kelly.",
		],
	},
	{
		company: "Bing Mobile · Microsoft",
		title: "Senior Product Manager Lead",
		period: "2010 — 2013",
		highlights: [
			"Doubled mobile MAU, migrated to a shared backend with Bing desktop, and cut deployment time from three months to daily.",
			"Designed and launched bSeattle, a Windows Phone restaurant-discovery app with ML dish summaries (4.5★ lifetime rating).",
		],
	},
	{
		company: "Microsoft — Lync & Office / SharePoint",
		title: "Product Owner",
		location: "Zurich & Redmond",
		period: "2001 — 2010",
		highlights: [
			"Launched Lync Attendant and shipped group video calling and delegation in Lync 2007 (Zurich).",
			"Product owner for enterprise document management in Office 2007 and the server-side antivirus API for SharePoint.",
		],
	},
];

export const projects: Project[] = [
	{
		name: "Ferry Tracker",
		period: "2025",
		blurb:
			"Real-time tracker for Washington State Ferries across iOS, Android, and web. Personalized “leave by” predictions come from a trimmed-mean model over your own recorded transit times, alongside live vessel, terminal, and bulletin data from the WSDOT APIs.",
		tags: ["React Native", "Expo", "TypeScript", "AWS Lambda", "CDK"],
	},
	{
		name: "Family Retreat Booking",
		period: "2023 — Present",
		blurb:
			"Full-stack web app where an extended family reserves days at a shared vacation home, coordinates shared tasks, and hands off check-in details. Built hands-on across the AWS stack — Cognito, Lambda, API Gateway, DynamoDB, S3, CloudFront, Route 53, SNS, and SES — behind a React front end.",
		tags: ["React", "AWS", "Cognito", "DynamoDB", "Serverless"],
	},
	{
		name: "Birthday App",
		period: "2025",
		blurb:
			"A playful, animated birthday app built as a personal gift for family — a custom cross-platform celebration that beats a paper card.",
		tags: ["React Native", "Expo"],
	},
	{
		name: "Turntable Speed",
		period: "2025",
		blurb:
			"A utility for vinyl listeners that measures a record player's true playback speed and helps dial in accurate 33⅓, 45, and 78 RPM rotation.",
		tags: ["React Native", "Expo"],
	},
];
