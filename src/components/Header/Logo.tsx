import Link from 'next/link'
import BlurFade from '../magicui/blur-fade'
import TypingAnimation from '../magicui/typing-animation'
export function Logo() {
  return (
    <Link href='/'>
    	<BlurFade delay={0.5} inView>
        <TypingAnimation 
        className="font-bold text-4xl"
        duration={400}
        text="MRNK."
        /> 
      </BlurFade>
    </Link>
  );
}