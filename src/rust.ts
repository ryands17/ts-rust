type Maybe<T> = T | null | undefined;

// The "Option" type
type Some<T> = { type: 'Some'; value: T };
const Some = <T>(value: T): Some<T> => ({ type: 'Some', value });

type None = { type: 'None' };
const None = (): None => ({ type: 'None' });

type Option<T> = Some<T> | None;

const stripNullAndUndefined = <T>(val: Maybe<T>): val is T => val !== null && val !== undefined;

export const createOption = <T>(fn: () => Maybe<T>): Option<T> => {
  try {
    const value = fn();
    return stripNullAndUndefined(value) ? Some(value) : None();
  } catch (error) {
    return None();
  }
};

// The "Result" type
// type Ok<T> = { type: 'Ok'; value: T };
// const Ok = <T>(value: T): Ok<T> => ({ type: 'Ok', value });

// type Err<E> = { type: 'Error'; err: E };
// const Err = <E>(err: E): Err<E> => ({ type: 'Error', err });

// type Result<T, E> = Ok<T> | Err<E>;

// export const createResult = <T, E>(fn: () => Maybe<T>, error: E): Result<T, E> => {
//   try {
//     const value = fn();
//     return stripNullAndUndefined(value) ? Ok(value) : Err(error);
//   } catch (_error) {
//     return Err(error);
//   }
// };

// export function unwrap<T>(arg: Option<T>): T;
// export function unwrap<T, E>(arg: Result<T, E>): T;
// export function unwrap<T>(arg: any): T {
//   if (arg.type === 'Some') return arg.value;
//   if (arg.type === 'Ok') return arg.value;
//   if (arg.type === 'Error') {
//     throw arg.err;
//   }

//   throw Error('Cannot unwrap value!');
// }

// export function unwrapOr<T>(arg: Option<T>, defaultValue: T): T;
// export function unwrapOr<T, E>(arg: Result<T, E>, defaultValue: T): T;
// export function unwrapOr<T>(arg: any, defaultValue: T): T {
//   try {
//     return unwrap(arg);
//   } catch (e) {
//     return defaultValue;
//   }
// }

// export const createAsyncResult = async <T, E>(
//   fn: () => Promise<Maybe<T>>,
//   error: E
// ): Promise<Result<T, E>> => {
//   try {
//     const val = await fn();
//     return createResult(() => val, error);
//   } catch (_error) {
//     return Err(error);
//   }
// };
