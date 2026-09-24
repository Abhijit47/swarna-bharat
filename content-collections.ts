import {
  defineCollection,
  defineConfig,
  defineSingleton,
  type CollectionContext,
  type Schema,
  type SingletonContext,
} from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { collectionSchema, singletonSchema } from './src/lib/schemas';
// import { z } from 'zod';

// const singletonSchema = z.object({
//   title: z
//     .string()
//     .min(5, 'Title must be at least 5 characters')
//     .max(100, 'Title must be less than 100 characters'),
//   slug: z.string(),
//   summary: z
//     .string()
//     .min(10, 'Summary must be at least 10 characters')
//     .max(160, 'Summary must be less than 160 characters'),
//   tags: z.array(z.string()),
//   content: z.string(),
//   draft: z.boolean().default(false),
// });

async function singletonTransformer(
  document: Schema<'frontmatter', typeof singletonSchema>,
  context: SingletonContext<Schema<'frontmatter', typeof singletonSchema>>,
) {
  if (document.draft) {
    return context.skip('document is a draft');
  }

  const mdx = await compileMDX(context, document, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });

  const readTime = Math.ceil(mdx.split(' ').length / 150); // Assuming an average reading speed of 200 words per minute

  return {
    ...document,
    mdx,
    readTime,
  };
}

async function collectionTransformer(
  document: Schema<'frontmatter', typeof collectionSchema>,
  context: CollectionContext<Schema<'frontmatter', typeof collectionSchema>>,
) {
  // const mdx = await compileMDX(context, document);

  const mdx = await compileMDX(context, document, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });

  const docs = await context.collection.documents();
  const idx = docs.findIndex(
    (d) => document._meta.filePath === d._meta.filePath,
  );

  const readTime = Math.ceil(mdx.split(' ').length / 150); // Assuming an average reading speed of 200 words per minute

  return {
    ...document,
    mdx,
    prev: idx > 0 ? docs[idx - 1] : null,
    next: idx < docs.length - 1 ? docs[idx + 1] : null,
    readTime,
  };
}

const aboutUs = defineSingleton({
  name: 'aboutUs',
  filePath: 'src/contents/about-us.mdx',
  parser: 'frontmatter',
  schema: singletonSchema,
  transform: singletonTransformer,
  onSuccess: () => {
    console.log('About Us singleton loaded successfully');
  },
});

const award = defineSingleton({
  name: 'award',
  filePath: 'src/contents/award.mdx',
  parser: 'frontmatter',
  schema: singletonSchema,
  transform: singletonTransformer,
  onSuccess: () => {
    console.log('Award singleton loaded successfully');
  },
});

const service = defineSingleton({
  name: 'service',
  filePath: 'src/contents/service.mdx',
  parser: 'frontmatter',
  schema: singletonSchema,
  transform: singletonTransformer,
  onSuccess: () => {
    console.log('Service singleton loaded successfully');
  },
});

// const projectSchema = z.object({
//   title: z
//     .string()
//     .min(5, 'Title must be at least 5 characters')
//     .max(100, 'Title must be less than 100 characters'),
//   slug: z.string(),
//   summary: z
//     .string()
//     .min(10, 'Summary must be at least 10 characters')
//     .max(160, 'Summary must be less than 160 characters'),
//   tags: z.array(z.string()),
//   content: z.string(),
//   draft: z.boolean().default(false),
// });

const projects = defineCollection({
  name: 'projects',
  directory: 'src/contents/projects',
  include: ['**/*.md', '**/*.mdx'],
  schema: collectionSchema,
  transform: collectionTransformer,
  onSuccess: () => {
    console.log('Projects collection loaded successfully');
  },
});

// const postSchema = z.object({
//   title: z
//     .string()
//     .min(5, 'Title must be at least 5 characters')
//     .max(100, 'Title must be less than 100 characters'),
//   slug: z.string(),
//   cover: z.string(),
//   summary: z
//     .string()
//     .min(10, 'Summary must be at least 10 characters')
//     .max(160, 'Summary must be less than 160 characters'),
//   tags: z.array(z.string()),
//   keywords: z.array(z.string()),
//   author: z.string(),
//   content: z.string(),
//   draft: z.boolean().default(false),
// });

const posts = defineCollection({
  name: 'posts',
  directory: 'src/contents/posts',
  include: ['**/*.md', '**/*.mdx'],
  schema: collectionSchema,
  transform: collectionTransformer,
  onSuccess: () => {
    console.log('Posts collection loaded successfully');
  },
});

export default defineConfig({
  content: [posts, projects, aboutUs, award, service],
});
