import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";

export const Popup = () => {
  const [open, setOpen] = createSignal(false);
  let btnEl;

  return (
    <div style="position: relative;">
      <button class="bg-white" ref={btnEl}>
        Button
      </button>
      <Dismiss menuButton={btnEl} open={open} setOpen={setOpen}>
        <div class="popup">
          <p>Popup text!</p>
          <p>
            Lorem, <a href="#">ipsum</a> dolor.
          </p>
        </div>
      </Dismiss>
    </div>
  );
};
