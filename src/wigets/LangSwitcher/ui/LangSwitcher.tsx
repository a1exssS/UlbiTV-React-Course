import classes from './LangSwithcer.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import 'shared/config/i18n/i18n';
import {useTranslation} from 'react-i18next';

type LangSwitcher = {
	className?: string;
};

export function LangSwitcher({className}: LangSwitcher) {
	const {t, i18n} = useTranslation();
	return (
		<button className={classNames(classes.button, {}, [className])} onClick={async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}>
			{i18n.language}
		</button>
	);
}
