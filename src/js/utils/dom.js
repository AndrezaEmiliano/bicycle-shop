const setListener = (selector, event, calback) => {
  const element = document.querySelector(selector);

  element.addEventListener(event, calback);
};

export { setListener };
