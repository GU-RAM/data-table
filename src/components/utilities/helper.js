async function copyPageUrl(inputValue, cb, cbFail) {
  try {
    console.log('guro');
    await navigator.clipboard.writeText(inputValue);
    console.log('Page URL copied to clipboard');
    cb();
  } catch (err) {
    console.error('Failed to copy: ', err);
    cbFail(false);
  }
}

export { copyPageUrl };
