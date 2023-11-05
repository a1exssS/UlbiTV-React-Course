import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { ToggleButton } from 'wigets/ThemeButton';
import { LangSwitcher } from 'wigets/LangSwitcher';
import { useState } from 'react';
import { CollapseButton } from 'wigets/CollapseButton/ui/CollapseButton';
import { Link } from 'react-router-dom';
import { AboutLazy } from 'pages/AboutPage/ui/About.lazy';
type SidebarProps = {
	className?: string;
};

export function Sidebar({ className }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
			<div className={classNames(classes.box, {}, [className])}>
				<Link to={'/about'}>about</Link>
				<Link to={'/'}>home</Link>
				<div className={classNames(classes.items, {}, [className])}>
					<ToggleButton />
					<CollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
					<LangSwitcher />
				</div>
			</div>
		</div>
	);
}
