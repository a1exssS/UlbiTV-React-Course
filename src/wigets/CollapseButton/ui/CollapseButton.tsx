import classes from './CollapseButton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import CollapsedLeft from "shared/assets/icons/collapse-left-svgrepo-com.svg"
import CollapsedRight from "shared/assets/icons/collapse-right-svgrepo-com.svg"

interface CollapseButton {
	className?: string,
	setCollapsed?: Function,
	collapsed?: boolean,
}

export function CollapseButton({ className, setCollapsed, collapsed }: CollapseButton) {
	return (
		<button onClick={() => setCollapsed(!collapsed)} className={classNames(classes.button, {}, [className])}>
			{collapsed ? <CollapsedRight className={classes.CollapsedRight} /> : <CollapsedLeft width="40px" height="40px" />}
		</button>
	)
}
