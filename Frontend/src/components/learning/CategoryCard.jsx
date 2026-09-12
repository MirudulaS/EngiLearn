import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ departmentId, category }) {
  const categoryId = category.id;
  const categoryName = category.name;
  const description = category.description;
  const moduleCount = category.moduleCount;
  const problemCount = category.problemCount;

  const categoryPath = `/departments/${departmentId}/${categoryId}`;

  return (
    <Link
      to={categoryPath}
      className="card card-interactive category-card"
    >
      <h3>{categoryName}</h3>

      <p className="text-muted category-card-desc">
        {description}
      </p>

      <div className="category-card-meta">
        <span>{moduleCount} modules</span>
        <span>{problemCount} problems</span>
      </div>

      <span className="dept-card-explore">
        View path
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}