import { Card } from './Card';

type Props = {
	title: string;
};
const projectsArray = [
	{
		title: 'Weather App',
	},
	{
		title: 'Electronic Shop',
	},
	{
		title: 'Todo App',
	},
	{
		title: 'Soon...',
	},
];

const ProjectCards: React.FC<Props> = ({ title }) => {
	return (
		<div className='ml-auto mr-auto grid justify-center pt-12'>
			<div className='grid grid-cols-2 grid-rows-2 gap-12'>
				<Card title={title} />
				<Card title={title} />
				<Card title={title} />
				<Card title={title} />
			</div>
		</div>
	);
};
export default ProjectCards;
