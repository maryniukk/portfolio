import Heading from '../ui/Heading'
import Cards from './Cards'

type Props = {
}

export default function AboutMe({}: Props) {
	return (
		<section  className='min-h-screen flex flex-col justify-center snap-center' id='about'>
			<Heading subTitle='about me' Title='General Information'/>
			<Cards/>
		</section>
	)
}