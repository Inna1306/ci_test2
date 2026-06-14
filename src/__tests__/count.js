import sortHeroes from '../count.js';

const dataList = [
    [
        [
            {
                name: 'мечник', health: 10
            },
            {
                name: 'маг', health: 100
            },
            {
                name: 'лучник', health: 80
            },
        ],
        [
            {
                name: 'маг', health: 100
            },
            {
                name: 'лучник', health: 80
            },
            {
                name: 'мечник', health: 10
            },
        ],
    ],
    [
        [],
        [],
    ],
    [
        [
            {
                name: 'лучник', health: 50
            }
        ],
        [
            {
                name: 'лучник', health: 50
            }
        ],
    ],
    [
        [
            {
                name: 'A', health: 100
            },
            {
                name: 'B', health: 100
            },
            {
                name: 'C', health: 90
            },
        ],
        [
            {
                name: 'A', health: 100
            },
            {
                name: 'B', health: 100
            },
            {
                name: 'C', health: 90
            },
        ],
    ],
];

test.each(dataList)('sortHeroes(%o) должен вернуть %o', (heroes, expected) => {
    const result = sortHeroes(heroes);
    expect(result).toEqual(expected);
});
