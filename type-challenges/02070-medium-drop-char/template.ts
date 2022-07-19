type DropChar<S, C, res extends string = ''> = S extends `${infer F}${infer R}`
  ? F extends C
    ? DropChar<R, C, res>
    : DropChar<R, C, `${res}${F}`>
  : res;
