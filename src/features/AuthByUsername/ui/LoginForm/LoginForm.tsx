import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
	className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {

	const { t } = useTranslation()

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input autofocus placeholder={t('Введите никнейм')} type="text" className={cls.input} />
			<Input placeholder={t('Введите пароль')} type="text" className={cls.input} />
			<button className={cls.loginButton}>
				{t("Войти")}
			</button>
		</div>
	)
}