import LeftSide from './LeftSide';
import RightSide from './RightSide';
type Props = {};

export default function Hero({}: Props) {
	return (
		<section
			id='hero'
			className='flex flex-col container items-center min-h-screen md:min-h-[calc(100vh-70px)] justify-center snap-center'
		>
			<div className='flex flex-col md:flex md:flex-row gap-20'>
				<LeftSide />
				<RightSide />
			</div>
		</section>
	);
}
