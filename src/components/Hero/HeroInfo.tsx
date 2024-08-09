import SparklesText from '@/components/magicui/sparkles-text';
import WordPullUp from '@/components/magicui/word-pull-up';

export async function HeroInfo() {
	return (
		<div className='flex flex-col gap-2'>
			<div className='text-xl text-gray-400 md:text-gray-400 font-light md:text-3xl'>
				Hello I&apos;m
			</div>
			<WordPullUp
				className='text-4xl font-bold tracking-[-0.02em] text-white 	dark:text-black md:text-6xl md:font-medium leading-[2.5rem]'
				words='Nikita Maryniuk'
			/>
			<SparklesText
				className='text-gray-400 font-normal text-2xl md:font-light md:text-gray-400 md:text-2xl'
				text='React Developer'
				sparklesCount={9}
				colors={{ first: '#fff', second: '#4b4b4b' }}
			/>
		</div>
	);
}
