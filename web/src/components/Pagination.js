import React from "react";
import { Link } from "gatsby";

const Pagination = ({ pagSlugs, currentSlug, gallery }) => {
  let currentIndex;
  //find correct index in array
  pagSlugs.forEach((element, index) => {
    if (element.node.slug.current === currentSlug) {
      currentIndex = index;
    }
  });

  let prevPage;
  let nextPage;
  let hasPrevPage = true;
  let hasNextPage = true;
  pagSlugs[currentIndex].previous === null
    ? (hasPrevPage = false)
    : (prevPage = pagSlugs[currentIndex].previous.slug.current);
  pagSlugs[currentIndex].next === null
    ? (hasNextPage = false)
    : (nextPage = pagSlugs[currentIndex].next.slug.current);

  return (
    <>
      <p className="pagination">
        <Link
          title="Previous Page"
          disabled={!hasPrevPage}
          to={`/${gallery}/${prevPage}`}
        >
          &larr; Prev
        </Link>
        <span> | </span>
        <Link
          title="Next Page"
          disabled={!hasNextPage}
          to={`/${gallery}/${nextPage}`}
        >
          Next &rarr;
        </Link>
      </p>
    </>
  );
};

export default Pagination;
