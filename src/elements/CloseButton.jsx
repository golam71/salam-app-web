export const CloseButton = (onClick) => {
  return (
    <button
      type="button"
      class="inline-flex items-center px-6 py-2 border border-transparent shadow-sm text-base font-bold rounded-md text-black bg-aquamarine hover:bg-aquamarine-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aquamarine-300"
      onClick={onClick}
    >
      <slot name="text" />

      <div>
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"
          />
        </svg>
      </div>
    </button>
  );
};
