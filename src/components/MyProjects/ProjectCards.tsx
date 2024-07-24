import { Card } from './Card'

type Props = {
	title:string
}

export default function ProjectCards({}: Props) {
	return (
		<div className='ml-auto mr-auto grid justify-center pt-12'>
				<div className='grid grid-cols-2 grid-rows-2 gap-12'>
					<Card title='Weather App'/>
					<Card title='E-commerce'/>
					<Card title='Todo App'/>
					<Card title='Soon...'/>
				</div>
			</div>

	)
}