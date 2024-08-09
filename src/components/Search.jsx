import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ setSearchTerm }) {
	const [searchInput, setSearchInput] = useState("");
	const navigate = useNavigate();

	function handleChange(event) {
		setSearchInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSearchTerm(searchInput);
		setSearchInput("");
		navigate("/");
	}

	return (
		<>
			<form id="search-form">
				<label id="search-label" htmlFor="search-input">
					Search articles{" "}
					<input
						value={searchInput}
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
