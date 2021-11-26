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
    let j = 0;
    setInterval(() => {
      if (i > arr.length - 1) {
        i = 0;
      }

      const commentItemsAll = document.querySelectorAll('.comment-item');
      if (commentItemsAll.length > 2) {
        commentItemsAll[0].remove();
      }

      const divClassComment = [
        'review-gray review-arrow review-arrow-right',
        'review-green review-arrow review-arrow-left',
        'review-orange review-arrow review-arrow-left',
      ];

      if (j > divClassComment.length - 1) {
        j = 0;
      }

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
        `<div class="review-inner ${divClassComment[j]}">` +
        `<p class="text-normal">${arr[i].author}</p>` +
        `<p>${arr[i].comment}</p>` +
        '</div>' +
        '</div>';
      j++;
      i++;
    }, 2000);
  };
  getComments();
};

export default comments;
