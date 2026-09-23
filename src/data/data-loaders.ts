import { allPosts, allProjects } from 'content-collections';
import { redirect, type LoaderFunctionArgs } from 'react-router-dom';

export async function loadAProject({ params }: LoaderFunctionArgs) {
  // console.log('params', params.path);
  const path = params.path;
  if (!path) {
    throw redirect('/');
  }
  const project = allProjects.find((project) => project._meta.path === path);
  if (!project) {
    throw redirect('/');
  }
  return project;
}

export function loadPosts() {
  return allPosts;
}

export async function loadAPost({ params }: LoaderFunctionArgs) {
  // console.log('params', params.path);
  const path = params.path;
  if (!path) {
    throw redirect('/');
  }
  const post = allPosts.find((post) => post._meta.path === path);
  if (!post) {
    throw redirect('/');
  }
  return post;
}
