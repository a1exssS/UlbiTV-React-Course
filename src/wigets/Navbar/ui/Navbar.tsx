import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

type NavbarProps = {
	className?: string;
};

export function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false)
	const onToggleModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])
	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	return (
		<nav className={classNames(classes.navigation, {}, [className])}>
			<button className={classes.button} onClick={onShowModal}>
				{t('Войти')}
			</button>
			<LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
		</nav>
	);
}
