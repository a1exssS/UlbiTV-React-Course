import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginModal.module.scss'
import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal lazy className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Text text="Loading..." />}>
				<LoginFormLazy />
			</Suspense>
		</Modal>
	)
}