import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/RouteConfig/routeConfig';
import PageLoader from 'wigets/PageLoader/ui/PageLoader';

export function AppRouter() {
	return (
		<Suspense fallback={<PageLoader />}>
			<div className='page-wrapper'>
				<Routes>
					{Object.values(routeConfig).map(({ element, path }) => (
						<Route key={path} element={element} path={path} />
					))}
				</Routes>

			</div>
		</Suspense>
	);
}
