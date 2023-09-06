import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'wigets/Navbar'

export default function App() {
	const { theme, } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	)
}
