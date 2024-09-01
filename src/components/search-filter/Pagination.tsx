type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
  siblingCount?: number;
}

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  siblingCount = 1,
} : PaginationProps) => {
  const generatePageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 3;
    const totalButtons = Math.min(totalPageNumbers, totalPages);

    let startPage = Math.max(2, currentPage - siblingCount);
    let endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    if (currentPage <= siblingCount + 1) {
      startPage = 2;
      endPage = totalButtons - 2;
    }

    if (currentPage + siblingCount >= totalPages) {
      startPage = totalPages - (totalButtons - 2);
      endPage = totalPages - 1;
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    
    return [1, ...pages, totalPages];
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center space-x-2 mt-10">
      <button
        className="px-4 py-2 rounded-full bg-gray-300 text-gray-700 transition"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        {"<"}
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } transition`}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}>
          {page}
        </button>
      ))}

      <button
        className="px-4 py-2 rounded-full bg-gray-300 text-gray-700 transition"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
