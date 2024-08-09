import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';

type Props = {
	title: string;
};
export async function Card({ title }: Props) {
	return (
		<NeonGradientCard className='relative max-w-sm w-full h-[180px] transition-transform duration-300 ease-in-out hover:scale-105'>
			<span className='text-black text-xl'>
				<div className='flex flex-col text-center'>
					<p className='text-xl font-bold transition-transform duration-300 ease-in-out hover:scale-105'>
						Your Project
					</p>
					<p className='pt-2 transition-transform duration-300 ease-in-out hover:scale-105'>
						Info
					</p>
				</div>
			</span>
		</NeonGradientCard>
	);
}
