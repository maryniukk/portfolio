import { IconType } from 'react-icons';
import { NeonGradientCard } from '../magicui/neon-gradient-card'; // Ensure this import is correct

type Props = {
	icon: IconType; // IconType from react-icons should be passed as a component
	title: string;
	paragraph: string;
};

export default function CardInfo({ icon: Icon, title, paragraph }: Props) {
	return (
		<div className='flex items-center justify-center'>
			<NeonGradientCard className='relative w-full h-[180px] transition-transform duration-300 ease-in-out hover:scale-105'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div className='flex justify-center'>
						<Icon className='text-4xl text-black' />
					</div>
					<p className='text-xl text-black font-bold transition-transform duration-300 ease-in-out hover:scale-105'>
						{title}
					</p>
					<p className='text-xl text-black font-light transition-transform duration-300 ease-in-out hover:scale-105'>
						{paragraph}
					</p>
				</div>
			</NeonGradientCard>
		</div>
	);
}
