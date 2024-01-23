import Form from "../../components/form/form"
import './LoginModules.css'

export default function Login ( {login} ) {
  return (
      <section className="login">
         <Form login={login}/>
      </section>
      
  )
}