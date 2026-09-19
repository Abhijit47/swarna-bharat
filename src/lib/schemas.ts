import z from 'zod';

export const projectSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters'),
  slug: z.string(),
  summary: z
    .string()
    .min(10, 'Summary must be at least 10 characters')
    .max(160, 'Summary must be less than 160 characters'),
  tags: z.array(z.string()),
  content: z.string(),
  draft: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema>;
