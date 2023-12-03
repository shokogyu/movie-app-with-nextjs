export const LoadMoreButton = (props) => {
  return props.isReachingEnd ? (
    <div className="text-center text-xs text-gray-500 md:text-sm">No more data...</div>
  ) : (
    <button
      className="mx-auto block w-full cursor-pointer rounded-md border border-gray-300 p-2 text-xs text-gray-300 transition-all hover:opacity-80 md:w-fit md:px-32 md:py-3 md:text-sm"
      onClick={() => props.setSize((prevSize) => prevSize + 1)}
    >
      さらに読み込む
    </button>
  );
};
