const gameboardCells = [
  {
    borders: [1, 0, 0, 1],
    dot: "large",
    id: "r0c0",
    item: "none",
    pacman: true,
    traversable: true,
    x: 0,
    y: 0
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r0c1",
    item: "none",
    pacman: false,
    traversable: true,
    x: 1,
    y: 0
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r0c2",
    item: "none",
    pacman: false,
    traversable: true,
    x: 2,
    y: 0
  },
  {
    borders: [1, 1, 0, 0],
    dot: "large",
    id: "r0c3",
    item: "none",
    pacman: false,
    traversable: true,
    x: 3,
    y: 0
  },
  {
    borders: [1, 0, 0, 1],
    dot: "none",
    id: "r0c4",
    item: "none",
    pacman: false,
    traversable: false,
    x: 4,
    y: 0
  },
  {
    borders: [1, 1, 0, 0],
    dot: "none",
    id: "r0c5",
    item: "none",
    pacman: false,
    traversable: false,
    x: 5,
    y: 0
  },
  {
    borders: [1, 0, 0, 1],
    dot: "large",
    id: "r0c6",
    item: "none",
    pacman: false,
    traversable: true,
    x: 6,
    y: 0
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r0c7",
    item: "none",
    pacman: false,
    traversable: true,
    x: 7,
    y: 0
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r0c8",
    item: "none",
    pacman: false,
    traversable: true,
    x: 8,
    y: 0
  },
  {
    borders: [1, 1, 0, 0],
    dot: "large",
    id: "r0c9",
    item: "none",
    pacman: false,
    traversable: true,
    x: 9,
    y: 0
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r1c0",
    item: "none",
    pacman: false,
    traversable: true,
    x: 0,
    y: 1
  },
  {
    borders: [1, 0, 0, 1],
    dot: "none",
    id: "r1c1",
    item: "none",
    pacman: false,
    traversable: false,
    x: 1,
    y: 1
  },
  {
    borders: [1, 1, 0, 0],
    dot: "none",
    id: "r1c2",
    item: "none",
    pacman: false,
    traversable: false,
    x: 2,
    y: 1
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r1c3",
    item: "none",
    pacman: false,
    traversable: true,
    x: 3,
    y: 1
  },
  {
    borders: [0, 0, 1, 1],
    dot: "none",
    id: "r1c4",
    item: "none",
    pacman: false,
    traversable: false,
    x: 4,
    y: 1
  },
  {
    borders: [0, 1, 1, 0],
    dot: "none",
    id: "r1c5",
    item: "none",
    pacman: false,
    traversable: false,
    x: 5,
    y: 1
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r1c6",
    item: "none",
    pacman: false,
    traversable: true,
    x: 6,
    y: 1
  },
  {
    borders: [1, 0, 0, 1],
    dot: "none",
    id: "r1c7",
    item: "none",
    pacman: false,
    traversable: false,
    x: 7,
    y: 1
  },
  {
    borders: [1, 1, 0, 0],
    dot: "none",
    id: "r1c8",
    item: "none",
    pacman: false,
    traversable: false,
    x: 8,
    y: 1
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r1c9",
    item: "none",
    pacman: false,
    traversable: true,
    x: 9,
    y: 1
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r2c0",
    item: "none",
    pacman: false,
    traversable: true,
    x: 0,
    y: 2
  },
  {
    borders: [0, 0, 1, 1],
    dot: "none",
    id: "r2c1",
    item: "none",
    pacman: false,
    traversable: false,
    x: 1,
    y: 2
  },
  {
    borders: [0, 1, 1, 0],
    dot: "none",
    id: "r2c2",
    item: "none",
    pacman: false,
    traversable: false,
    x: 2,
    y: 2
  },
  {
    borders: [0, 0, 0, 1],
    dot: "small",
    id: "r2c3",
    item: "none",
    pacman: false,
    traversable: true,
    x: 3,
    y: 2
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r2c4",
    item: "none",
    pacman: false,
    traversable: true,
    x: 4,
    y: 2
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r2c5",
    item: "none",
    pacman: false,
    traversable: true,
    x: 5,
    y: 2
  },
  {
    borders: [0, 1, 0, 0],
    dot: "small",
    id: "r2c6",
    item: "none",
    pacman: false,
    traversable: true,
    x: 6,
    y: 2
  },
  {
    borders: [0, 0, 1, 1],
    dot: "none",
    id: "r2c7",
    item: "none",
    pacman: false,
    traversable: false,
    x: 7,
    y: 2
  },
  {
    borders: [0, 1, 1, 0],
    dot: "none",
    id: "r2c8",
    item: "none",
    pacman: false,
    traversable: false,
    x: 8,
    y: 2
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r2c9",
    item: "none",
    pacman: false,
    traversable: true,
    x: 9,
    y: 2
  },
  {
    borders: [0, 0, 0, 0],
    dot: "small",
    id: "r3c0",
    item: "none",
    pacman: false,
    traversable: true,
    x: 0,
    y: 3
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r3c1",
    item: "none",
    pacman: false,
    traversable: true,
    x: 1,
    y: 3
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r3c2",
    item: "none",
    pacman: false,
    traversable: true,
    x: 2,
    y: 3
  },
  {
    borders: [0, 1, 1, 0],
    dot: "small",
    id: "r3c3",
    item: "none",
    pacman: false,
    traversable: true,
    x: 3,
    y: 3
  },
  {
    borders: [1, 0, 0, 1],
    dot: "none",
    id: "r3c4",
    item: "none",
    pacman: false,
    traversable: false,
    x: 4,
    y: 3
  },
  {
    borders: [1, 1, 0, 0],
    dot: "none",
    id: "r3c5",
    item: "none",
    pacman: false,
    traversable: false,
    x: 5,
    y: 3
  },
  {
    borders: [0, 0, 1, 1],
    dot: "small",
    id: "r3c6",
    item: "none",
    pacman: false,
    traversable: true,
    x: 6,
    y: 3
  },
  {
    borders: [1, 0, 0, 0],
    dot: "small",
    id: "r3c7",
    item: "none",
    pacman: false,
    traversable: true,
    x: 7,
    y: 3
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r3c8",
    item: "none",
    pacman: false,
    traversable: true,
    x: 8,
    y: 3
  },
  {
    borders: [0, 0, 0, 0],
    dot: "small",
    id: "r3c9",
    item: "none",
    pacman: false,
    traversable: true,
    x: 9,
    y: 3
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r4c0",
    item: "none",
    pacman: false,
    traversable: true,
    x: 0,
    y: 4
  },
  {
    borders: [1, 0, 1, 1],
    dot: "none",
    id: "r4c1",
    item: "none",
    pacman: false,
    traversable: false,
    x: 1,
    y: 4
  },
  {
    borders: [1, 0, 1, 0],
    dot: "none",
    id: "r4c2",
    item: "none",
    pacman: false,
    traversable: false,
    x: 2,
    y: 4
  },
  {
    borders: [1, 0, 1, 0],
    dot: "none",
    id: "r4c3",
    item: "none",
    pacman: false,
    traversable: false,
    x: 3,
    y: 4
  },
  {
    borders: [0, 0, 1, 0],
    dot: "none",
    id: "r4c4",
    item: "none",
    pacman: false,
    traversable: false,
    x: 4,
    y: 4
  },
  {
    borders: [0, 0, 1, 0],
    dot: "none",
    id: "r4c5",
    item: "none",
    pacman: false,
    traversable: false,
    x: 5,
    y: 4
  },
  {
    borders: [1, 1, 1, 0],
    dot: "none",
    id: "r4c6",
    item: "none",
    pacman: false,
    traversable: false,
    x: 6,
    y: 4
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r4c7",
    item: "none",
    pacman: false,
    traversable: true,
    x: 7,
    y: 4
  },
  {
    borders: [1, 1, 1, 1],
    dot: "none",
    id: "r4c8",
    item: "none",
    pacman: false,
    traversable: false,
    x: 8,
    y: 4
  },
  {
    borders: [0, 1, 0, 1],
    dot: "small",
    id: "r4c9",
    item: "none",
    pacman: false,
    traversable: true,
    x: 9,
    y: 4
  },
  {
    borders: [0, 0, 1, 1],
    dot: "large",
    id: "r5c0",
    item: "none",
    pacman: false,
    traversable: true,
    x: 0,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c1",
    item: "none",
    pacman: false,
    traversable: true,
    x: 1,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c2",
    item: "none",
    pacman: false,
    traversable: true,
    x: 2,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c3",
    item: "none",
    pacman: false,
    traversable: true,
    x: 3,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c4",
    item: "none",
    pacman: false,
    traversable: true,
    x: 4,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c5",
    item: "none",
    pacman: false,
    traversable: true,
    x: 5,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c6",
    item: "none",
    pacman: false,
    traversable: true,
    x: 6,
    y: 5
  },
  {
    borders: [0, 0, 1, 0],
    dot: "small",
    id: "r5c7",
    item: "none",
    pacman: false,
    traversable: true,
    x: 7,
    y: 5
  },
  {
    borders: [1, 0, 1, 0],
    dot: "small",
    id: "r5c8",
    item: "none",
    pacman: false,
    traversable: true,
    x: 8,
    y: 5
  },
  {
    borders: [0, 1, 1, 0],
    dot: "large",
    id: "r5c9",
    item: "none",
    pacman: false,
    traversable: true,
    x: 9,
    y: 5
  }
];

export default gameboardCells;