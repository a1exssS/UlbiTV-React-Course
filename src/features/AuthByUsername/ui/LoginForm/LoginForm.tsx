import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from "react-redux";
import { useCallback, memo } from 'react'
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { useEffect } from 'react'
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
	className?: string
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
}

const LoginForm = memo(() => {

	const { t } = useTranslation()
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

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
		<DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
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
		</DynamicModuleLoader>
	)
})

export default LoginForm
