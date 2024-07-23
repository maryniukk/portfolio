
type Props = {
	subTitle:string
	Title:string
}

export default function Heading({subTitle, Title}: Props) {
	return (
		<div className='text-center pt-16'>
			<p className='font-light text-2xl text-gray-400'>{subTitle}</p>
			<h3 className='font-medium text-4xl'>{Title}</h3>
		</div>
	)
}