import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Circle, Dumbbell } from 'lucide-react';
import { getDepartmentById } from '../../data/departments';
import { getModuleById, getModulesByCategory } from '../../data/modules';
import Badge from '../../components/common/Badge';
import { EmptyState } from '../../components/common/States';
import '../Departments/DepartmentDetail.css';
import './ModuleDetail.css';

export default function ModuleDetail() {
  const { departmentId, categoryId, moduleId } = useParams();
  const department = getDepartmentById(departmentId);
  const category = department?.categories.find((c) => c.id === categoryId);
  const module = getModuleById(moduleId);

  // Local-only completion toggle — will be persisted via PATCH /api/progress once
  // the backend exists. Not written back to the mock data module.
  const [completed, setCompleted] = useState(module?.completed ?? false);

  if (!department || !category || !module) {
    return (
      <div className="page-container">
        <EmptyState title="Module not found" description="That module doesn't exist." />
      </div>
    );
  }

  const siblingModules = getModulesByCategory(departmentId, categoryId);
  const index = siblingModules.findIndex((m) => m.id === module.id);
  const prevModule = siblingModules[index - 1];
  const nextModule = siblingModules[index + 1];

  return (
    <div className="page-container">
      <nav className="breadcrumbs">
        <Link to="/departments">Departments</Link>
        <ChevronRight size={14} />
        <Link to={`/departments/${departmentId}`}>{department.shortName}</Link>
        <ChevronRight size={14} />
        <Link to={`/departments/${departmentId}/${categoryId}`}>{category.name}</Link>
        <ChevronRight size={14} />
        <span>{module.title}</span>
      </nav>

      <header className="module-detail-header">
        <div>
          <span className="text-muted">{module.subject}</span>
          <h1>{module.title}</h1>
          <div className="module-detail-badges">
            <Badge difficulty={module.difficulty}>{module.difficulty}</Badge>
          </div>
        </div>
        <button
          className={`btn ${completed ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => setCompleted((c) => !c)}
        >
          {completed ? <CheckCircle2 size={16} /> : <Circle size={16} />}
          {completed ? 'Completed' : 'Mark as complete'}
        </button>
      </header>

      <p className="module-detail-desc">{module.description}</p>

      <div className="module-detail-body">
        {module.theory.map((section) => (
          <section className="module-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        {module.examples.map((example) => (
          <section className="module-section" key={example.title}>
            <h2>{example.title}</h2>
            <pre className="module-code-block">
              <code>{example.code}</code>
            </pre>
          </section>
        ))}
      </div>

      <div className="module-detail-actions">
        <Link
          to={`/practice?department=${departmentId}&category=${categoryId}&module=${module.id}`}
          className="btn btn-primary"
        >
          <Dumbbell size={16} />
          Practice this topic
        </Link>
      </div>

      <div className="module-nav">
        {prevModule ? (
          <Link to={`/departments/${departmentId}/${categoryId}/${prevModule.id}`} className="module-nav-link">
            ← {prevModule.title}
          </Link>
        ) : (
          <span />
        )}
        {nextModule ? (
          <Link to={`/departments/${departmentId}/${categoryId}/${nextModule.id}`} className="module-nav-link module-nav-link--next">
            {nextModule.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
