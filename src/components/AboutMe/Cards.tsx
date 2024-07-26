import LeftCard from './LeftCard/LeftCard'
import RightCard from './RightCard/RightCard'
type Props = {}

export default function Cards({}: Props) {
	return (
		<div>
			<div className='pt-12 md:justify-around gap-4 flex justify-center flex-col md:flex-row '>
				<LeftCard/>
				<RightCard/>
			</div>
			</div>
		
	)
}



