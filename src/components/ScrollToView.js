export const ScrollToView = (divId) => {
  const element = document.getElementById(divId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
