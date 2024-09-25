export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.*\\.e2e-spec\\.ts$',
    transform: { '^.+\\.(t|s)$': 'ts-jest' },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node'
}