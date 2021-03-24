export type NonEmptyArray<T> = [T, ...T[]];

export function isNonEmptyArray<T>(arr: Array<T>): arr is NonEmptyArray<T> {
  return arr.length > 0;
}
