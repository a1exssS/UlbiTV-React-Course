import {classNames} from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

type NavbarProps = {
	className?: string;
};

export function Navbar({className}: NavbarProps) {
	return (
		<nav className={classNames(classes.navigation, {}, [className])}>
			<div className={classes.Links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>Home</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
			</div>
		</nav>
	);
}
