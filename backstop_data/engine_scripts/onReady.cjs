module.exports = async (page /*, scenario, vp, isReference, engine, config */) => {
  try {
    await page.addStyleTag({ content: `
      /* Hide dynamic captcha block which changes content each run */
      #captchaBlock { display: none !important; }
      #captchaError { display: none !important; }
    `});
  } catch (e) {
    // no-op if style injection fails
  }
  await page.waitForTimeout(250);
};
