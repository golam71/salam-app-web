import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";

export const Modal = () => {
  const [open, setOpen] = createSignal(false);
  let btnEl;
  let btnSaveEl;

  const onClickClose = () => {
    setOpen(false);
  };

  const onClickOverlay = (e) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  return (
    <div>
      <button
        type="submit"
        class="w-52 rounded-md border border-transparent px-5 py-3 bg-aquamarine text-base font-bold text-black shadow hover:bg-aquamarine-300 focus:outline-none focus:ring-2 focus:ring-aquamarine-900 focus:ring-offset-2 sm:px-6"
        ref={btnEl}
      >
        OPEN MODAL
      </button>

      <Dismiss
        menuButton={btnEl}
        open={open}
        setOpen={setOpen}
        modal
        removeScrollbar={false}
        focusElementOnOpen="menuPopup"
      >
        <div
          class="modal-container bg-white"
          onClick={onClickOverlay}
          role="presentation"
        >
          <div
            class="modal"
            role="dialog"
            aria-modal="true"
            // tabindex="-1"
            ref={btnSaveEl}
          >
            <h4>Modal Text</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="close-btns">
              <button onClick={onClickClose}>Cancel</button>
              <button onClick={onClickClose}>Save</button>
            </div>
            <button
              class="x-btn"
              aria-label="close modal"
              onClick={onClickClose}
            >
              ✕
            </button>
          </div>
        </div>
      </Dismiss>
    </div>
  );
};
