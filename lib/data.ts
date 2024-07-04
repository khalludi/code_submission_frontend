type TestCase = {
  numCourses: number;
  prerequisites: number[][];
};
export const TEST_CASES: TestCase[] = [
  { numCourses: 2, prerequisites: [[0, 1]] },
  {
    numCourses: 2,
    prerequisites: [
      [1, 0],
      [0, 1],
    ],
  },
  {
    numCourses: 5,
    prerequisites: [
      [1, 4],
      [2, 4],
      [3, 1],
      [3, 2],
    ],
  },
  {
    numCourses: 7,
    prerequisites: [
      [1, 0],
      [0, 3],
      [0, 2],
      [3, 2],
      [2, 5],
      [4, 5],
      [5, 6],
      [2, 4],
    ],
  },
];
