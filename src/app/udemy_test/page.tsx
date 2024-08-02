"use client"
import { useState } from "react";
import AnimalList from "../component/ui/udemy-component/animalList";

const Example = () => {
	const animals = ["Dog", "Cat", "Rat"];

	const [filterVal, setFilterVal] = useState("");
	const filterdAnimals = animals.filter((animal) => {
		const isMatch = animal.indexOf(filterVal) !== -1;
		return isMatch;
	})
	return (
		<>
			<input
				type="text"
				value={filterVal}
				onChange={(e) => setFilterVal(e.target.value)}
				className="border border-black rounded"
			/>
			<AnimalList animals={animals}/>
		</>
	);
};

export default Example;
