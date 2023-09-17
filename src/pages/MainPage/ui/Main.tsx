import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Main() {
	const { t } = useTranslation();
	return (
		<div>{t('Главная страница')}</div>
	);
}
