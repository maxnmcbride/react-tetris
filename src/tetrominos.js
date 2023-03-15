export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0' },
    // this is our cleared cell when we are not using any tetrominos
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230',
    },
    J: {
        shape: [
            [0, 'J', 0,],
            [0, 'J', 0,],
            ['J', 'J', 0,]
        ],
        color: '36, 95, 223',
    },
    L: {
        shape: [
            [0, 'L', 0,],
            [0, 'L', 0,],
            [0, 'L', 'L',]
        ],
        color: '223, 173, 36',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '223, 217, 36',
    },
    S: {
        shape: [
            [0, 'S', 'S',],
            ['S', 'S', 0,],
            [0, 0, 0,]
        ],
        color: '48, 211, 56',
    },
    T: {
        shape: [
            [0, 0, 0,],
            ['T', 'T', 'T',],
            [0, 'T', 0]
        ],
        color: '132, 61, 198',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0,],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randomTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randomTetromino];
}

// this function is a fairly straight forward/common method for generating a object, number, element
// from a given set. We first are assigning a constant to the name values of each object we created.
// 'IJLOSTZ'. Then we are assigning the variable randomTetromino which is randomly generating a value
// using the Math.random() method