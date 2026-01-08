import Header from "../Header";
import Form from "./Form"
import { NetflixLoginBackgroundImage } from "../../utility/LoginImg";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
        className="h-screen w-screen object-cover"
        src={NetflixLoginBackgroundImage}
        alt="Background"/>
      </div>
      <Form />
    </div>
  )
}

export default Login;