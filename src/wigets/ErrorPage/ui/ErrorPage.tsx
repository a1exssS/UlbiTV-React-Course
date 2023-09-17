import classes from './ErrorPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';

type ErrorPageProps = {
	className?: string;
};

const LinkToMainPage = () => {
	location.reload()
}

export function ErrorPage({ className }: ErrorPageProps) {
	const { t, i18n } = useTranslation();
	return (
		<div className={classNames(classes.ErrorPage, {}, [])}>
			<span>{t("Что то пошло не так...")}</span>
			<button onClick={LinkToMainPage}>{t("Обновить страницу")}</button>
		</div>
	);
}
