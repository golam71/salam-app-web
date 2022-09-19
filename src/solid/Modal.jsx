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
          class="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-blend-normal bg-black backdrop-blur-3xl bg-gray-500/30"
          onClick={onClickOverlay}
          role="presentation"
        >
          <div
            class="relative w-auto p-5 bg-gray-500/30  items-end flex flex-col "
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            ref={btnSaveEl}
          >
            <button
              class="p-2 m-2 bg-aquamarine"
              aria-label="close modal"
              onClick={onClickClose}
            >
              ✕
            </button>

            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              width="788.54"
              height="443"
              type="text/html"
              src="https://www.youtube.com/embed/RpmqwNaGMyM?autoplay=1&fs=1&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
            >
              <div>
                <small>
                  <a href="https://youtubeembedcode.com/de/">
                    youtubeembedcode.com/de/
                  </a>
                </small>
              </div>
              <div>
                <small>
                  <a href="https://bettingutanspelpaus.co/">
                    bettingutanspelpaus
                  </a>
                </small>
              </div>
            </iframe>
          </div>
        </div>
      </Dismiss>
    </div>
  );
};
