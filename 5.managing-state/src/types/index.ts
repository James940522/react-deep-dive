/* eslint-disable @typescript-eslint/no-explicit-any */

export type Initializer<T> = T extends any ? T | ((prev: T) => T) : never;

export type Store<T> = {
  get: () => T;
  set: (action: Initializer<T>) => T;
  subscribe: (callback: () => void) => () => void;
};
