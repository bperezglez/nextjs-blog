/* import Button from "../../../components/button"
import fiPayStyle from './fiPay.module.css'
import { BrowserRouter } from "react-router-dom"; */

/* export default function FiPay() {
  return(
    <BrowserRouter>
      <div className={fiPayStyle['fi-pay']}>
        <div>
          <h1 className={`${fiPayStyle['largest-text']} ${fiPayStyle['neutral-white-text']}`}>Welcome</h1>
          <p className={`${fiPayStyle['medium-text']} ${fiPayStyle['neutral-white-text']}`}>FiPay: The best multifunctional digital E-Wallet of this century.</p>
          <Button onClick={() => void(0)} className={fiPayStyle['button-primary']} type="button" buttonType="primary" text="Sign in"/>
          
          <Button type="button" buttonType="ghost" text="Create an account"/>
        </div>
      </div>
    </BrowserRouter>
  )
} */

import FiPayApp from 'fi-pay';

export default function FiPay() {
  console.log(FiPayApp);
  return(<h1>Works!!! Fipay!!</h1>)
}