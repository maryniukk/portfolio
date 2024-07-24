import Heading from '../ui/Heading'
import ProjectCards from './ProjectCards'

type Props = {}

export default function MyProjects({}: Props) {
	return (
		<div>
			<Heading subTitle='Browse My Recent' Title='Projects'/>
			<ProjectCards/>
		</div>

	)
}