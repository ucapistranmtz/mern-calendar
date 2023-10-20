import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';



const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

const registerFormfields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPasswordConfirm: ''
}

export const LoginPage = () => {
  const {startLogin}= useAuthStore();
  const { loginEmail, loginPassword, onInputChange: onLoginInputchange } = useForm(loginFormFields)
  const { registerEmail, registerPassword, registerPasswordConfirm, onInputChange: onRegisterInputchange } = useForm(registerFormfields)

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email:loginEmail, password:loginPassword });
  }

  const registerSubmit = (event) => {
    event.preventDefault();
   // console.log({ loginEmail, loginPassword });
  }

  return (

    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Signup</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputchange}

              />
            </div>


            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputchange}
              />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputchange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputchange}
              />
            </div>

            <div className="d-grid gap-2">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="registerPasswordConfirm"
                value={registerPasswordConfirm}
                onChange={onRegisterInputchange}
              />
            </div>

            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btnSubmit"
                value="New account" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}