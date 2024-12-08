import '@testing-library/jest-dom';
import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve([]),
	})
);

const customJestConfig = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
};

module.exports = createJestConfig(customJestConfig);
