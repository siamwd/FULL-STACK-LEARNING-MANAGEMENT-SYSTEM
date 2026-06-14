import { loginUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const isLoginsuccessful = await loginUser({
      phone : event.target.phone.value,
      password: event.target.password.value
    });
    if (isLoginsuccessful) {
      navigate('/');
      // Redirect to dashboard or home page
    }
    else {
      alert("Login failed. Please check your credentials and try again.");
    }
  }
  return (
    <>
    <div>
      <h1>Login</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <input name="phone" type="text" placeholder="Enter your phone number" required />
      <input name="password" type="password" placeholder="Enter your password"/>
      <button type="submit">Login</button>
    </form>
    </>
  )
}
export default Login;