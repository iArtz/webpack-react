module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ["plugin:react/recommended", "airbnb"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			js: true,
			impliedStrict: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }]
	},
	ignorePatterns: ["dist/", "node_modules/"]
};
