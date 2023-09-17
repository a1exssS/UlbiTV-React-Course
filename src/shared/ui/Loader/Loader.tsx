import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from "./Loader.module.scss"

export function Loader() {
	return (
		<div className={classNames(classes.LdsRoller, {}, [])}>
			<div>

			</div>
			<div>

			</div>
			<div>

			</div>
			<div>

			</div>
			<div>

			</div>
			<div>

			</div>
			<div>

			</div>
			<div>

			</div>
		</div>
	)
}
