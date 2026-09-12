import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Badge from "../common/Badge";

export default function DepartmentCard({
  department,
  skillLimit = 3,
}) {
  // Get the department information
  const departmentId = department.id;
  const departmentCode = department.code;
  const departmentName = department.name;
  const description = department.description;
  const moduleCount = department.moduleCount;
  const problemCount = department.problemCount;
  const accentColor = department.accentVar;
  const skills = department.skillCategories;

  // Create the department URL
  const departmentPath = `/departments/${departmentId}`;

  // Get only the number of skills we want to display
  const visibleSkills = skills.slice(0, skillLimit);

  return (
    <Link
      to={departmentPath}
      className="card card-interactive dept-card"
    >
      {/* Department code */}
      <div
        className="dept-card-code"
        style={{
          color: `var(${accentColor})`,
        }}
      >
        {departmentCode}
      </div>

      {/* Department name */}
      <h3>{departmentName}</h3>

      {/* Department description */}
      <p className="text-muted dept-card-desc">
        {description}
      </p>

      {/* Number of modules and problems */}
      <div className="dept-card-meta">
        <span>{moduleCount} modules</span>
        <span>{problemCount} problems</span>
      </div>

      {/* Skills */}
      <div className="dept-card-skills">
        {visibleSkills.map((skill) => (
          <Badge
            key={skill}
            variant="neutral"
          >
            {skill}
          </Badge>
        ))}
      </div>

      {/* Explore link */}
      <span className="dept-card-explore">
        Explore
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}