import BlurFade from '@/components/magicui/blur-fade';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { HeroInfo } from './HeroInfo';
type Props = {};

export default function RightSide(props: Props) {
	return (
		<div className='mt-auto mb-auto font-semibold text-center flex flex-col gap-5'>
			<BlurFade delay={0.25} inView>
				<HeroInfo />
			</BlurFade>
			<div className='pt-2 flex justify-center gap-2'>
				<BlurFade delay={0.25} inView>
					<div className='flex gap-4'>
						<a
							href='https://drive.google.com/uc?export=download&id=1qtfRbyTs1FvGZ935N5HoVQi3E0hQJ_HM'
							download
							className='btn text-lg font-normal bg-white text-black px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#4b4b4b] hover:text-white'
						>
							Download CV
						</a>
						<a
							href='https://drive.google.com/uc?export=download&id=1qtfRbyTs1FvGZ935N5HoVQi3E0hQJ_HM'
							className='btn text-lg font-normal bg-white text-black px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#4b4b4b] hover:text-white'
						>
							Contact Info
						</a>
					</div>
				</BlurFade>
			</div>

			<div className='flex justify-center gap-3'>
				<BlurFade delay={0.25} inView>
					<div className='flex gap-3'>
						<a href='https://github.com/maryniukk'>
							<FaGithub className='text-4xl transition duration-300 ease-in-out hover:text-[#6A6AF0]' />
						</a>
						<a href='https://www.linkedin.com/in/nikitamaryniuk/'>
							<FaLinkedin className='text-4xl transition duration-300 ease-in-out hover:text-[#0B66C2]' />
						</a>
						<a href='https://t.me/maryniukk'>
							<FaTelegramPlane className='text-4xl transition duration-300 ease-in-out hover:text-[#24A1DE]' />
						</a>
					</div>
				</BlurFade>
			</div>
		</div>
	);
}
