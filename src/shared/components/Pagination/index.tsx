import { SVGProps } from "react";
import {
  cn,
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/react";

type IconSvgProps = SVGProps<SVGSVGElement>;

export const ChevronIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default function PaginationComponent({
  onChangePage,
  totalItems,
  initalPage,
}: {
  onChangePage: (page: number) => void;
  totalItems: number;
  initalPage: number;
}) {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onNext}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onPrevious}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive && "text-white bg-[#304c57] font-bold"
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      className="gap-2"
      initialPage={initalPage}
      radius="full"
      renderItem={renderItem}
      total={Math.ceil(totalItems / 6)}
      variant="light"
      onChange={(page) => onChangePage(page)}
    />
  );
}
