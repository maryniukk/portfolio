import Heading from '../ui/Heading'
import { Circles } from './Circles'

const stackList = [
	{
		title:'NextJs',
		href:'https://nextjs.org/'
	},
	{
		title:'TailwindCSS',
		href:'https://tailwindcss.com/'
	},
	{
		title:'Redux Toolkit',
		href:'https://redux-toolkit.js.org/'
	},
	{
		title:'JavaScript',
		href:'https://www.javascript.com/'
	},
	{
		title:'TypeScript',
		href:'https://www.typescriptlang.org/'
	},
	{
		title:'SASS',
		href:'https://sass-lang.com/'
	}

]

type Props = {}

export default function Stack({}: Props) {
	return (
		<div>
			<Heading subTitle='stack' Title='My technologies' />
			<div className='pt-[80px] flex justify-center'>
				<Circles/>
				<div className='pl-20 flex flex-col gap-4'>
					{stackList.map((e)=> <ul>
						<li className='text-4xl font-light'>
  						<a className='relative text-white hover:text-[#ff00aa] inline-block before:content-[""] before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100' href={e.href}>{e.title}</a>
						</li>
					</ul>)}
				</div>
			</div>
		</div>
	)
}