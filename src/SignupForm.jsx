import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  return (
    <div className="form">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="username"
        value={formData.firstName}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="username"
        value={formData.lastName}
        id="lastname"
      />
      <button>Submit</button>
    </div>
  );
}
