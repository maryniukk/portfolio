import LeftCard from './LeftCard/LeftCard';

type Props = {};

export default function Cards({}: Props) {
	return (
		<div>
			<div className='container justify-center flex flex-col md:flex pt-12'>
				<LeftCard />
			</div>
		</div>
	);
}
