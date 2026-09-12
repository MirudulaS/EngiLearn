import { Link } from "react-router-dom";

import {
  Boxes,
  Terminal,
  Waves,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react";

import { departments } from "../../data/departments";
import DepartmentCard from "../../components/learning/DepartmentCard";

import "./Landing.css";


// Features shown on the landing page
const features = [
  {
    icon: Boxes,
    title: "Interactive learning",
    description:
      "Work through modules built around real engineering syllabi, not generic tutorials.",
  },
  {
    icon: Target,
    title: "Practice tasks",
    description:
      "Apply every concept immediately with graded exercises across every difficulty level.",
  },
  {
    icon: Terminal,
    title: "Online compiler",
    description:
      "Write, run, and submit code for JavaScript, Python, C, C++, Java, and Verilog.",
  },
  {
    icon: Waves,
    title: "Engineering simulations",
    description:
      "Logic gates, circuits, and signal problems you can manipulate, not just read about.",
  },
  {
    icon: TrendingUp,
    title: "Progress tracking",
    description:
      "See exactly which topics you have mastered and which need more repetition.",
  },
  {
    icon: Sparkles,
    title: "Skill development",
    description:
      "Build a skill matrix across departments as you complete modules and problems.",
  },
];


export default function Landing() {
  return (
    <div>

      {/* =========================
          HERO SECTION
         ========================= */}
      <section className="hero">

        <div className="hero-inner">

          <p className="hero-eyebrow">
            For IT, ECE &amp; EEE students
          </p>

          <h1 className="hero-title">
            Learn engineering by building, debugging, and solving —
            not just reading.
          </h1>

          <p className="hero-subtitle">
            EngiLearn pairs structured coursework with a real code
            editor and interactive circuit exercises, so what you study
            is what you practice.
          </p>

          {/* Hero buttons */}
          <div className="hero-actions">

            <Link
              to="/register"
              className="btn btn-primary btn-lg"
            >
              Start learning
            </Link>

            <Link
              to="/departments"
              className="btn btn-secondary btn-lg"
            >
              Explore departments
            </Link>

          </div>

        </div>


        {/* =========================
            CODE PREVIEW
           ========================= */}
        <div
          className="hero-panel"
          aria-hidden="true"
        >

          {/* Editor top bar */}
          <div className="hero-panel-row">

            <span className="hero-panel-dot" />
            <span className="hero-panel-dot" />
            <span className="hero-panel-dot" />

            <span className="hero-panel-file">
              problem_07_flipflop.v
            </span>

          </div>


          {/* Example code */}
          <pre className="hero-panel-code">
{`module d_flip_flop (
  input  wire clk,
  input  wire d,
  output reg  q
);
  always @(posedge clk)
    q <= d;
endmodule`}
          </pre>


          {/* Test result */}
          <div className="hero-panel-status">
            <span className="badge badge-success">
              3 / 3 tests passed
            </span>
          </div>

        </div>

      </section>


      {/* =========================
          FEATURES SECTION
         ========================= */}
      <section className="page-container">

        <h2 className="section-title">
          Everything you need to actually learn
        </h2>

        <div className="feature-grid">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="feature-item"
              >

                <Icon
                  size={20}
                  color="var(--color-accent)"
                />

                <h3>
                  {feature.title}
                </h3>

                <p className="text-muted">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* =========================
          DEPARTMENTS SECTION
         ========================= */}
      <section className="page-container">

        <h2 className="section-title">
          Choose your department
        </h2>

        <div className="dept-grid">

          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}

        </div>

      </section>

    </div>
  );
}