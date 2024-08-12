'use client';
import { useToast } from '@/components/ui/use-toast';
import React, { useState } from 'react';

type Props = {};

const MailForm: React.FC<Props> = () => {
	const [result, setResult] = useState('');
	const [text, setText] = useState<string>('');
	const { toast } = useToast();
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult('Sending...');
		const formData = new FormData(event.currentTarget);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult('Form Submitted Successfully');
			event.currentTarget.reset(); // Reset the form inputs
		} else {
			console.log('Error', data);
			setResult(data.message);
		}
	};

	return (
		<form onSubmit={onSubmit} className='flex flex-col gap-6 md:items-start'>
			<input
				required
				className='text-lg rounded-2xl py-[12px] px-[15px] bg-[#161513] text-white w-[300px] md:w-[350px] placeholder:font-light'
				type='email'
				name='email'
				placeholder='Your Email'
			/>
			<input
				type='hidden'
				name='access_key'
				value='319c0261-7682-4857-bf24-26bc739219b5'
			/>
			<textarea
				onChange={(e) => setText(e.target.value)}
				required
				placeholder='Write your message here'
				name='message'
				className='w-full md:w-[500px] h-[150px] md:h-[250px] text-white resize-none text-lg rounded-lg p-4 bg-[#161513] placeholder:font-light'
			></textarea>

			<button
				onClick={() => {
					text.length < 5
						? toast({
								title: 'Please, enter more details :)',
								description: '',
						  })
						: toast({
								title: 'Looking forward to meet you 😄',
								description: '',
						  });
				}}
				type='submit'
				className='btn text-lg font-normal bg-white text-black px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#4b4b4b] hover:text-white'
			>
				Send
			</button>
			<span className='text-white text-xl'>{result}</span>
		</form>
	);
};

export default MailForm;
