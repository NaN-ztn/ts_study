type AppendArgument<Fn, A> = Fn extends (...args: infer y) => infer R ? (...args: [...y, A]) => R : never;
