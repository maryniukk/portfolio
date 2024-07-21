import BlurFade from "@/components/magicui/blur-fade"
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { HeroInfo } from './HeroInfo'
type Props = {}

export default function RightSide  (props: Props){
	return (
		<div className='mt-auto mb-auto font-semibold text-center flex flex-col gap-5'>
			  <BlurFade delay={0.25} inView>
					<HeroInfo/>
				</BlurFade>

			<div className='pt-2 flex justify-center gap-2'>
			<BlurFade delay={0.25} inView>
				<div className='flex gap-4'>
					<a href='/src/assets/Nikita Maryniuk React Developer.docx' download className="btn text-lg bg-white text-black px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#3e3e3e] hover:text-white">Download CV</a>
					<a href='/src/assets/Nikita Maryniuk React Developer.docx' className="btn text-lg bg-white text-black px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#3e3e3e] hover:text-white">Contact Info</a>
					</div>
				</BlurFade>
			</div>

			<div className='flex justify-center gap-3 pt-2'>
			<BlurFade delay={0.25} inView>
				<div className='flex gap-3'>
				<a href='https://github.com/maryniukk'>
					<FaGithub className='text-3xl transition duration-300 ease-in-out hover:text-indigo-600'/></a>
						<a href='https://www.linkedin.com/in/nikitamaryniuk/'>
							<FaLinkedin className='text-3xl transition duration-300 ease-in-out hover:text-blue-600'/>
						</a>
				<a href='https://t.me/maryniukk'><FaTelegramPlane className='text-3xl transition duration-300 ease-in-out hover:text-sky-400'/></a>
				</div>
				</BlurFade>
			</div>
		</div>
	)
}

