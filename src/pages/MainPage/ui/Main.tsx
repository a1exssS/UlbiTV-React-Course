import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';

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
