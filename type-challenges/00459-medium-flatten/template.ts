type Flatten<Arr extends Array<any>, res extends Array<any> = []> = Arr extends [infer F, ...infer R]
  ? F extends Array<any>
    ? Flatten<R, [...res, ...Flatten<F>]>
    : Flatten<R, [...res, F]>
  : res;
