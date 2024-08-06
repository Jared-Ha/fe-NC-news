import { useState } from "react";

function Search({ setSearchTerm }) {
	const [searchInput, setSearchInput] = useState("");

	function handleChange(event) {
		setSearchInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSearchTerm(searchInput);
	}

	return (
		<>
			<form id="search-form">
				<label id="search-label" htmlFor="search-input">
					Search articles{" "}
					<input
						onSubmit={handleSubmit}
						onChange={handleChange}
						id="search-input"
						type="text"
					></input>
					<button onClick={handleSubmit}>Go</button>
				</label>
			</form>
		</>
	);
}

export default Search;
