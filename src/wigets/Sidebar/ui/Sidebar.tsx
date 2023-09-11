import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { ToggleButton } from 'wigets/ThemeButton'
import { LangSwitcher } from 'wigets/LangSwitcher'
import { useState } from 'react'
import { CollapseButton } from 'wigets/CollapseButton/ui/CollapseButton'
interface SidebarProps {
	className?: string,
}

export function Sidebar({ className }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
			<div className={classNames(classes.box, {}, [className])}>
				<div className={classNames(classes.items, {}, [className])}>
					<CollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
				</div>
				<div className={classNames(classes.items, {}, [className])}>
					<ToggleButton />
					<LangSwitcher />
				</div>
			</div>
		</div>
	)
}