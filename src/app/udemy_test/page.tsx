'use client'
import Hello from "../component/ui/udemy-component/hello";
import Bye from "../component/ui/udemy-component/bye";
import Expression from "../component/ui/udemy-component/expression";
import List from "../component/ui/udemy-component/list";
import Button from "../component/ui/button/button";
import { useState } from "react";

const Example = () => {
	const personObj: { name: string, age: number } = { name: "John", age: 12 }
	const [person, setPerson] = useState(personObj);
	console.log(person);
	const changePerson = (e: any) => {
		setPerson({ name: e.target.value, age: person.age});
	}
	return (
		<>
			<p>{person.name}</p><p>{person.age.toString()}</p>
			<input type="text" onChange={changePerson} value={`${person.name}`} />
		</>
	)
}

export default Example;