export default function ProgressBar({
  value = 0,
  label,
  tone = "default",
  showValue = true,
}) {
  // Keep the value between 0 and 100
  let clamped = value;

  if (value < 0) {
    clamped = 0;
  }

  if (value > 100) {
    clamped = 100;
  }

  // Decide which CSS class to use
  let toneClass = "";

  if (tone === "success") {
    toneClass = "is-success";
  } else if (tone === "warning") {
    toneClass = "is-warning";
  }

  return (
    <div>
      {/* Top section: label and percentage */}
      {(label || showValue) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "var(--space-2)",
            fontSize: "var(--text-sm)",
          }}
        >
          {/* Show label if it exists */}
          {label && (
            <span className="text-muted">
              {label}
            </span>
          )}

          {/* Show percentage if showValue is true */}
          {showValue && (
            <span
              style={{
                fontWeight: "var(--weight-medium)",
              }}
            >
              {clamped}%
            </span>
          )}
        </div>
      )}

      {/* Progress bar background */}
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Progress bar filled portion */}
        <div
          className={`progress-fill ${toneClass}`}
          style={{
            width: `${clamped}%`,
          }}
        />
      </div>
    </div>
  );
}