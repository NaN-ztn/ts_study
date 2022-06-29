type Space = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Space}${infer Rest}` ? TrimLeft<Rest> : S;
