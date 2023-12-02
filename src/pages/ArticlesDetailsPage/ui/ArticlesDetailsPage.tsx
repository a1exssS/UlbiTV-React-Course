import { ArticlesDetails } from 'entities/Article'
import { t } from 'i18next'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

const ArticlesDetailsPage = () => {

	const { id } = useParams<{ id: string; }>()

	const { t } = useTranslation('article-details')

	if (!id) {
		return (
			<div>
				{t('Статья не найдена')}
			</div>
		)
	}

	return (
		<div><ArticlesDetails id={id} /></div>
	)
}
export default memo(ArticlesDetailsPage)