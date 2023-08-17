"use client";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Resources from "../education-page/resources";

const PaginatedBlogs = ({data}) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Resources data={data} itemOffset={itemOffset} />
      <section className="mt-[40px] md:mt-[55px] lg:mt-[70px] mb-[40px] md:mb-[55px] lg:mb-[70px] ">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next »"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="« Previous"
          renderOnZeroPageCount={null}
          containerClassName="services-pagination"
          pageLinkClassName="paginate-link"
          previousLinkClassName="paginate-previous-link"
          activeLinkClassName="paginate-active-link"
          nextClassName="paginate-next-link"
        />
      </section>
    </>
  );
};

export default PaginatedBlogs;
