import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import Image from 'next/image';
import image from '/src/assets/aboutImage.jpg';

type Props = {};

export default function LeftCard({}: Props) {
	return (
		<div className='flex items-center ml-auto mr-auto justify-center'>
			<NeonGradientCard className=' min-w-[450px] relative max-w-sm transition-transform duration-300 ease-in-out hover:scale-105'>
				<span className='pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff00aa] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>
					<Image
						className='rounded-lg transition-transform duration-300 ease-in-out hover:scale-110'
						src={image}
						width={400}
						alt=''
					/>
				</span>
			</NeonGradientCard>
		</div>
	);
}
