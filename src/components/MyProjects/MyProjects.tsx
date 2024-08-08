import Heading from '../ui/Heading';
import ProjectCards from './ProjectCards';

type Props = {};

export default function MyProjects({}: Props) {
	return (
		<section
			id='projects'
			className='min-h-screen flex flex-col justify-center snap-center'
		>
			<Heading subTitle='Browse My Recent' Title='Projects' />
			<ProjectCards title='' />
		</section>
	);
}
