import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { PiMedalMilitaryBold } from "react-icons/pi"
type Props = {}

export default function Card({}: Props) {
	return (
		<div>
			<NeonGradientCard className="max-w-sm items-center justify-center text-center h-[180px]">
      <span className='text-black text-xl'>
				<div className='flex flex-col text-center'>
					<div className='flex justify-center'>
        	<PiMedalMilitaryBold/>
					</div>
					<p className='text-2xl font-bold'>Experience</p>
					<p className='pt-2'>1+ year <br/>React Development</p>
				</div>
      </span>
    </NeonGradientCard>
		</div>
	)
}