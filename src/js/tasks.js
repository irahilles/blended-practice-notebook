export function initFormHandler(refs, createMarkup) {
  refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleText = refs.titleInput.value;
    const descriptionText = refs.descriptionInput.value;

    if (!titleText || !descriptionText) return;

    const markup = createMarkup(titleText, descriptionText);
    refs.list.insertAdjacentHTML('beforeend', markup);
    refs.form.reset();
  });
}