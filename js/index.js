let productsDetails = Array.from(document.querySelectorAll('.productDetails'));
let indexs = Array.from(document.querySelectorAll('.index'));

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
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
