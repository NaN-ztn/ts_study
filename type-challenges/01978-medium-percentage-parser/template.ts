type ONE<A extends string> = A extends `${infer H}${infer _}` ? (H extends '+' | '-' ? H : '') : '';
type THREE<A extends string> = A extends `${infer _}%` ? '%' : '';
type TWO<A extends string> = A extends `${ONE<A>}${infer M}${THREE<A>}` ? M : '';
type PercentageParser<A extends string> = [ONE<A>, TWO<A>, THREE<A>];
