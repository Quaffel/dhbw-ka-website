export function buildClassNames<S extends { [styleRuleName: string]: string }>(
  stylesObject: S,
  baseClasses: Array<keyof S>,
  conditionalClasses?: Array<Array<keyof S>>,
  conditions?: Array<boolean>
): string {
  if (!!conditionalClasses != !!conditions) {
    throw new Error("Either both, conditionalClasses and conditions must be given or none of them");
  }
  if (conditions && conditions.length !== conditionalClasses?.length) {
    throw new Error("Conditions must be of same size as conditional classes");
  }

  const activeClasses = (conditionalClasses
    // Safe cast: If conditional classes are given, conditions are given as well (see first assertion)
    ?.filter((_, index) => (conditions as NonNullable<typeof conditions>)[index])
    ?.flatMap(value => value) // Using Array#flat causes typing issues
    ?.concat(baseClasses)) ?? baseClasses;

  return activeClasses
    .map(className => stylesObject[className])
    .join(" ");
}

export function buildClassNamesComplex<S extends { [styleRuleName: string]: string }, C extends { [collectionName: string]: boolean }>(
  stylesObject: S,
  classCollections: { [K in keyof C]: Array<string> },
  conditions: C
): string {
  return Object.entries(classCollections)
    .filter(([collectionName,]) => conditions[collectionName])
    .flatMap(([, collectionClassNames]) => collectionClassNames)
    .map(className => stylesObject[className])
    .join(" ");
}
