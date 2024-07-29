import Card from './Card';
type Props = {};

export default function RightCard({}: Props) {
	return (
		<div className='pl-14 pr-14 ml-auto mr-auto md:flex flex-col justify-between items-center '>
			<div className='flex flex-col pt-8 md:flex ,md:flex-row  gap-8 '>
				<Card />
				<Card />
			</div>
			<p className='w-[400px] pt-8 font-light text-lg md:text-xl md:w-[500px] md:pt-5'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
				reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem
				nobis, nihil esse debitis maxime facere minus sint delectus velit in eos
				quo officiis explicabo deleniti dignissimos. Eligendi illum libero
				dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla,
				impedit fuga!
			</p>
		</div>
	);
}
