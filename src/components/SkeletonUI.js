const SkeletonUI = () => {
  return (
    <div data-testid="skeleton" className="restraunt-card-list">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div key={index} className="skeleton-cards"></div>
        ))}
    </div>
  );
};

export default SkeletonUI;
