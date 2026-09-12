import {
  Flame,
  BookCheck,
  Target,
  Percent,
  Sparkles,
} from "lucide-react";

import { currentUser } from "../../data/users";

import {
  overallStats,
  continueLearning,
  recentActivity,
  recommendedModules,
  departmentProgress,
} from "../../data/progress";

import StatsCard from "../../components/dashboard/StatsCard";
import ContinueLearningCard from "../../components/dashboard/ContinueLearningCard";
import ActivityCard from "../../components/dashboard/ActivityCard";
import RecommendedCard from "../../components/dashboard/RecommendedCard";
import DepartmentProgressList from "../../components/dashboard/DepartmentProgressList";
import ProgressBar from "../../components/common/ProgressBar";

import "./Dashboard.css";

export default function Dashboard() {
  // Get only the first name
  const firstName = currentUser.name.split(" ")[0];

  return (
    <div className="page-container">

      {/* Welcome section */}
      <header className="dash-welcome">
        <div>
          <h1>
            Welcome back, {firstName}
          </h1>

          <p className="text-muted">
            Here's where you left off.
          </p>
        </div>

        {/* Current streak */}
        <div className="dash-streak">
          <Flame
            size={18}
            color="var(--color-warning)"
          />

          <span>
            {currentUser.streakDays}-day streak
          </span>
        </div>
      </header>


      {/* Overall progress */}
      <div className="dash-overall">
        <ProgressBar
          value={overallStats.overallProgressPercent}
          label="Overall progress"
        />
      </div>


      {/* Statistics */}
      <div className="dash-stats-grid">

        <StatsCard
          icon={BookCheck}
          label="Modules completed"
          value={overallStats.modulesCompleted}
          suffix={`/${overallStats.totalModules}`}
        />

        <StatsCard
          icon={Target}
          label="Problems solved"
          value={overallStats.problemsSolved}
        />

        <StatsCard
          icon={Percent}
          label="Practice accuracy"
          value={overallStats.practiceAccuracy}
          suffix="%"
        />

        <StatsCard
          icon={Flame}
          label="Current streak"
          value={overallStats.streakDays}
          suffix=" days"
        />

        <StatsCard
          icon={Sparkles}
          label="Skills acquired"
          value={overallStats.skillsAcquired}
        />

      </div>


      {/* Continue learning */}
      <section className="dash-section">
        <ContinueLearningCard
          continueLearning={continueLearning}
        />
      </section>


      {/* Recent activity and recommendations */}
      <div className="dash-grid">

        {/* Recent activity */}
        <section className="dash-section">
          <h2 className="section-title-sm">
            Recent activity
          </h2>

          <div className="card">
            <ActivityCard
              activity={recentActivity}
            />
          </div>
        </section>


        {/* Recommended modules */}
        <section className="dash-section">
          <h2 className="section-title-sm">
            Recommended for you
          </h2>

          <div className="card">
            <RecommendedCard
              items={recommendedModules}
            />
          </div>
        </section>

      </div>


      {/* Department progress */}
      <section className="dash-section">
        <h2 className="section-title-sm">
          Department progress
        </h2>

        <DepartmentProgressList
          items={departmentProgress}
        />
      </section>

    </div>
  );
}