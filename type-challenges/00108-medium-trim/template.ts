// type TrimRight<S extends string> = S extends `${infer Rest}${Space}` ? TrimRight<Rest> : S;
// type Trim<S extends string> = TrimLeft<TrimRight<S>>;

type Trim<S extends string> = S extends `${Space}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer _Rest}${Space}`
  ? Trim<_Rest>
  : S;
