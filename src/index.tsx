import 'app/styles/index.scss'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import React from 'react'

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StoreProvider>
			<BrowserRouter>
				<ErrorBoundary>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</BrowserRouter>,
		</StoreProvider>
	</React.StrictMode>
);
