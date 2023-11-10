import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import React, { InputHTMLAttributes, memo, useState, useEffect, useRef } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo(({ className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps }: InputProps) => {

	const [isFocused, setIsFocused] = useState(false)
	const [chariotPosition, setChariotPosition] = useState(0)


	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setChariotPosition(e.target.value.length)
	}

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true)
			ref.current.focus()
		}
	}, [autofocus])

	const onBlur = () => {
		setIsFocused(false)
	}
	const onFocus = () => {
		setIsFocused(true)
	}

	const onSelect = (e: any) => {
		setChariotPosition(e?.target?.selectionStart || 0)
	}

	const ref = useRef<HTMLInputElement>(null)

	return (
		<div className={classNames(cls.InputBoxWrapper, {}, [className])}>
			{placeholder && <div className={cls.placeholder}>{placeholder + ">"}</div>}
			<div className={cls.inputWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={cls.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					autoFocus
					{...otherProps}
				/>
				{isFocused && <span className={cls.inputChariot} style={{ left: chariotPosition * 9 + 'px' }} />
				}
			</div>
		</div>
	)
})