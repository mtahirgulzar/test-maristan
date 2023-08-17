import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Modal = ({ isShowing, hide, src }) => {
  return (
    <>
      {isShowing && (
        <>
          <div className="modal-overlay " />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal rounded-xl ">
              <button
                type="button"
                className="modal-close-button modal-header absolute w-full h-full top-0  rght-0 left-0 z-0"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              ></button>
              <div className="flex justify-center items-center h-full ">
                <div className="relative z-20 w-full ">
                  <ReactPlayer
                    url={
                      src
                        ? src
                        : "https://www.youtube.com/embed/wfTxsSODrBM?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdanvilleorthodontics.com&widgetid=9"
                    }
                    width="100%"
                    height="340px"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
