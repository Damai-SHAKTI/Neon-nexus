export default function Modal({
  isOpen,
  close,
  title,
  hasFooter = false,
  footerBtnFunc,
  children,
}) {
  return (
    <div
      className={
        "fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-[rgba(0,0,0,0.4)] " +
        (isOpen ? "block" : "hidden")
      }
    >
      <div className="w-full max-w-md text-white bg-black px-8 py-4 border-2 border-orange-500 opacity-100">
        <div className="flex items-center justify-between">
          <h4 className="text-xl">{title}</h4>
          <span
            className="text-2xl glowing-text-orange cursor-pointer"
            onClick={() => close(false)}
          >
            X
          </span>
        </div>
        <div className="w-full max-h-[400px] no-scrollbar px-1 overflow-scroll">
          {children}
        </div>
        {hasFooter && (
          <div className="flex items-center justify-end">
            <button
              className="outline-none text-white bg-black px-4 py-2 border-2 border-orange-500 -skew-x-12"
              onClick={() => footerBtnFunc()}
            >
              Continue &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
