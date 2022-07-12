type KebabCase<S> = S extends `${infer L}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<L>}${KebabCase<Rest>}`
    : `${Lowercase<L>}-${KebabCase<Rest>}`
  : S;
