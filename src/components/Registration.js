import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewUser } from "../features/users/usersSlice";

export default function Registration() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (passwordVerify === userPassword) {
      dispatch(
        addNewUser({ name: userName, email: userEmail, password: userPassword })
      );
    } else {
      alert("Error");
    }
  };

  return (
    <form id="RegistrationForm" className="userForm" onSubmit={handleSubmit}>
      <p className="title">Quick Registration</p>
      <p className="desription">For new customers</p>
      <div className="error">Invalid email address or password.</div>
      <label>
        <input
          type="text"
          placeholder="Full name"
          data-name="name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
      </label>

      <label>
        <input
          type="email"
          placeholder="Email Address"
          data-name="email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          required
        />
      </label>

      <label>
        <input
          type="password"
          placeholder="Password"
          data-name="password"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
          required
        />
      </label>

      <label>
        <input
          type="password"
          placeholder="Verify Password"
          data-name="passwordVerify"
          value={passwordVerify}
          onChange={(event) => setPasswordVerify(event.target.value)}
          required
        />
      </label>

      <button className="btn">Create Account</button>
    </form>
  );
}
