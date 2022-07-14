type AnyOf<T extends readonly any[]> = T extends Array<0 | '' | false | [] | { [key in any]: never }> ? false : true;
