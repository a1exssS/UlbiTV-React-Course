import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

export default function About() {
	const { t } = useTranslation('about');
	return (
		<div>
			{t('О сайте')}
			<Counter />

		</div>
	);
}
