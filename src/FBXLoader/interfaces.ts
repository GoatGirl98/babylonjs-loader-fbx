export interface IStringDictionary<T> {
    [index: string]: T;
}

export interface INumberDictionary<T> {
    [index: number]: T;
}

export type Undefinable<T> = undefined | T;
