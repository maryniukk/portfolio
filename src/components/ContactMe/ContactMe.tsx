import Heading from '../ui/Heading';
import MailForm from './MailForm';

type Props = {
	Title: string;
};

export default function ContactMe(Title: Props) {
	return (
		<section
			id='contact'
			className='min-h-screen flex flex-col justify-center snap-center'
		>
			<Heading Title='Contact Me' />
			<div className='px-12 pt-8 md:pt-8 justify-around flex'>
				<div className=' bg-[#1E1E1E] w-[700px] h-auto rounded-2xl md:w-[900px]'>
					<div className='p-12'>
						<MailForm />
					</div>
				</div>
			</div>
		</section>
	);
}
