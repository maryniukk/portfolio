import { motion } from 'framer-motion'
import Image from 'next/image'
import heroImg from '/src/assets/myprofilepic.jpg'

type Props = {}

export default function LeftSide({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={heroImg} alt='Profile Picture' width={380} height={520} />
    </motion.div>
  );
}
