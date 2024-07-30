import Heading from '../ui/Heading';
import MailForm from './MailForm';

type Props = {};

export default function ContactMe({}: Props) {
	return (
		<section
			id='contact'
			className='min-h-screen flex flex-col justify-center snap-center'
		>
			<Heading Title='Contact Me' subTitle='' />
			<div className='px-4 md:px-12 pt-8 md:pt-8 justify-around flex'>
				<div className='bg-[#1E1E1E] w-full md:w-[700px] lg:w-[900px] h-auto rounded-2xl'>
					<div className='p-4 md:p-12'>
						<MailForm />
					</div>
				</div>
			</div>
		</section>
	);
}
