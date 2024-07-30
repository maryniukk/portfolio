import { PiMedalMilitaryBold } from 'react-icons/pi';
import { NeonGradientCard } from '../magicui/neon-gradient-card';
type Props = {};

export default function CardInfo({}: Props) {
	return (
		<div className='flex items-center justify-center'>
			<NeonGradientCard className=' relative  w-full h-[180px] transition-transform duration-300 ease-in-out hover:scale-105'>
				<span className='text-black text-xl'>
					<div className='flex flex-col text-center'>
						<div className='flex justify-center'>
							<PiMedalMilitaryBold className='transition-transform duration-300 ease-in-out hover:scale-110' />
						</div>
						<p className='text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-105'>
							Experience
						</p>
						<p className='pt-2 transition-transform duration-300 ease-in-out hover:scale-105'>
							1+ year <br /> React Development
						</p>
					</div>
				</span>
			</NeonGradientCard>
		</div>
	);
}
