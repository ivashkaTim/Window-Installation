const comments = () => {
  const commentsContainer = document.querySelector('.comments-container');

  const getComments = () => {
    const responceComments = fetch('../comments.json');
    responceComments
      .then((response) => response.json())
      .then((data) => {
        updateComents(data.comments);
      });
  };

  const updateComents = (arr) => {
    let i = 0;
    setInterval(() => {
      if (i > arr.length - 1) {
        i = 0;
      }

      const commentItemsAll = document.querySelectorAll('.comment-item');
      commentItemsAll[0].remove();

      const commentItem = document.createElement('div');
      commentItem.classList.add('review-margin-bottom', 'row', 'comment-item');
      commentsContainer.appendChild(commentItem);
      commentItem.innerHTML =
        '<div class="col-xs-3 col-sm-2">' +
        '<div class="review-user">' +
        `<img src="${arr[i].image}" alt="" class="img-responsive avatar">` +
        '</div>' +
        '</div>' +
        '<div class="col-xs-9 col-sm-9">' +
        '<div class="review-inner review-green review-arrow review-arrow-left">' +
        `<p class="text-normal">${arr[i].author}</p>` +
        `<p>${arr[i].comment}</p>` +
        '</div>' +
        '</div>';

      i++;
    }, 5000);
  };
  getComments();
};

export default comments;
