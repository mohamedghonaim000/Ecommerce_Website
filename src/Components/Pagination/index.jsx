export default function Pagination({ currentPage, setCurrentPage }) {
  return (
    <div className="flex justify-center gap-3 mt-10">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded ${
            currentPage === page
              ? "bg-[#B88E2F] text-white"
              : "bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="px-4 h-10 bg-gray-100 rounded"
      >
        Next
      </button>
    </div>
  );
}
