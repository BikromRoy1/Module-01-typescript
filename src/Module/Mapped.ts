const arrayOfNumber = [1, 2, 3, 4, 5];

const arrayOfString = arrayOfNumber.map((number) => number.toString());

console.log(arrayOfString);

type AreaNumber = {
  width: number;
  height: number;
};

type AreaString = {
  width: string;
  height: string;
};

type area = {
  [key in 'height' | 'width']: number;
};

type AreaReadOnly = {
  readonly width: number;
  readonly height: number;
};

const rectangleArea: AreaReadOnly = {
  width: 10,
  height: 10,
};

rectangleArea.height = 10;

type A = AreaNumber['height']; // looks like type

type B = keyof AreaNumber; // "width" | "height"
