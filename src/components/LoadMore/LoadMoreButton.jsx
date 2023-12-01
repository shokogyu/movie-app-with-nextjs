export const LoadMoreButton = (props) => {
  return props.isReachingEnd ? (
    <div className="mt-5 text-center text-sm text-gray-500">No more data...</div>
  ) : (
    <button
      className="mx-auto mt-5 block w-fit cursor-pointer rounded-md border border-gray-300 px-32 py-3 text-sm text-gray-300 transition-all hover:opacity-80"
      onClick={() => props.setSize((prevSize) => prevSize + 1)}
    >
      さらに読み込む
    </button>
  );
};
