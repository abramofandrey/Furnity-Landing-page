let sliderPosition = 0;
const productsSlidesToShow = 4;
const productsSlidesToScroll = 1;

const sliderContainer = document.querySelector('.products__slider-container');
const sliderTrack = document.querySelector('.products__slider-track');
const productsBtnPrev = document.querySelector('.products__btn-prev');
const productsBtnNext = document.querySelector('.products__btn-next');
const productsItems = document.querySelectorAll('.products__slider-item');
const productItemsCount = productsItems.length;

const productsItemWidth = sliderContainer.clientWidth / productsSlidesToShow;
const productsMovePosition = productsSlidesToScroll * productsItemWidth;

productsItems.forEach((item) => {
    item.style.minWidth = `${productsItemWidth}px`;
});

productsBtnNext.addEventListener('click', () => {
    const itemsMoveLeft = productItemsCount - (Math.abs(sliderPosition) + productsSlidesToShow * productsItemWidth) / productsItemWidth;

    sliderPosition -= itemsMoveLeft >= productsSlidesToScroll ? productsMovePosition : itemsMoveLeft * productsItemWidth;

    setSlidePosition();
    checkShiftBtns();
});

productsBtnPrev.addEventListener('click', () => {
    const itemsMoveLeft = Math.abs(sliderPosition) / productsItemWidth;

    sliderPosition += itemsMoveLeft >= productsSlidesToScroll ? productsMovePosition : itemsMoveLeft * productsItemWidth;

    setSlidePosition();
    checkShiftBtns();
});

const setSlidePosition = () => {
    sliderTrack.style.transform = `translateX(${sliderPosition}px)`;
};

const checkShiftBtns = () => {
    productsBtnPrev.disabled  = sliderPosition === 0;
    productsBtnNext.disabled = sliderPosition <= -(productItemsCount - productsSlidesToShow) * productsItemWidth; 
};

checkShiftBtns();