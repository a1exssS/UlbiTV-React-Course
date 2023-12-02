import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesImageBlockComponent.module.scss'

interface ArticlesImageBlockComponent {
	className?: string
}

export const ArticlesImageBlockComponent = () => {
	return (
		<div className={classNames(cls.ArticlesImageBlockComponent)}>
			Artilce
		</div>
	)
}
