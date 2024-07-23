import Heading from '../ui/Heading'
import { Circles } from './Circles'

const stackList = [
	{
		title:'NextJs'
	},
	{
		title:'TailwindCSS'
	},
	{
		title:'Redux Toolkit'
	},
	{
		title:'JavaScript'
	},
	{
		title:'TypeScript'
	},
	{
		title:'SASS'
	}

]

type Props = {}

export default function Stack({}: Props) {
	return (
		<div>
			<Heading subTitle='stack' Title='My technologies' />
			<div className='pt-[80px] flex'>
				<Circles/>
				<div className='pl-20 flex flex-col gap-4'>
					{stackList.map((e)=> <ul>
						<li className='text-4xl font-light'>{e.title}</li>
					</ul>)}
				</div>
			</div>
		</div>
	)
}