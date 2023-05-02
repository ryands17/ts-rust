import fetch from 'node-fetch';
import { z } from 'zod';

export async function tsFetch<Data>(schema: z.Schema<Data>, ...args: Parameters<typeof fetch>) {
  const raw = await fetch(...args);
  const res = await raw.json();

  return schema.parse(res);
}
