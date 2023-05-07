import { it } from "vitest";
import { add } from "../app";
console.log(add);

it("should return the sum of the argument", () => {
  const a = 2;
  const b = 4;
  const sum = (a + b).toString();

  const result = add(a, b);
  expect(result).toBe(sum);
});
