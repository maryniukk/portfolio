import LeftCard from './LeftCard/LeftCard'
import RightCard from './RightCard/RightCard'
type Props = {}

export default function Cards({}: Props) {
	return (
		<div className='pt-12 items-start flex justify-around'>
			<LeftCard/>
			<RightCard/>
		</div>
	)
}



