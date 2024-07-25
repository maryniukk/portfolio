import Link from 'next/link'
import BlurFade from '../magicui/blur-fade'
import TypingAnimation from '../magicui/typing-animation'

export function Logo() {
  return (
    <Link href='/'>
      <BlurFade delay={0.5} inView>
        <div className="flex items-center justify-center h-full">
          <TypingAnimation 
            className="font-light text-4xl"
            duration={600}
            text="MRNK."
          /> 
        </div>
      </BlurFade>
    </Link>
  );
}
``
