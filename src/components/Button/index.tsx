import { ButtonHTMLAttributes, MouseEvent } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  size: 'large' | 'medium' | 'small'
  className?: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ value, type = 'button', disabled, size = 'medium', className, onClick }: IButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx(styles[size], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button
