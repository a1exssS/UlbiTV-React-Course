import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss'

export default function NotFoundPage() {
	const { t } = useTranslation();
	return (
		<div className={classNames(classes.NotFoundPage, {}, [])}>{t('Страница не найдена')}</div>
	);
}
