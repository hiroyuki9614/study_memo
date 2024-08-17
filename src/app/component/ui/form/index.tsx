"use client";

import { useForm, SubmitHandler } from "react-hook-form"
import InputText from "../inputText/index"
import { createPost } from "../../../api/studies-memo/route"
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from "../button";

type Inputs = {
	title: string;
	// 他のフィールドもここに追加
}

export default function CreateStudiesMemo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<form action={createPost}>
			<InputText
				id="title"
				title="タイトル"
				name="title"
				register={register}
				errors={errors}
				required
			/>
						<InputText
				id="title"
				title="タイトル"
				name="title"
				register={register}
				errors={errors}
				required
			/>
			<Button icon={faUser} variant="secondary">
				送信
			</Button>
		</form>
	)
};