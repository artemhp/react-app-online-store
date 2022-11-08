// import db from "../db";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/account/accountSlice";

export default function Login() {
  const users = useSelector((state) => state.users.value);

  const [userEmail, setUserEmail] = useState("ivan@gmail.com");
  const [userPassword, setUserPassword] = useState("123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Find User and Match Password
    // Get userDb from Database
    const isUserExist = users.find((el) => el.email === userEmail);
    if (isUserExist) {
      if (isUserExist.password === userPassword) {
        dispatch(login(isUserExist));
        navigate("/favourites");
      }
    }
  };
  return (
    <form className="userForm" onSubmit={handleSubmit}>
      <h2 className="title">Secure Sign In</h2>
      <p className="desription">For current customers</p>

      <div className="error">Invalid email address or password.</div>

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

      <button className="btn">Sign in</button>
    </form>
  );
}
