function SelectSortBy({ setSortBy }) {
	const sortByColumns = {
		Date: "created_at",
		"Comment count": "comment_count",
		Votes: "votes",
	};

	function handleSortByChange(event) {
		const value = event.target.value;
		const colmunName = sortByColumns[value];
		setSortBy(colmunName);
	}

	return (
		<div>
			<label htmlFor="select-sort-by">Sort by: </label>
			<select onChange={handleSortByChange} id="select-sort-by">
				<option>Date</option>
				<option>Comment count</option>
				<option>Votes</option>
			</select>
		</div>
	);
}
export default SelectSortBy;
