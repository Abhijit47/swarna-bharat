import {
  defineCollection,
  defineConfig,
  defineSingleton,
} from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

const aboutUs = defineSingleton({
  name: 'aboutUs',
  filePath: 'src/contents/about-us.mdx',
  parser: 'frontmatter',
  schema: z.object({
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
  }),
  transform: async (document, context) => {
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
  },
  onSuccess: () => {
    console.log('About Us singleton loaded successfully');
  },
});

const projectSchema = z.object({
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

const projects = defineCollection({
  name: 'projects',
  directory: 'src/contents/projects',
  include: ['**/*.md', '**/*.mdx'],
  schema: projectSchema,
  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft');
    }

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
  },
  onSuccess: () => {
    console.log('Projects collection loaded successfully');
  },
});

const posts = defineCollection({
  name: 'posts',
  directory: 'src/contents/posts',
  include: ['**/*.md', '**/*.mdx'],
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
    draft: z.boolean().default(false),
  }),
  transform: async (document, context) => {
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
  },
  onSuccess: () => {
    console.log('Posts collection loaded successfully');
  },
});

export default defineConfig({
  content: [posts, projects, aboutUs],
});
