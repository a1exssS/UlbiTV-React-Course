import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		src: path.resolve(__dirname, 'src'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		build: path.resolve(__dirname, 'dist'),

	};

	const mode = env.mode || 'development';
	const PORT = env.port || 3000;
	const isDev = mode === 'development';

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});

	return config;
};
