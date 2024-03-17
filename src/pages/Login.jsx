import loginImg from "../assets/Images/desk.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome To Login"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
