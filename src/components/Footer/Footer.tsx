import { Logo } from '../Header/Logo';

type Props = {};
export default function Footer({}: Props) {
	return (
		<div className='pb-12'>
			<Logo />
			<p className='text-center text-sm md:text-center pt-4 text-lg'>
				Copyright © 2024 Nikita Maryniuk. All Rights Reserved.
			</p>
		</div>
	);
}
