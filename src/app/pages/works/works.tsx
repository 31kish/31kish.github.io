import type { Project } from "~/types/project";
import { RailsLogo } from "~/components/logos/rails";
import { LaravelLogo } from "~/components/logos/laravel";
import type React from "react";
import { PhoneLogo } from "~/components/logos/smartphone";

interface WorksProps {
  projects: Project[]
}

export function Works(props: WorksProps) {
  const projects = props.projects;
  const logoComponents: Record<string, React.ComponentType> = {
    "phone": PhoneLogo,
    "rails": RailsLogo,
    "laravel": LaravelLogo
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-left py-8 px-12 border-b border-[#999]">
        <h3 className="text-lg font-normal tracking-widest uppercase">Works</h3>
        <p className="text-[10px] text-gray-400 mt-1">制作実績一覧</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-[#999]">
        {projects.map((project) => {
          const LogoComponent = logoComponents[project.logo];

          return (
          <div key={project.id} className="bg-white p-8 flex flex-col group">
            <div className="h-64 bg-gray-50 border border-gray-100 mb-8 flex items-center justify-center p-4 transition-all duration-500 overflow-hidden">
              <div className="w-full max-w-[320px] transition-transform duration-500 group-hover:scale-110">
                <LogoComponent />
              </div>
            </div>
            <div className="text-left flex-1">
              <h4 className="text-base font-bold text-[#333] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f97316] rounded-full"></span>
                {project.title}
              </h4>
              <p className="text-xs leading-relaxed mb-4 text-[#555] whitespace-pre-wrap">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] border border-gray-300 px-2 py-0.5 text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}