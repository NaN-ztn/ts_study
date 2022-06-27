declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [k in keyof T]: T[k] extends Promise<infer G> ? G : T[k];
}>;
