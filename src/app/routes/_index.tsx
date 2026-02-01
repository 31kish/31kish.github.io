import type { Route } from "./+types/_index";
import { Index } from "../pages/index/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Melchior and Taban" },
    { name: "description", content: "portfolio" },
  ];
}

export default function _Index() {
  return <Index />;
}
