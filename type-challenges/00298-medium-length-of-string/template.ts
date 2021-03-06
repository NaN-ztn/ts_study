type LengthOfString<S extends string> = StringToArray<S>['length'];
type StringToArray<S extends string> = S extends ''
  ? []
  : S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : never;
