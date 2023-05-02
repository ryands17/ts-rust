type Maybe<T> = T | null | undefined;

// The "Option" type
type Some<T> = { type: 'Some'; value: T };
const Some = <T>(value: T): Some<T> => ({ type: 'Some', value });

type None = { type: 'None' };
const None = (): None => ({ type: 'None' });

type Option<T> = Some<T> | None;

const isArg = <T>(val: Maybe<T>): val is T => val !== null && val !== undefined;

export const createOption = <T>(fn: () => Maybe<T>): Option<T> => {
  try {
    const value = fn();
    return isArg(value) ? Some(value) : None();
  } catch (error) {
    return None();
  }
};

// The "Result" type
// type Ok<T> = { type: 'Ok'; value: T };
// const Ok = <T>(value: T): Ok<T> => ({ type: 'Ok', value });

// type Err = { type: 'Error'; err: unknown };
// const Err = (err: unknown): Err => ({ type: 'Error', err });

// type Result<T> = Ok<T> | Err;

// export const createResult = <T>(fn: () => Maybe<T>): Result<T> => {
//   try {
//     const arg = fn();
//     return isArg(arg) ? Ok(arg) : Err(Error());
//   } catch (error) {
//     return Err(error);
//   }
// };

// export function unwrap<T>(arg: Option<T>): T;
// export function unwrap<T>(arg: Result<T>): T;
// export function unwrap<T>(arg: any): T {
//   if (arg.type === 'Some') return arg.value;
//   if (arg.type === 'Ok') return arg.value;
//   if (arg.type === 'Error') {
//     throw arg.err;
//   }

//   throw Error('Cannot unwrap value!');
// }

// export function unwrapOr<T>(arg: Option<T>, defaultValue: T): T;
// export function unwrapOr<T>(arg: Result<T>, defaultValue: T): T;
// export function unwrapOr<T>(arg: any, defaultValue: T): T {
//   try {
//     return unwrap(arg);
//   } catch (e) {
//     return defaultValue;
//   }
// }

// export const createAsyncResult = async <T>(fn: () => Promise<Maybe<T>>): Promise<Result<T>> => {
//   try {
//     const val = await fn();
//     return createResult(() => val);
//   } catch (error) {
//     return Err(error);
//   }
// };
