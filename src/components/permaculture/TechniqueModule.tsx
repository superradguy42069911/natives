import { Link } from "react-router-dom";
import type { Technique } from "../../data/permacultureTechniques";

interface TechniqueModuleProps {
  technique: Technique;
}

export function TechniqueModule({ technique }: TechniqueModuleProps) {
  const Icon = technique.icon;
  return (
    <div className="permaculture-module">
      <div className="permaculture-module__icon" style={{ background: technique.color }}>
        <Icon size={22} />
      </div>
      <h3>{technique.title}</h3>
      <p>{technique.description}</p>
      {technique.linkTo && (
        <Link to={technique.linkTo} className="permaculture-module__link">
          {technique.linkLabel} &rarr;
        </Link>
      )}
    </div>
  );
}
