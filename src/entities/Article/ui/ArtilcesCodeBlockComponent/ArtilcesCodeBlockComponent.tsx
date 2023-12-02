import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArtilcesCodeBlockComponent.module.scss'

interface ArtilcesCodeBlockComponent {
	className?: string
}

export const ArtilcesCodeBlockComponent = () => {
	return (
		<div className={classNames(cls.ArtilcesTextBlockComponent)}>
			ArtilcesCodeBlockComponent
		</div>
	)
}
