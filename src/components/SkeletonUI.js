const SkeletonUI = () => {
  return (
    <div data-testid="skeleton" className="mt-4 flex gap-5 flex-wrap">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div key={index} className="bg-gray-100 w-56 h-64 rounded"></div>
        ))}
    </div>
  );
};

export default SkeletonUI;
