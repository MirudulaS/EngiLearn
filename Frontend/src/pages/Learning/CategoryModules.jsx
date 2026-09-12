import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { getDepartmentById } from "../../data/departments";
import { getModulesByCategory } from "../../data/modules";

import ModuleCard from "../../components/learning/ModuleCard";
import { EmptyState } from "../../components/common/States";

import "../Departments/DepartmentDetail.css";
import "./CategoryModules.css";

export default function CategoryModules() {
  // Get departmentId and categoryId from the URL
  const { departmentId, categoryId } = useParams();

  // Find the department
  const department = getDepartmentById(departmentId);

  // Find the category inside that department
  let category = null;

  if (department) {
    category = department.categories.find((category) => {
      return category.id === categoryId;
    });
  }

  // Get all modules belonging to this category
  const categoryModules = getModulesByCategory(
    departmentId,
    categoryId
  );

  // If department or category doesn't exist
  if (!department || !category) {
    return (
      <div className="page-container">
        <EmptyState
          title="Learning path not found"
          description="That department or category doesn't exist."
        />
      </div>
    );
  }

  // Count how many modules are completed
  const completedModules = categoryModules.filter((module) => {
    return module.completed;
  });

  const completedCount = completedModules.length;

  return (
    <div className="page-container">

      {/* Breadcrumbs */}
      <nav className="breadcrumbs">

        <Link to="/departments">
          Departments
        </Link>

        <ChevronRight size={14} />

        <Link to={`/departments/${departmentId}`}>
          {department.shortName}
        </Link>

        <ChevronRight size={14} />

        <span>
          {category.name}
        </span>

      </nav>


      {/* Category information */}
      <header className="page-header">

        <h1>
          {category.name}
        </h1>

        <p className="text-muted">
          {category.description}
        </p>

        {/* Completed module count */}
        {categoryModules.length > 0 && (
          <p className="text-muted category-progress-note">
            {completedCount} of {categoryModules.length} modules completed
          </p>
        )}

      </header>


      {/* Modules */}
      {categoryModules.length === 0 ? (

        <EmptyState
          title="Modules coming soon"
          description="This learning path doesn't have published modules yet — check back soon."
        />

      ) : (

        <div className="module-grid">

          {categoryModules.map((module) => (
            <ModuleCard
              key={module.id}
              departmentId={departmentId}
              categoryId={categoryId}
              module={module}
            />
          ))}

        </div>

      )}

    </div>
  );
}