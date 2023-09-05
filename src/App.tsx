import React, { Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainLazy } from './pages/MainPage/Main.lazy'
import { AboutLazy } from './pages/AboutPage/About.lazy'
import { Theme } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export default function App() {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={() => toggleTheme()}>Toggle Theme</button>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainLazy />} />
					<Route path='/about' element={<AboutLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}
