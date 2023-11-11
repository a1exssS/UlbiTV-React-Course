import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from "react-redux";
import { useCallback, memo } from 'react'
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Text, TextTheme } from "shared/ui/Text/Text";



export const LoginForm = memo(() => {

	const { t } = useTranslation()
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const {
		username,
		password,
		isLoading,
		error
	} = useSelector(getLoginState)

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])
	const submitHandler = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);


	return (
		<form onSubmit={submitHandler} className={classNames(cls.LoginForm, {}, [])}>
			<Text title={t('Форма авторизации')} />
			{error && <Text text={error} theme={TextTheme.ERROR} />}
			<Input
				autofocus
				placeholder={t('Введите никнейм')}
				type="text"
				className={cls.input}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				placeholder={t('Введите пароль')}
				type="text"
				className={cls.input}
				onChange={onChangePassword}
				value={password}
			/>
			<button onClick={submitHandler} disabled={isLoading} className={classNames(cls.loginButton, { [cls.disabled]: isLoading })}>
				{t("Войти")}
			</button>
		</form>
	)
})