import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { IconType } from 'react-icons';
import { PiMedalMilitaryBold } from 'react-icons/pi';

type Props = {
	title: string;
	paragraph: string;
	image: IconType;
};

export default function Card({ image, title, paragraph }: Props) {
	return (
		<div className=''>
			<NeonGradientCard className=''>
				<span className='text-black text-xl'>
					<div className='flex flex-col text-center'>
						<div className='flex justify-center'>
							<PiMedalMilitaryBold className='transition-transform duration-300 ease-in-out hover:scale-110' />
						</div>
						<p className='text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-105'>
							{title}
						</p>
						<p className='pt-2 transition-transform duration-300 ease-in-out hover:scale-105'>
							{paragraph}
						</p>
					</div>
				</span>
			</NeonGradientCard>
		</div>
	);
}
