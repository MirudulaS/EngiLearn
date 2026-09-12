import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { getDepartmentById } from "../../data/departments";

import CategoryCard from "../../components/learning/CategoryCard";
import Badge from "../../components/common/Badge";
import { EmptyState } from "../../components/common/States";

import "./DepartmentDetail.css";

export default function DepartmentDetail() {
  // Get the department ID from the URL
  const { departmentId } = useParams();

  // Find that department in our data
  const department = getDepartmentById(departmentId);

  // If the department doesn't exist
  if (!department) {
    function goToDepartments() {
      window.location.href = "/departments";
    }

    return (
      <div className="page-container">
        <EmptyState
          title="Department not found"
          description="That department doesn't exist yet."
          action="Back to departments"
          onAction={goToDepartments}
        />
      </div>
    );
  }

  return (
    <div className="page-container">

      {/* Breadcrumb navigation */}
      <nav className="breadcrumbs">
        <Link to="/departments">
          Departments
        </Link>

        <ChevronRight size={14} />

        <span>
          {department.shortName}
        </span>
      </nav>


      {/* Department information */}
      <header className="dept-detail-header">
        <div>

          {/* Department code */}
          <div
            className="dept-card-code"
            style={{
              color: `var(${department.accentVar})`,
            }}
          >
            {department.code}
          </div>

          {/* Department name */}
          <h1>
            {department.name}
          </h1>

          {/* Department description */}
          <p className="text-muted dept-detail-desc">
            {department.description}
          </p>

        </div>


        {/* Department statistics */}
        <div className="dept-detail-stats">

          <div>
            <span className="dept-detail-stat-value">
              {department.moduleCount}
            </span>

            <span className="text-muted">
              modules
            </span>
          </div>

          <div>
            <span className="dept-detail-stat-value">
              {department.problemCount}
            </span>

            <span className="text-muted">
              problems
            </span>
          </div>

        </div>
      </header>


      {/* Skills */}
      <div className="dept-detail-skills">
        {department.skillCategories.map((skill) => (
          <Badge
            key={skill}
            variant="accent"
          >
            {skill}
          </Badge>
        ))}
      </div>


      {/* Learning categories */}
      <h2 className="section-title">
        Learning categories
      </h2>

      <div className="category-grid">
        {department.categories.map((category) => (
          <CategoryCard
            key={category.id}
            departmentId={department.id}
            category={category}
          />
        ))}
      </div>

    </div>
  );
}