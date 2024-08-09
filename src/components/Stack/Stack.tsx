import Heading from '../ui/Heading';
import { Circles } from './Circles';

const stackList = [
	{
		title: 'NextJs',
		href: 'https://nextjs.org/',
		id: '89759123',
	},
	{
		title: 'TailwindCSS',
		href: 'https://tailwindcss.com/',
		id: '6787123',
	},
	{
		title: 'Redux Toolkit',
		href: 'https://redux-toolkit.js.org/',
		id: '83297034',
	},
	{
		title: 'JavaScript',
		href: 'https://www.javascript.com/',
		id: '123907592',
	},
	{
		title: 'TypeScript',
		href: 'https://www.typescriptlang.org/',
		id: '7084081723',
	},
	{
		title: 'SASS',
		href: 'https://sass-lang.com/',
		id: '1754825162692',
	},
];

type Props = {};

export default function Stack({}: Props) {
	return (
		<section
			className='container flex flex-col justify-center pt-12 md:min-h-screen md:px-8'
			id='stack'
		>
			<Heading subTitle='stack' Title='My technologies' />
			<div className='flex justify-between pt-12'>
				<Circles />
			</div>
			<div className='flex flex-col  md:flex-row justify-center gap-8 pt-6'>
				{stackList.map((e) => (
					<ul key={e.id}>
						<li className='text-md md:text-2xl font-light'>
							<a
								className='relative text-white hover:text-[#838383] before:content-[""] before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'
								href={e.href}
							>
								{e.title}
							</a>
						</li>
					</ul>
				))}
			</div>
		</section>
	);
}
