import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import Image from 'next/image';
import Card from '../Card/Card';
import image from '/src/assets/aboutImage.jpg';
type Props = {};

export default function AboutCard({}: Props) {
	return (
		<div className=''>
			<div className='flex'>
				<Card />
				<Card />
			</div>
			<p className=''>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
				reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem
				nobis, nihil esse debitis maxime facere minus sint delectus velit in eos
				quo officiis explicabo deleniti dignissimos. Eligendi illum libero
				dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla,
				impedit fuga!
			</p>

			<NeonGradientCard className='relative max-w-sm transition-transform duration-300 ease-in-out hover:scale-105'>
				<span className='pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff00aa] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>
					<Image
						className='rounded-lg transition-transform w-[400px] duration-300 ease-in-out hover:scale-110'
						src={image}
						alt=''
					/>
				</span>
			</NeonGradientCard>
		</div>
	);
}
