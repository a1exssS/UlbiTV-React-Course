import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';

type NavbarProps = {
	className?: string;
};

export function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false)
	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev)
	}, [])

	return (
		<nav className={classNames(classes.navigation, {}, [className])}>
			<button className={classes.button} onClick={onToggleModal}>
				{t('Войти')}
			</button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal} >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque fuga at, numquam aperiam, expedita soluta maiores inventore asperiores porro esse sint saepe, officiis culpa. Cum numquam dignissimos vero tenetur.
			</Modal>
		</nav>
	);
}
