import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from "./PageLoader.module.scss"
import { Loader } from 'shared/ui/Loader/Loader'
export default function PageLoader() {
	return (
		<div className={classNames(classes.page__loader, {}, [])}>
			<Loader />
		</div>
	)
}
