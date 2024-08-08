function SelectOrderBy({ setOrderBy }) {
	function handleOrderChange(event) {
		const value = event.target.value;
		const direction = value === "Ascending" ? "ASC" : "DESC";
		setOrderBy(direction);
	}

	return (
		<div>
			<label htmlFor="select-order-by"></label>
			<select onChange={handleOrderChange} id="select-order-by">
				<option>Descending</option>
				<option>Ascending</option>
			</select>
		</div>
	);
}
export default SelectOrderBy;
