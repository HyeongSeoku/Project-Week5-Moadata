import { ButtonHTMLAttributes, MouseEvent } from 'react'
import styles from './button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  size: 'large' | 'medium' | 'small'
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ value, type = 'button', disabled, size = 'medium', onClick }: IButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={styles[size]}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button
