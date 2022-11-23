import babel from '@rollup/plugin-babel';

const esm = {
	input: 'src/index.js',
	output: {
		format: 'es',
		file: './dist/js/helper.esm.js',
	}
};

const umd = {
	input: 'src/index.js',
	output: {
		format: 'umd',
		name: 'Helper',
		file: './dist/js/helper.js',
	},
	plugins: [babel({babelHelpers: 'bundled'})]
};

export default [umd, esm];