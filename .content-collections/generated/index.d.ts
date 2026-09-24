import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Post = GetTypeByName<typeof configuration, "posts">;
export declare const allPosts: Array<Post>;

export type Project = GetTypeByName<typeof configuration, "projects">;
export declare const allProjects: Array<Project>;

export type AboutUs = GetTypeByName<typeof configuration, "aboutUs">;
export declare const aboutUs: AboutUs;

export type Award = GetTypeByName<typeof configuration, "award">;
export declare const award: Award;

export type Service = GetTypeByName<typeof configuration, "service">;
export declare const service: Service;

export {};
