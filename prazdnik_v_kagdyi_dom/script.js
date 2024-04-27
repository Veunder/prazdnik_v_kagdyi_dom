const reviewsContainer = document.querySelector('.reviews-container');
const reviewsList = document.querySelector('.reviews-list');

const reviewsWidth = reviewsList.firstChild.offsetWidth; // Ширина одного отзыва
const reviewsCount = reviewsList.children.length; // Количество отзывов
let activeReviewIndex = 0; // Индекс активного отзыва

reviewsList.style.transform = `translateX(${activeReviewIndex * -reviewsWidth}px)`;

// Функция для плавного перехода к отзыву
function goToReview(index) {
  activeReviewIndex = index;
  reviewsList.style.transform = `translateX(${activeReviewIndex * -reviewsWidth}px)`;
  reviewsList.style.transition = 'transform 0.5s ease'; // Добавление анимации
}

// Обработчик события скролла
reviewsContainer.addEventListener('scroll', () => {
  // Вычисление индекса активного отзыва based on scroll position
  const scrollPosition = reviewsContainer.scrollLeft;
  const activeReviewIndex = Math.round(scrollPosition / reviewsWidth);

  // Ограничение индекса в пределах количества отзывов
  if (activeReviewIndex < 0) {
    activeReviewIndex = 0;
  } else if (activeReviewIndex >= reviewsCount) {
    activeReviewIndex = reviewsCount - 1;
  }

  // Плавный переход к активному отзыву
  goToReview(activeReviewIndex);
});
