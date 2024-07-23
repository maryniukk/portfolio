import LeftSide from './LeftSide'
import RightSide from './RightSide'
type Props = {}

export default function Hero({}: Props) {
	return (
		<div className='flex flex-col items-center'>
			<div className='flex gap-20'>
				<LeftSide/>
				<RightSide/>
			</div>
		</div>
	)
}