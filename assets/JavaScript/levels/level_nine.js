const levelNine = {
  floorDimensions: { xRange: 15, yRange: 10 },
  floorData: [
    { x: 4, y: 8, type: "s" },
    { x: 8, y: 3, type: "g" },
    { x: 0, y: 3, type: "b" },
    { x: 0, y: 4, type: "n" },
    { x: 0, y: 5, type: "l" },
    { x: 0, y: 6, type: "n" },
    { x: 1, y: 0, type: "n" },
    { x: 1, y: 1, type: "n" },
    { x: 1, y: 2, type: "n" },
    { x: 1, y: 3, type: "n" },
    { x: 1, y: 6, type: "b" },
    { x: 2, y: 0, type: "n" },
    { x: 2, y: 1, type: "h" },
    { x: 2, y: 2, type: "n" },
    { x: 2, y: 3, type: "n" },
    { x: 2, y: 6, type: "b" },
    { x: 3, y: 0, type: "n" },
    { x: 3, y: 1, type: "n" },
    { x: 3, y: 2, type: "n" },
    { x: 3, y: 3, type: "n" },
    { x: 3, y: 6, type: "n" },
    { x: 3, y: 7, type: "n" },
    { x: 3, y: 8, type: "n" },
    { x: 3, y: 9, type: "n" },
    { x: 4, y: 3, type: "b" },
    { x: 4, y: 4, type: "n" },
    { x: 4, y: 5, type: "n" },
    { x: 4, y: 6, type: "n" },
    { x: 4, y: 7, type: "n" },
    { x: 4, y: 9, type: "n" },
    { x: 5, y: 6, type: "n" },
    { x: 5, y: 7, type: "n" },
    { x: 5, y: 8, type: "n" },
    { x: 5, y: 9, type: "n" },
    { x: 6, y: 6, type: "c" },
    { x: 6, y: 7, type: "c" },
    { x: 6, y: 8, type: "c" },
    { x: 6, y: 9, type: "n" },
    { x: 7, y: 2, type: "n" },
    { x: 7, y: 3, type: "n" },
    { x: 7, y: 4, type: "n" },
    { x: 7, y: 5, type: "c" },
    { x: 7, y: 6, type: "c" },
    { x: 7, y: 7, type: "c" },
    { x: 7, y: 8, type: "c" },
    { x: 7, y: 9, type: "n" },
    { x: 8, y: 2, type: "n" },
    { x: 8, y: 4, type: "n" },
    { x: 8, y: 5, type: "c" },
    { x: 8, y: 6, type: "c" },
    { x: 8, y: 7, type: "c" },
    { x: 8, y: 8, type: "c" },
    { x: 8, y: 9, type: "b" },
    { x: 9, y: 2, type: "n" },
    { x: 9, y: 3, type: "n" },
    { x: 9, y: 4, type: "n" },
    { x: 9, y: 5, type: "c" },
    { x: 9, y: 6, type: "c" },
    { x: 9, y: 7, type: "c" },
    { x: 9, y: 8, type: "c" },
    { x: 10, y: 2, type: "b" },
    { x: 10, y: 6, type: "c" },
    { x: 10, y: 7, type: "c" },
    { x: 10, y: 8, type: "c" },
    { x: 11, y: 2, type: "b" },
    { x: 11, y: 6, type: "n" },
    { x: 11, y: 7, type: "n" },
    { x: 11, y: 8, type: "n" },
    { x: 12, y: 0, type: "n" },
    { x: 12, y: 1, type: "n" },
    { x: 12, y: 2, type: "n" },
    { x: 12, y: 3, type: "n" },
    { x: 12, y: 6, type: "n" },
    { x: 12, y: 7, type: "w" },
    { x: 12, y: 8, type: "n" },
    { x: 13, y: 0, type: "n" },
    { x: 13, y: 1, type: "l" },
    { x: 13, y: 2, type: "n" },
    { x: 13, y: 3, type: "n" },
    { x: 13, y: 6, type: "n" },
    { x: 13, y: 7, type: "n" },
    { x: 13, y: 8, type: "n" },
    { x: 14, y: 0, type: "n" },
    { x: 14, y: 1, type: "n" },
    { x: 14, y: 2, type: "n" },
    { x: 14, y: 3, type: "l" },
    { x: 14, y: 4, type: "n" },
    { x: 14, y: 5, type: "n" },
    { x: 14, y: 6, type: "b" },
  ],
};

module.exports = levelNine;

// refer to bloxors level 23
// warp [12, 7] warps to [12, 7], [2, 2]
// lightSwitch [14, 3] toggles ?
// lightSwitch [13, 1] toggles bridges [1-6 , 2-6] and bridge [8-9]
// lightSwitch [0, 5] toggles bridges [1-6 , 2-6] and bridge [0, 3]
// heavySwitch [2, 1] toggles bridge [4, 3]
// bridge [14-6] default is ?
// bridges [10-2, 11-2] default is ?
// bridge [8, 9] default is on
// bridges [1-6, 2-6] default is ?
// bridge [0, 3] default is off
// bridge [4, 3] default is off