export default function TaskSkeleton() {
  return (
    <div className="bg-primary flex-col justify-center mb-3.5">
      {/* Header Bar */}
      <div className="h-20 bg-gray-300 rounded m-4 animate-pulse"></div>

      {/* Primary & Secondary Labels */}
      <div className="p-4 flex items-center justify-center flex-col">
        <div className="h-8 bg-gray-300 rounded w-48 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-64 animate-pulse"></div>
      </div>

      {/* Container with border */}
      <div className=" mt-5 rounded-3xl p-8 mx-[10%] bg-container flex flex-col h-[400px]">
        {/* Title inside container */}
        <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>

        {/* Task list area */}
        <div className="w-full overflow-y-auto flex-1 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 bg-gray-200 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
