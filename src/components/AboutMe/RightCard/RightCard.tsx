import Card from './Card'
type Props = {
	
}

export default function RightCard({}: Props) {
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-center gap-8'>
				<Card/>
				<Card/>
			</div>
			<p className='text-lg w-[500px] pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!</p>
		</div>
	)
}