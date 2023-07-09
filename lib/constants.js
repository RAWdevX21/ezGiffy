
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
const DEFAULT_IGNORES = [
	'**/node_modules/**',
	'**/bower_components/**',
	'flow-typed/**',
	'coverage/**',
	'{tmp,temp}/**',
	'**/*.min.js',
	'vendor/**',
	'dist/**',
	'tap-snapshots/*.{cjs,js}',
];

/**
List of options that values will be concatenanted during option merge.
Only applies to options defined as an Array.
*/
const MERGE_OPTIONS_CONCAT = [
	'extends',
	'envs',
	'globals',
	'plugins',
];

const TYPESCRIPT_EXTENSION = [
	'ts',
	'tsx',
];

const DEFAULT_EXTENSION = [
	'js',
	'jsx',
	'mjs',
	'cjs',
	...TYPESCRIPT_EXTENSION,
];

/**
Define the rules config that are overwritten only for specific version of Node.js based on `engines.node` in package.json or the `nodeVersion` option.

The keys are rule names and the values are an Object with a valid semver (`4.0.0` is valid `4` is not) as keys and the rule configuration as values.

Each entry define the rule config and the maximum Node.js version for which to set it.
The entry with the lowest version that is compliant with the `engines.node`/`nodeVersion` range will be used.

@type {Object}

@example
```
{
	'plugin/rule': {
		'6.0.0': ['error', {prop: 'node-6-conf'}],
		'8.0.0': ['error', {prop: 'node-8-conf'}]
	}
}
```

With `engines.node` set to `>=4` the rule `plugin/rule` will not be used.
With `engines.node` set to `>=6` the rule `plugin/rule` will be used with the config `{prop: 'node-6-conf'}`.
With `engines.node` set to `>=8` the rule `plugin/rule` will be used with the config `{prop: 'node-8-conf'}`.
*/
const ENGINE_RULES = {
	'unicorn/prefer-spread': {
		'5.0.0': 'off',
	},
	'unicorn/no-new-buffer': {
		'5.10.0': 'off',
	},
	'prefer-rest-params': {
		'6.0.0': 'off',
	},
	'prefer-destructuring': {
		'6.0.0': 'off',
	},
	'promise/prefer-await-to-then': {
		'7.6.0': 'off',
	},
	'prefer-object-spread': {
		'8.3.0': 'off',
	},
	'n/prefer-global/url-search-params': {
		'10.0.0': 'off',
	},
	'n/prefer-global/url': {
		'10.0.0': 'off',
	},
	'no-useless-catch': {
		'10.0.0': 'off',
	},
	'prefer-named-capture-group': {
		'10.0.0': 'off',
	},
	'n/prefer-global/text-encoder': {
		'11.0.0': 'off',
	},
	'n/prefer-global/text-decoder': {
		'11.0.0': 'off',
	},
	'unicorn/prefer-flat-map': {
		'11.0.0': 'off',
	},
	'n/prefer-promises/dns': {
		'11.14.0': 'off',
	},
	'n/prefer-promises/fs': {
		'11.14.0': 'off',
	},
};

const MODULE_NAME = 'xo';

const CONFIG_FILES = [
	'package.json',
	`.${MODULE_NAME}-config`,
	`.${MODULE_NAME}-config.json`,
	`.${MODULE_NAME}-config.js`,
	`.${MODULE_NAME}-config.cjs`,
	`${MODULE_NAME}.config.js`,
	`${MODULE_NAME}.config.cjs`,
];

const TSCONFIG_DEFAULTS = {
	compilerOptions: {
		target: 'es2018',
		newLine: 'lf',
		strict: true,
		noImplicitReturns: true,
		noUnusedLocals: true,
		noUnusedParameters: true,
		noFallthroughCasesInSwitch: true,
	},
};

const CACHE_DIR_NAME = 'xo-linter';

export {
	DEFAULT_IGNORES,
	DEFAULT_EXTENSION,
	TYPESCRIPT_EXTENSION,
	ENGINE_RULES,
	MODULE_NAME,
	CONFIG_FILES,
	MERGE_OPTIONS_CONCAT,
	TSCONFIG_DEFAULTS,
	CACHE_DIR_NAME,
};