import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArtilcesTextBlockComponent.module.scss'

interface ArtilcesTextBlockComponent {
	className?: string
}

export const ArtilcesTextBlockComponent = () => {
	return (
		<div className={classNames(cls.ArtilcesTextBlockComponent)}>
			Artilce
		</div>
	)
}
