import Card from './Card'

type Props = {}

export default function RightCard({}: Props) {
	return (
		<div className='flex items-center justify-center gap-8'>
			<Card/>
			<Card/>
		</div>
	)
}