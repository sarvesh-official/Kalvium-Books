// import { useState, useEffect } from "react";

function HomePage({ books }) {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Book List</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center flex-col text-center"
          >
            <img src={book.imageLinks?.thumbnail || ""} />
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <div className="flex  items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <p className="text-gray-600">
                {book.averageRating ? book.averageRating : "0"}
              </p>
              <p>Free</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
