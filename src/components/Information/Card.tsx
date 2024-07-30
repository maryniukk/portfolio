import cardImage from '@/assets/aboutImage.jpg';
import Image from 'next/image';
import { NeonGradientCard } from '../magicui/neon-gradient-card';
import CardInfo from './CardInfo';
type Props = {};

export default function Card({}: Props) {
	return (
		<div className='pt-12 flex flex-col md:flex-row ml-auto mr-auto gap-6 md:gap-[100px]'>
			<div className='flex items-center justify-center mx-auto'>
				<NeonGradientCard className='min-w-[300px] md:min-w-[450px] relative max-w-xs md:max-w-sm transition-transform duration-300 ease-in-out hover:scale-105'>
					<span className='pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff00aa] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>
						<Image
							className='rounded-lg transition-transform duration-300 ease-in-out hover:scale-110'
							src={cardImage}
							width={400}
							height={300}
							alt='Описание изображения'
						/>
					</span>
				</NeonGradientCard>
			</div>
			<div className='flex flex-col items-center md:items-start'>
				<div className='flex flex-col md:flex-row gap-4 md:gap-8'>
					<CardInfo />
					<CardInfo />
				</div>
				<p className='w-full md:w-[400px] pt-8 font-light text-lg md:text-xl text-center md:text-left'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
					reprehenderit et laborum, rem, dolore eum quod voluptate
					exercitationem nobis, nihil esse debitis maxime facere minus sint
					delectus velit in eos quo officiis explicabo deleniti dignissimos.
					Eligendi illum libero dolorum cum laboriosam corrupti quidem,
					reiciendis ea magnam? Nulla, impedit fuga!
				</p>
			</div>
		</div>
	);
}
