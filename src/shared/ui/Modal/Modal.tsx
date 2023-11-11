import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import classes from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

type Modal = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean,
	onClose?: () => void
	lazy?: boolean

};

const ANIMATION_DELAY = 200

export function Modal({ className, children, isOpen, onClose, lazy }: Modal) {
	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)

	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const { theme } = useTheme()

	const mods: Record<string, boolean> = {
		[classes.opened]: isOpen,
		[classes.isClosing]: isClosing,
		[classes[theme]]: true,
	}

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			closeHandler()
		}
	}, [closeHandler])

	const contentHandler = (e: React.MouseEvent) => {
		e.stopPropagation()

	}
	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])



	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(classes.Modal, mods, [className])} >
				<div className={classes.overlay} onClick={closeHandler}>
					<div className={classes.content} onClick={contentHandler}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
}
