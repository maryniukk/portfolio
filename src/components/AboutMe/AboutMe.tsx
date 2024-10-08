import Heading from '../ui/Heading';
import Cards from './Cards';

type Props = {};

export default function AboutMe({}: Props) {
	return (
		<section
			className='flex-col min-h-screen flex w-full justify-center snap-center md:min-h-[calc(100vh-70px)]'
			id='about'
		>
			<Heading subTitle='about me' Title='General Information' />
			<Cards />
		</section>
	);
}
