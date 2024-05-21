let productsDetails = Array.from(document.querySelectorAll('.productDetails'));
let indexs = Array.from(document.querySelectorAll('.index'));

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    prevArrow: false,
    nextArrow: false,
});

productsDetails.map((product, i) => {
    product.addEventListener('click', () => {
        location.href = `details.html?index=${i}`;
    });
});

const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get('index'));
// console.log(params);
// console.log(index);

if (!isNaN(index) && index >= 0 && index < indexs.length) {
    // console.log(indexs[index]);
    indexs[index].classList.replace('d-none' , 'd-block')
} 
