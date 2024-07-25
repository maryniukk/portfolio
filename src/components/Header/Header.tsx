
import { Logo } from './Logo'
import Menu from './Menu'
export default function Header() {

	const navLinks = [
		{
			href: "/",
			label: "About",
			id:'01'
		},
		{
			href: "/",
			label: "Stack",
			id:'02',
			
		},
		{
			href: "/",
			label:"Projects",
			id:'03',

		},
		{
			href: "/",
			label: "Contact",
			id:'04',

		}
	]

  return (
    <header className='flex justify-between items-center py-3 px-24 bg-[#1E1E1E] dark:bg-black'>
			<Logo/>
			<Menu navLinks={navLinks} />
		</header>
  );
}