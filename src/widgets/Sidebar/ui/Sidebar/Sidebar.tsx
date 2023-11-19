import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import CollapseRight from 'shared/assets/icons/collapse-right.svg'
import CollapseLeft from 'shared/assets/icons/collapse-left.svg'
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(() => SidebarItemsList.map((item) => (
		<SidebarItem
			item={item}
			collapsed={collapsed}
			key={item.path}
		/>
	)), [collapsed]);

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<div className={classNames(cls.items, { [cls.itemCollapsed]: collapsed })}>
				{itemsList}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<Button
					data-testid="sidebar-toggle"
					onClick={onToggle}
					className={cls.collapseBtn}
					theme={ButtonTheme.BACKGROUND_INVERTED}
					size={ButtonSize.L}
					square
				>
					{collapsed ? <CollapseRight width="32" height="32" /> : <CollapseLeft width="32" height="32" />}
				</Button>
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
});
