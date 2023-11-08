import React from "react";
import ReactModal from "react-modal";
import { CgCloseO } from "react-icons/cg";

interface Props {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = (props: Props) => {
  return (
    <div className="-z-50">
      <ReactModal
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setIsOpen(false)}
        style={{
          content: {
            top: "55%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row-reverse">
            <CgCloseO
              className="w-6 h-6"
              onClick={() => props.setIsOpen(false)}
            />
          </div>
          <div className="text-4xl font-bold text-green-500">Tài Trợ</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div>
                <div className="text-xl font-bold">Nội dung:</div>
                <textarea
                  className="w-full border rounded-sm p-1 m-1"
                  rows={10}
                  cols={50}
                  placeholder="Nội dung"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div>
                  <div className="text-xl font-bold">Tên:</div>
                  <input
                    className="w-full border rounded-sm p-1 m-1"
                    placeholder="Tên"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold">Email:</div>
                  <input
                    className="w-full border rounded-sm p-1 m-1"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold">SDT:</div>
                  <input
                    width={1000}
                    className="w-full border rounded-sm p-1 m-1"
                    placeholder="SDT"
                  />
                </div>
              </div>
            </div>
            <button className="text-2xl font-bold text-red-500 border rounded">
              Gửi
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
