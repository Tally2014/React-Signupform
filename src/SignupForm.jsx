import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };

  return (
    <div className="form">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="username"
        value={formData.firstName}
        onChange={handleChange}
        id="firstname"
        name="firstName"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="username"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
