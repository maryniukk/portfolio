import Heading from '../ui/Heading';
import Card from './Card';

type Props = {};

export default function Information({}: Props) {
	return (
		<section
			className='flex flex-col container min-h-screen  w-full justify-center snap-center'
			id='about'
		>
			{/**Title */}
			<Heading subTitle='about me' Title='General Information' />
			{/**CARD */}
			<Card />
		</section>
	);
}
