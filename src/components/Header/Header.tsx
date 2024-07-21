
import { Logo } from './Logo'
import Menu from './Menu'
export default function Header() {
	
	const navLinks = [
		{
			href: "/",
			label: "About"
		},
		{
			href: "/",
			label: "Experience"
		},
		{
			href: "/",
			label:"Projects",
		},
		{
			href: "/",
			label: "Contact"
		}
	]

  return (
    <header className='flex justify-between items-center py-4 px-24 bg-[#1E1E1E] dark:bg-black'>
			<Logo/>
			<Menu navLinks={navLinks} />
		</header>
		
  );
}