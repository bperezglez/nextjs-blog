import buttonStyles from './button.module.css';
export default function Button(props) {
  const defaultButtonClass = 'button-component';
  return (
    <button
    onClick={() => {
          props.onClick()
      }
    }
    className={
      [buttonStyles[defaultButtonClass],
      buttonStyles[props.buttonType],
      (props.className || '')].join(' ')
    } type={props.type}>{props.text}</button>
  )
}