import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'wigets/Navbar'
import { Sidebar } from 'wigets/Sidebar/ui/Sidebar'
import { Suspense } from 'react'
import PageLoader from 'wigets/PageLoader/ui/PageLoader'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userActions } from 'entities/User'

export default function App() {
	const { theme } = useTheme()

	const dispatch = useDispatch()

	useEffect(() => {

		dispatch(userActions.initAuthData())

	}, [dispatch])


	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />

				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}
