// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE =
	'WebbsAI Academy | Generate a custom website using Generative AI'
export const SITE_DESCRIPTION =
	"Welcome to WebbsAI Academy! Learn to generate amazing websites in 30 secs using WebbAI's magical AI website builder."

export const paths = [
	{
		name: 'Lessons',
		path: '/lessons',
	},
	{
		name: 'Courses',
		path: '/courses',
	},
	{
		name: 'Resources',
		path: '/resources',
	},
	{
		name: 'Blogs',
		path: '/blogs',
	},
]

export const footerLinks = [
	{
		title: 'Home',
		links: [
			{ title: 'Home', href: `${import.meta.env.WEBBSAI_LANDING_URL}/` },
		],
	},
	{
		title: 'Product',
		links: [
			{
				title: 'Pricing',
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/pricing`,
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				title: 'About us',
				href: 'https://www.linkedin.com/company/webbsai/about/',
			},
			{
				title: 'Careers',
				href: 'https://www.linkedin.com/company/webbsai/jobs/',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				title: 'Contact',
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/contact`,
			},
			{
				title: 'Terms',
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/tos`,
			},
			{
				title: 'Privacy',
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/privacy`,
			},
		],
	},
]

export const DEFAULT_SCREEN_SIZE = 1360

export const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

export const blogTags = [
	'All',
	'Product Update',
	'Web designs',
	"FAQ's",
	'Technical',
	'Interviews',
	'Trends',
]

export const courseDifficultyLevels = [
	'All',
	'Beginner',
	'Intermediate',
	'Advance',
	'Expert',
]

export const resourceTypes = [
	'All',
	'Buttons',
	'Animations',
	'Nav bars',
	'Tables',
]
