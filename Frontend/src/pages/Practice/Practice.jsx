import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  problems,
  filterProblems,
} from "../../data/problems";

import FilterBar from "../../components/practice/FilterBar";
import ProblemCard from "../../components/practice/ProblemCard";
import { EmptyState } from "../../components/common/States";

import "./Practice.css";


// Default filter values
const emptyFilters = {
  query: "",
  departmentId: "",
  difficulty: "",
  status: "",
};


export default function Practice() {

  // Get values from the URL
  const [searchParams] = useSearchParams();


  // Store the filters selected by the user
  const [filters, setFilters] = useState({
    ...emptyFilters,

    departmentId:
      searchParams.get("department") ?? "",
  });


  // Get optional module/category values from the URL
  const moduleId = searchParams.get("module");
  const categoryId = searchParams.get("category");


  // Get problems that match the filters
  const results = useMemo(() => {

    let filtersToUse = filters;

    // If the URL contains module/category,
    // use them to narrow down the problems
    if (moduleId || categoryId) {
      filtersToUse = {
        ...filters,
        moduleId: moduleId,
        categoryId: categoryId,
      };
    }

    return filterProblems(
      problems,
      filtersToUse
    );

  }, [filters, moduleId, categoryId]);


  return (
    <div className="page-container">

      {/* Page heading */}
      <header className="page-header">

        <h1>
          Practice
        </h1>

        <p className="text-muted">
          {results.length} of {problems.length} problems

          {moduleId
            ? " · scoped to this module"
            : ""}
        </p>

      </header>


      {/* Filter controls */}
      <FilterBar
        filters={filters}
        onChange={setFilters}
      />


      {/* Show results or empty state */}
      {results.length === 0 ? (

        <EmptyState
          title="No problems match"
          description="Try clearing a filter or searching a different term."
          action="Clear filters"
          onAction={() => {
            setFilters(emptyFilters);
          }}
        />

      ) : (

        <div className="problem-list">

          {results.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
            />
          ))}

        </div>

      )}

    </div>
  );
}