import { Counter } from 'entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export default function Main() {
	const { t } = useTranslation();
	const [value, setValue] = useState('')

	const onChangeValue = (e: string) => {
		setValue(e)
	}

	return (
		<>
			<div>{t('Главная страница')}</div>
		</>
	);
}
