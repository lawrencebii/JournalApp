export const concatStyles = (style1: any, ...args: any[]) => {
    return args.reduce(
      (acc, curr) => {
        return {
          ...acc,
          ...curr,
        };
      },
      {...style1},
    );
  };
  