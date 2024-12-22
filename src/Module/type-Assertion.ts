let emoni: any;

emoni = 'Web app development';

<string>emoni.length;

function kgToGram(params: number | string): number | string | undefined {
  if (typeof params === 'string') {
    const values = parseFloat(params) * 1000;
    return `This converted result is ${values} Grams`;
  }
  if (typeof params === 'number') {
    const values = params * 1000;
    return values;
  }
}

const result = kgToGram(1000) as number;
const resultToString = kgToGram('600') as string;
