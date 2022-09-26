import React, { useState } from "react";

function Form() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
	});

	function handleChange(e) {
		const name = e.target.name;
		let value = e.target.value;

		// use `checked` property of checkboxes instead of `value`
		if (e.target.type === "checkbox") {
			value = e.target.checked;
		}

		setFormData({ ...formData, [name]: value });
		console.log(formData);
	}

	return (
		<form onChange={handleChange}>
			<input
				type="text"
				name="firstName"
				defaultValue={formData.firstName}
				placeholder="First Name"
			/>
			<input
				type="text"
				name="lastName"
				defaultValue={formData.lastName}
				placeholder="Last Name"
			/>
			<input
				type="checkbox"
				name="admin"
				onChange={handleChange}
				checked={formData.admin}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
