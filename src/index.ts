import * as rust from './rust.js';
import { z } from 'zod';
import { match } from 'ts-pattern';
import { tsFetch } from './utils.js';

// const items = [1, 2, 3, 4];
// const option = rust.createOption(() => items.find((i) => i === 3));

// if (option.type === 'Some') {
//   console.log('option value:', option.value);
// }

// const result = rust.createResult(() => items.find((i) => i === 5), Error('number not found'));

// if (result.type === 'Ok') {
//   console.log('result value:', result.value);
// } else {
//   console.log('result error:', result.err.message);
// }

// console.log('\n\n\nunwrap option', rust.unwrapOr(option, 10));

// console.log('unwrap result', rust.unwrapOr(result, 20));

// const users = await rust.createAsyncResult(
//   () =>
//     tsFetch(
//       z.array(z.object({ id: z.number(), name: z.string() })),
//       'https://jsonplaceholder.typicode.com/users'
//     ),
//   'users not found'
// );

// if (users.type === 'Ok') {
//   console.log('\n\nusers', users.value);
// }

// console.log(
//   '\n\n\nusers',
//   rust.unwrapOr(users, [
//     { id: 2, name: 'Ryan' },
//     { id: 1, name: 'John' },
//   ])
// );

// with ts-pattern
// match(users)
//   .with({ type: 'Ok' }, ({ value }) => console.log(value))
//   .with({ type: 'Error' }, ({ err }) => console.log(err))
//   .exhaustive();
