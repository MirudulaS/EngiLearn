import { departments } from "../../data/departments";
import DepartmentCard from "../../components/learning/DepartmentCard";

import "./Departments.css";

export default function Departments() {
  return (
    <div className="page-container">

      {/* Page heading */}
      <header className="page-header">
        <h1>Departments</h1>

        <p className="text-muted">
          Pick a department to see its learning paths, modules,
          and practice problems.
        </p>
      </header>


      {/* Department cards */}
      <div className="dept-grid dept-grid--wide">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
            skillLimit={5}
          />
        ))}
      </div>

    </div>
  );
}