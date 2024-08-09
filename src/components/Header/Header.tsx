import { Logo } from './Logo';
import Menu, { NavLink } from './Menu';

export default function Header() {
	const navLinks: NavLink[] = [
		{
			href: '#about',
			label: 'About',
			id: '01',
			index: 1,
		},
		{
			href: '#stack',
			label: 'Stack',
			id: '02',
			index: 2,
		},
		{
			href: '#projects',
			label: 'Projects',
			id: '03',
			index: 3,
		},
		{
			href: '#contact',
			label: 'Contact',
			id: '04',
			index: 4,
		},
	];

	return (
		<header className='flex justify-between items-center rounded-md py-3 bg-[#161513] container sticky top-0 z-30 dark:bg-black'>
			<Logo />
			<Menu navLinks={navLinks} />
		</header>
	);
}
