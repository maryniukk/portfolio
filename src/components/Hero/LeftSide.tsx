import Image from 'next/image';
import heroImg from '/src/assets/myprofilepic.jpg';

type Props = {};

export default function LeftSide({}: Props) {
	return (
		<div>
			<Image
				className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'
				src={heroImg}
				alt='Profile Picture'
			/>
		</div>
	);
}
