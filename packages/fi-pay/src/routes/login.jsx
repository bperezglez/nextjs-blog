import Button from "../components/button"
import style from './login.module.css'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom"

export default function Login() {
  return(
    <div className={style['fi-pay']}>
      <Form>
        <h1 className={`${style['largest-text']}`}>Sign in to <span className={`${style['primary-text']}`}>FiPay</span></h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="ms-3">Email or Phone Number</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="ms-3">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button onClick={() => void(0)} className={style['button-primary']} type="button" buttonType="primary" text="Sign in" disabled/>
        <Link to="/" className="text-decoration-none"><p className={`${style['primary-text']}`}>Forgot the password?</p></Link>
        <p>Don’t have an account? <Link to="/" className="text-decoration-none"><span className={`${style['primary-text']}`}>Sign up</span></Link></p>
      </Form>
    </div>
  )
}