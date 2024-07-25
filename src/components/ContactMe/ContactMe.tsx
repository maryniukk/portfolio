import Heading from '../ui/Heading'
import MailForm from './MailForm'

type Props = {
	Title:string
}

export default function ContactMe({Title}: Props) {
	return (
		<div className='pt-12'>
			<Heading Title='Contact Me'/>
				<div className='pt-8 justify-around flex'>
					<div className=' bg-[#1E1E1E] w-[900px] h-auto rounded-2xl'>
						<div className='p-14'>
							<MailForm/>
						</div>
					</div>
				</div>
		</div>
	)
}