import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetails.module.scss'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsSliceReducer } from '../../model/slice/articleSlice'
import { useEffect, memo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { t } from 'i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticlesDetails {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articles: articleDetailsSliceReducer
}

export const ArticlesDetails = memo(({ id }: ArticlesDetails) => {

	const dispatch = useAppDispatch()

	const data = useSelector(getArticleDetailsData)
	const isLoading = useSelector(getArticleDetailsIsLoading)
	const error = useSelector(getArticleDetailsError)

	useEffect(() => {
		dispatch(fetchArticleById(id))
	}, [dispatch, id])

	let content;

	if (!isLoading) {
		content = (
			<div>
				<Skeleton className={cls.avatar} height={200} width={200} border={'50%'} />
				<Skeleton className={cls.title} height={32} width={300} />
				<Skeleton className={cls.skeleton} height={24} width={600} />
				<Skeleton className={cls.skeleton} height={200} width="100%" />
				<Skeleton className={cls.skeleton} height={200} width="100%" />

			</div>
		)
	} else if (error) {
		content = (
			<Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузки статьи')} theme={TextTheme.ERROR} />
		)
	} else {
		content = (
			<div>Artilce</div>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={classNames(cls.ArticlesDetails)}>
				{content}
			</div>
		</DynamicModuleLoader>
	)
})