import {describe, expect, it} from 'vitest';
import { Fruits } from '../src/components/Fruits';

describe('Fruit Snapshot Test', () => {
  it('Should load fruit data', async () => {

    const fruit = await Fruits('strawberry');

    // Expect is used to create assertions
    expect(fruit).toMatchInlineSnapshot(`
    {
      "family": "Rosaceae",
      "genus": "Fragaria",
      "id": 1,
      "name": "strawberry",
      "nutritions": {
        "calories": 29,
        "carbohydrates": 5.5,
        "fat": 0.4,
        "protein": 0.8,
        "sugar": 5.4,
      },
      "order": "Rosales",
    }
    `);
  });

  it('Should create snapshots file', async () => {
    const fruit = await Fruits('strawberry')

    expect(fruit).toMatchSnapshot();
  })

});