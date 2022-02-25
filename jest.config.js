// Source: https://github.com/murajun1978/react-jest-parcel-typescript/blob/master/jest.config.js
module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
