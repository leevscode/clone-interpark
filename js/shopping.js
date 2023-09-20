window.addEventListener("load", function () {

  function parseShopping(_menu) {

    if (_menu === "쎈딜") {
      fetch("data/shoppingdata.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    } else if (_menu === "베스트") {
      // xhr.open("GET", "data/shoppingdata1.json");
      fetch("data/shoppingdata1.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result));
    } else if (_menu === "오늘만특가") {
      fetch("data/shoppingdata2.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    } else if (_menu === "어린이날") {
      // xhr.open("GET", "data/어린이날.json");
      fetch("data/어린이날.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    }

  }
  parseShopping("쎈딜");

  let shoppingSwiper;

  function makeShoppingSlide(_data) {
    let swShoppingHtml = ``;
    for (let i = 0; i < _data.good_count; i++) {
      let obj = _data[`good_${i + 1}`];

      let temp = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="good">
              <img src="images/${obj.pic}" alt="${obj.product}" />
              <div class="good-info">
                <ul class="good-info-list">
                  <li>
                    <b><span>${obj.ratio}%</span> ${obj.price}원</b>
                  </li>
                  <li><p>${obj.product}</p></li>
                </ul>
              </div>
            </a>
          </div>
        `;
      swShoppingHtml += temp;
    }
    let swShoppingWrapper = document.querySelector(
      ".sw-shopping .swiper-wrapper"
    );
    swShoppingWrapper.innerHTML = swShoppingHtml;

    // 새로 생성전에 swiper API를 이용해서 삭제한다.
    if (shoppingSwiper) {
      shoppingSwiper.destroy();
    }

    shoppingSwiper = new Swiper(".sw-shopping", {
      slidesPerView: 5,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 10,
      navigation: {
        nextEl: ".shopping .sw-next",
        prevEl: ".shopping .sw-prev",
      },
      breakpoints: {
        1024: {
          spaceBetween: 32,
          slidesPerView: 3,
          // 화면당 3개씩 슬라이드 이동
          slidesPerGroup: 3,
          grid: {
            rows: 1,
          },
        },
        1280: {
          spaceBetween: 26,
          slidesPerView: 4,
          // 화면당 4개씩 슬라이드 이동
          slidesPerGroup: 4,
          grid: {
            rows: 1,
          },
        },
      },
    });
  }

  // 버튼 클릭시 카테고리 변경
  // 대상이 1개인 경우는 querySelaector
  // 대상이 여러개인 경우는 querySelaectorAll
  // a태그가 4개이므로  querySelaectorAll
  const btns = this.document.querySelectorAll(".shopping .btns a");
  let cateName = ["쎈딜", "베스트", "오늘만특가", "어린이날"];
  for (let i = 0; i < cateName.length; i++) {
    btns[i].onclick = function (event) {
      // a 태그의 기본 동작인 href를 막는다.
      event.preventDefault();
      parseShopping(cateName[i]);
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("btns-active");
      }
      // 포커스 적용
      this.classList.add("btns-active");
    };
  }
});
