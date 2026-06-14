import { registerUser } from '../../utils/auth';
function Register() {
  async function handleSubmit(e) {
    e.preventDefault();

    await registerUser({
      username: e.target.username.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value
    });
  }
  return (
    <>
      <div>
        <h1>Register Now</h1>
        <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Enter your Full Name" required />
        <input name="password" type="password" placeholder="Enter your password"/>
        <input name="phone" type="number" placeholder="Enter your number" />
        <input name="email" type="text" placeholder="Enter your email" />
        <input name="first_name" type="text" placeholder="Enter First name" />
        <input name="last_name" type="text"  placeholder="Enter Last name"/>
        <button type="submit">Register</button>

        </form>  
      </div>
    </>
  )
}
export default Register;