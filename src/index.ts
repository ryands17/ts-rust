import * as rust from './rust.js';
import { z } from 'zod';
import { match } from 'ts-pattern';
import { tsFetch } from './utils.js';

// const items = [1, 2, 3, 4];
// const number = rust.createOption(() => items.find((i) => i === 3));

// if (number.type === 'Some') {
//   console.log('result', number.value);
// }

// console.log(rust.unwrapOr(number, 2));

// const users = await rust.createAsyncResult(
//   () =>
//     tsFetch(
//       z.array(z.object({ id: z.number(), name: z.string() })),
//       'https://jsonplaceholder.typicode.com/users'
//     ),
//   'users not found'
// );

// console.log(rust.unwrapOr(users, []));

// if (users.type === 'Ok') {
//   console.log('users', users.value);
// }

// with ts-pattern

// using option
// match(number)
//   .with({ type: 'Some' }, ({ value }) => console.log(value * 2))
//   .with({ type: 'None' }, () => console.log('no value'))
//   .exhaustive();

// using result
// match(users)
//   .with({ type: 'Ok' }, ({ value }) => console.log(value))
//   .with({ type: 'Error' }, ({ err }) => console.log(err))
//   .exhaustive();
