
type Props = {}

export default function MailForm({}: Props) {
	return (
		<form className='flex flex-col gap-6'>
			<input className='text-lg rounded-2xl py-[12px] px-[15px] bg-[#161513] text-white w-[350px]' type='mail' placeholder='Your Mail'/>
			<textarea className='resize-none text-2xl rounded-lg p-8 bg-[#161513] text-white black:text-white'></textarea>
			<button className='p-4 bg-[#161513] text-xl w-[150px] rounded-xl text-white'>Send</button>
		</form>
	)
}