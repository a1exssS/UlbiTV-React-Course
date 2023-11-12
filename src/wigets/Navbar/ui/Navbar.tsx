import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'

type NavbarProps = {
	className?: string;
};

export function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])
	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])
	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [])

	useEffect(() => {

		setIsAuthModal(false)

		return () => {
			setIsAuthModal(true)
		}

	}, [authData])


	if (authData) {
		return (
			<nav className={classNames(classes.navigation, {}, [className])}>
				<button className={classes.button} onClick={onLogout}>
					{t('Выйти')}
				</button>
			</nav>
		)
	}

	return (
		<nav className={classNames(classes.navigation, {}, [className])}>
			<button className={classes.button} onClick={onShowModal}>
				{t('Войти')}
			</button>
			{isAuthModal &&
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			}
		</nav>
	);
}
