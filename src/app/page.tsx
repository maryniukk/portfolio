import AboutMe from '@/components/AboutMe/AboutMe'
import ContactMe from '@/components/ContactMe/ContactMe'
import Hero from '@/components/Hero/Hero'
import MyProjects from '@/components/MyProjects/MyProjects'
import Stack from '@/components/Stack/Stack'

type Props = {
	subTitle:string
	Title:string
}
export default function Home() {
  return (
    <main className="flex text-5xl min-h-screen flex-col justify-between text-white snap-mandatory snap-y">
        <Hero/>
        <AboutMe/>
        <Stack/>
        <MyProjects/>
        <ContactMe/>
    </main>
  );
}
