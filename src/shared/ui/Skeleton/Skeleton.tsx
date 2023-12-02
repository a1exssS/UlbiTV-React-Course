import React from 'react'
import cls from './Skeleton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

interface Skeleton {
	className?: string;
	width: string | number;
	height: string | number;
	border?: string | number;
}

export const Skeleton = ({ height, width, border, className }: Skeleton) => {

	const styles: React.CSSProperties = {
		width,
		height,
		borderRadius: border,
	}

	return (
		<div style={styles} className={classNames(cls.Skeleton, {}, [className])}>

		</div>
	)
}
