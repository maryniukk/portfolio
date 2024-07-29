import LeftCard from './LeftCard/LeftCard';
import RightCard from './RightCard/RightCard';
type Props = {};

export default function Cards({}: Props) {
	return (
		<div>
			<div className='container justify-center flex flex-col md:flex pt-12'>
				<LeftCard />
				<RightCard />
			</div>
		</div>
	);
}
