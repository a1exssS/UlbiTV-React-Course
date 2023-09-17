import {useTheme, Theme} from 'app/providers/ThemeProvider';
import classes from './ToggleButton.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/sun-svgrepo-com.svg';
import DarkIcon from 'shared/assets/icons/moon-svgrepo-com.svg';

type ToggleButton = {
	className?: string;
};

export function ToggleButton({className}: ToggleButton) {
	const {theme, toggleTheme} = useTheme();
	return (
		<button className={classNames(classes.ToggleButton, {}, [className])} onClick={() => {
			toggleTheme();
		}}>
			{
				theme === Theme.LIGHT ? <DarkIcon width='30px' height='30px' /> : <LightIcon width='30px' height='30px' />
			}
		</button>
	);
}
