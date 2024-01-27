export const smoothScrollToTop = () => {
  const scrollToTop = () => {
    const currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 10);
    }
  };
  scrollToTop();
};