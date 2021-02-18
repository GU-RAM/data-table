async function copyPageUrl(inputValue, cb) {
  try {
    await navigator.clipboard.writeText(inputValue);
    console.log('Page URL copied to clipboard');
    cb('SUCCESS');
  } catch (err) {
    console.error('Failed to copy: ', err);
    cb('FAILED');
  }
}

export { copyPageUrl };
