"use client";

import { useForm, SubmitHandler } from "react-hook-form"
import InputText from "../component/ui/inputText/index"

type Inputs = {
  title: string;
  // 他のフィールドもここに追加
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-60">
      <InputText
        id="title"
        title="タイトル"
        name="title"
        register={register}
        errors={errors}
        required
      />
      <button type="submit">送信</button>
    </form>
  )
}