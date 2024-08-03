const AnimalFilter = ({filterState}: any) => {
	const [filterVal, setFilterVal] = filterState;
	return (
		<input
		type="text"
		value={filterVal}
		onChange={(e) => setFilterVal(e.target.value)}
		className="border border-black rounded"
	/>
	)
}

export default AnimalFilter;