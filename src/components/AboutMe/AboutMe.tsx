import Heading from '../ui/Heading'
import Cards from './Cards'

type Props = {
	subTitle:string
	Title:string
}

export default function AboutMe({}: Props) {
	return (
		<div>
			<Heading subTitle='about me' Title='General Information'/>
			<Cards/>
		</div>
	)
}