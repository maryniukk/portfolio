import Image from 'next/image';
import heroImg from '/src/assets/myprofilepic.jpg';

type Props = {};

export default function LeftSide({}: Props) {
	return (
		<div>
			<Image src={heroImg} alt='Profile Picture' width={380} height={520} />
		</div>
	);
}
