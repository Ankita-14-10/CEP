function ProgressBar({ progress }) {

  return (
    <div className="progress-wrapper">

      <div className="progress-header">

        <span>
          Roadmap Progress
        </span>

        <strong>
          {progress}%
        </strong>

      </div>

      <div className="progress-bar">

        <div
          style={{
            width: `${progress}%`
          }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;