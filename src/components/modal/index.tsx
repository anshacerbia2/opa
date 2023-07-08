import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/global.slice";
import type { RootState } from "../../redux/store";
import Form from "../form";
import ModalSvgIcon from "../svgIcon/ModalSvgIcon";
import { VscClose } from "react-icons/vsc";

const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const globalState = useAppSelector((state: RootState) => state.global);
  const dispatch = useAppDispatch();
  const { modal } = globalState;
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    let timeoutId: any;
    setIsRender(true);
    if (modal.timeout) {
      timeoutId = setTimeout(() => {
        animateOut();
      }, modal.timeout);
    }
    return () => clearTimeout(timeoutId);
  }, [modal]);

  useEffect(() => {
    if (isRender) animateIn();
  }, [isRender]);

  const animateIn = () => {
    document.body.style.overflow = "hidden";
    modalRef.current?.classList.add("active");
  };

  const animateOut = () => {
    clearTimeout(timeoutRef.current);
    modalRef.current?.classList.remove("active");
    timeoutRef.current = setTimeout(() => {
      dispatch(closeModal());
      document.body.style.overflow = "";
    }, 700);
  };

  return (
    <div ref={modalRef} className="c-modal-backdrop" onClick={animateOut}>
      <div className="c-modal-container">
        <div
          className="c-modal-wrapper"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="c-modal-header">
            <h4 className="c-modal-title">{modal.title}</h4>
            <button
              type="button"
              className="c-btn c-modal-close"
              onClick={animateOut}
            >
              <VscClose className="c-only-icon" />
            </button>
          </div>
          <div className="c-modal-body">
            {modal.form && !modal.message && (
              <Form
                formType={modal.form.type}
                formPrefix={modal.form.prefix}
                formState={...globalState[modal.form.state]}
                formApi={modal.form.api}
              />
            )}
            {modal.message && !modal.form && (
              <>
                <ModalSvgIcon success={modal.isSuccess} error={modal.isError} />
                {modal.isSuccess && (
                  <div className="c-modal-message success">{modal.message}</div>
                )}
                {modal.isError && (
                  <div className="c-modal-message error">{modal.message}</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
