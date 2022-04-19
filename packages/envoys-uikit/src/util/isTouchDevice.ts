const isTouchDevice = (): boolean => {
  return (
    typeof window !== "undefined" &&
    // @ts-expect-error: Expected navigator error
    ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)
  );
};

export default isTouchDevice;
