import cardImage from '@/assets/aboutImage.jpg';
import Image from 'next/image';
import { NeonGradientCard } from '../magicui/neon-gradient-card';
import CardInfo from './CardInfo';

type Props = {};

export default function Card({}: Props) {
	return (
		<div className='pt-12 flex flex-col mdForInfo:flex-row ml-auto mr-auto gap-6 mdForInfo:gap-[100px]'>
			<div className='flex items-center justify-center mx-auto'>
				<NeonGradientCard className='min-w-[300px] mdForInfo:min-w-[450px] relative max-w-xs mdForInfo:max-w-sm transition-transform duration-300 ease-in-out hover:scale-105'>
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
			<div className='flex flex-col items-center mdForInfo:items-start'>
				<div className='flex flex-col mdForInfo:flex-row gap-4 mdForInfo:gap-6'>
					<CardInfo />
					<CardInfo />
				</div>
				<p className='w-full mdForInfo:w-[430px] pt-8 font-light text-lg mdForInfo:text-3xl text-center mdForInfo:text-left'>
					React Developer Based in Bergen, Norway 🇳🇴
					<br />
					Let&apos;s chat over a cup of coffee ☕ and explore how we can work
					together.
					<br />
					Feel free to reach me out 😄
				</p>
			</div>
		</div>
	);
}
