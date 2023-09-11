import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/RouteConfig/routeConfig'

export function AppRouter() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='page-wrapper'>
				<Routes>
					{Object.values(routeConfig).map(({ element, path }) => (
						<Route key={path} element={element} path={path} />
					))}
				</Routes>

			</div>
		</Suspense>
	)
}
