import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination"

export function AllPagination({ currentPage, dataLength, gotoPage }: { currentPage: number, dataLength: number, gotoPage: React.Dispatch<number> }) {
  return (
    <Pagination>
      {<PaginationContent>
        {Array.from(Array((Math.floor(dataLength / 2) + 1)).keys()).map(num => {
          if (num <= currentPage && num !== 0)
            return <PaginationItem key={num} onClick={() => gotoPage(num)}>
              <PaginationLink href="#" isActive={(currentPage === num && true)}>
                {num}
              </PaginationLink>
            </PaginationItem>
        })}
        {(Math.floor(dataLength / 2)) > 3 && <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>}
        {Array.from(Array((Math.floor(dataLength / 2) + 1)).keys()).map(num => {
          if (num > currentPage)
            return <PaginationItem key={num} onClick={() => gotoPage(num)}>
              <PaginationLink isActive={(currentPage === num && true)}>{num}</PaginationLink>
            </PaginationItem>
        })}

      </PaginationContent>}
    </Pagination>
  )
}
