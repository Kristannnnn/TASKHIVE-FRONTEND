export default function DashboardSkeleton() {
  //skeleton loading for dashboards
  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      <div className="h-20 bg-gray-300 rounded m-4 animate-pulse"></div>

      <div className="p-4 flex items-center justify-center flex-col">
        <div className="h-8 bg-gray-300 rounded w-48  mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-64 animate-pulse"></div>
      </div>

      <div className="flex justify-center items-center flex-col pt-10 gap-20">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-16 bg-gray-300 rounded-full w-64 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
