import Button from "../components/button"
import style from './fiPay.module.css'
import { useNavigate } from "react-router-dom";

export default function FP() {
  const history = useNavigate();
  return(
    <div className={style['fi-pay']}>
      <div>
        <h1 className={`${style['largest-text']} ${style['neutral-white-text']}`}>Welcome</h1>
        <p className={`${style['medium-text']} ${style['neutral-white-text']}`}>FiPay: The best multifunctional digital E-Wallet of this century.</p>
        <Button onClick={() => history("/login")} className={style['button-primary']} type="button" buttonType="primary" text="Sign in"/>
        <Button type="button" buttonType="ghost" text="Create an account"/>
      </div>
    </div>
  )
}