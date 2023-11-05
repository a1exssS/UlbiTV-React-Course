import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'wigets/Navbar'
import { Sidebar } from 'wigets/Sidebar/ui/Sidebar'
import { Suspense, useState } from 'react'
import PageLoader from 'wigets/PageLoader/ui/PageLoader'
import { Modal } from 'shared/ui/Modal/Modal'

export default function App() {
	const { theme } = useTheme()

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
