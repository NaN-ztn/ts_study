type StringToUnion<T extends string, A = never> = T extends `${infer F}${infer R}` ? StringToUnion<R, A | F> : A;

