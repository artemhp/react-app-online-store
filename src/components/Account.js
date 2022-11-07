import Registration from "./Registration";
import Login from "./Login";

export default function Account() {
  return (
    <div className="columns">
      <Login />
      <Registration />
    </div>
  );
}
