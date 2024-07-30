'use client';
import { useToast } from '@/components/ui/use-toast';
import React from 'react';

type Props = {};

export default function MailForm({}: Props) {
	const [result, setResult] = React.useState('');
	const { toast } = useToast();

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult('Sending...');
		const formData = new FormData(event.target);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult('Form Submitted Successfully');
			event.target.reset();
		} else {
			console.log('Error', data);
			setResult(data.message);
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			className='flex flex-col gap-6 items-center md:items-start'
		>
			<input
				required
				className='text-lg rounded-2xl py-[12px] px-[15px] bg-[#161513] text-white w-[300px] md:w-[350px]'
				type='email'
				name='email'
				placeholder='Your Email'
			/>
			<input
				type='hidden'
				name='access_key'
				value='319c0261-7682-4857-bf24-26bc739219b5'
			></input>
			<textarea
				required
				placeholder='Write your message here'
				name='message'
				className='w-full md:w-[500px] h-[150px] md:h-[250px] text-white resize-none text-lg rounded-lg p-4 bg-[#161513]'
			></textarea>
			<button
				onClick={() => {
					toast({
						title: 'Looking forward to meet you 😄',
						description: '123123',
					});
				}}
				type='submit'
				className='btn w-[80px] md:w-[100px] transition-all ease-in-out p-1 rounded-lg bg-white text-black text-lg font-normal hover:bg-[#ff00aa] hover:text-white'
			>
				Send
			</button>
			<span className='text-white text-xl'>{result}</span>
		</form>
	);
}
