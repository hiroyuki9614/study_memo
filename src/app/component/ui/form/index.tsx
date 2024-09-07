'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef } from 'react';
import InputText from '../inputText/index';
import InputTextArea from '../text-area';
import { POST } from '../../../api/studies-memo/route';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

type Inputs = {
	title: string;
	duration: number;
	description: string;
	category: string;
};

export default function CreateStudiesMemo() {
	const formRef = useRef<HTMLFormElement>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		if (formRef.current) {
			const formData = new FormData(formRef.current);
			const result = await POST(formData);
			if (result.message === 'success') {
				reset();
			}
		}
	};

	return (
		<form ref={formRef} action={POST} onSubmit={handleSubmit(onSubmit)}>
			<InputText id='studyTitle' title='タイトル' name='title' register={register} errors={errors} type='text' required />
			<InputText id='studyDuration' title='学習時間' name='duration' register={register} errors={errors} type='number' required />
			<InputTextArea id='studyDescription' title='学習内容' name='description' register={register} errors={errors} required />
			<Button icon={faUser} type='submit' variant='primary'>
				送信
			</Button>
		</form>
	);
}
