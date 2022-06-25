type MyReturnType<T> = T extends (...args: any) => infer x ? x : never;
