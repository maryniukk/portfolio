
import { Logo } from './Logo'
import Menu from './Menu'
export default function Header() {

	const navLinks = [
		{
			href: "#about",
			label: "About",
			id:'01'
		},
		{
			href: "#stack",
			label: "Stack",
			id:'02',
			
		},
		{
			href: "#projects",
			label:"Projects",
			id:'03',

		},
		{
			href: "#contact",
			label: "Contact",
			id:'04',

		}
	]

  return (
    <header className='flex justify-between items-center py-3 px-24 bg-[#1E1E1E] sticky top-0 z-30 dark:bg-black'>
			<Logo/>
			<Menu navLinks={navLinks} />
		</header>
  );
}