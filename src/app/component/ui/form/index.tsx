"use client";
import { useForm, SubmitHandler } from "react-hook-form"
import InputText from "../inputText/index"
import InputTextArea from "../text-area";
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
		reset,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = () => reset();

	return (
		<form action={createPost}>
			<InputText
				id="studyTitle"
				title="タイトル"
				name="title"
				register={register}
				errors={errors}
				type="text"
				required
			/>
			<InputText
				id="studyDuration"
				title="学習時間"
				name="duration"
				register={register}
				errors={errors}
				type="number"
				required
			/>
			<InputTextArea
				id="studyDescription"
				title="学習内容"
				name="description"
				register={register}
				errors={errors}
				required />
			<Button icon={faUser} type="submit" variant="primary" onClick={() => reset()}>
				送信
			</Button>
		</form>
	)
};