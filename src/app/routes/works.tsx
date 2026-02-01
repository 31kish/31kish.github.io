import type { Route } from "./+types/works";
import { Works } from "../pages/works/works";
import type { Project } from "~/types/project";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Melchior and Taban" },
    { name: "description", content: "portfolio" },
  ];
}

export async function clientLoader() {
  const response = await fetch('/data/works.json');
  const data: Project[] = await response.json();
  return data;
}

export default function _Works({ loaderData }: Route.ComponentProps) {
  return <Works projects={loaderData} />;
}
