/**
 * 작성자 : 홍길동
 * 연락처 : aaa@aaa.net;
 * 작성일 : 23-05-22
 * 기능 : 쇼핑몰 리스트 슬라이드 코드
 * 업데이트 : 각 쇼핑몰 리스트 목록 출력 함수화 작업
 */
window.addEventListener("load", function () {
    // 티켓 json 연동
    function parseTicket(_ticket) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (event) {
            let req = event.target;
            if (req.readyState === XMLHttpRequest.DONE) {
                let data = JSON.parse(req.response);
                makeTicketSlide(data);
            }
        };

        if (_ticket === "뮤지컬") {
            xhr.open("GET", "ticketdata.json");
        } else if (_ticket === "뮤지컬") {
            xhr.open("GET", "ticketdata1.json");
        } else if (_ticket === "콘서트") {
            xhr.open("GET", "ticketdata2.json");
        } else if (_ticket === "연극") {
            xhr.open("GET", "ticketdata3.json");
        } else if (_ticket === "클래식/무용") {
            xhr.open("GET", "ticketdata4.json");
        } else if (_ticket === "스포츠") {
            xhr.open("GET", "ticketdata5.json");
        } else if (_ticket === "레저/캠핑") {
            xhr.open("GET", "ticketdata6.json");
        } else if (_ticket === "전시/행사") {
            xhr.open("GET", "ticketdata7.json");
        } else if (_ticket === "아동/가족") {
            xhr.open("GET", "ticketdata8.json");
        }

        xhr.send();
    }
    parseTicket("뮤지컬");

    let ticketSwiper;

    function makeTicketSlide(_data) {
        let html = ``;
        for (let i = 0; i < _data.ticket_total; i++) {
            let obj = _data[`ticket_${i + 1}`];
            let temp = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="ticket-link">
              <div class="ticket-img">
                <img src="images/${obj.poster}" alt="${obj.title}" />
                <span class="ticket-rank">${obj.rank}</span>
              </div>
              <div class="ticket-info">
                <ul class="ticket-info-list">
                  <li>
                    <span class="ticket-title"><b>${obj.title}</b></span>
                  </li>
                  <li>
                    <span class="ticket-hall">${obj.hall}</span>
                  </li>
                  <li>
                    <span class="ticket-date">${obj.date}</span>
                  </li>
                  <li><span class="ticket-sale">${obj.sale}</span></li>
                </ul>
              </div>
            </a>
          </div>
        `;
            html += temp;
        }
        const swTicketWrapper = document.querySelector(".sw-ticket .swiper-wrapper");
        swTicketWrapper.innerHTML = html;

        let ticketSwiper = new Swiper(".sw-ticket", {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
                nextEl: ".ticket .sw-next",
                prevEl: ".ticket .sw-prev",
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 27,
                },
            },
        });
    }
    const btns = this.document.querySelectorAll(".ticket .btns a");
    btns[0].onclick = function (event) {
        event.preventDefault();
        parseTicket("뮤지컬");
    };
    btns[1].onclick = function (event) {
        event.preventDefault();
        parseTicket("콘서트");
    };
    btns[2].onclick = function (event) {
        event.preventDefault();
        parseTicket("연극");
    };
    btns[3].onclick = function (event) {
        event.preventDefault();
        parseTicket("클래식/무용");
    };
    btns[4].onclick = function (event) {
        event.preventDefault();
        parseTicket("스포츠");
    };
    btns[5].onclick = function (event) {
        event.preventDefault();
        parseTicket("레저/캠핑");
    };
    btns[6].onclick = function (event) {
        event.preventDefault();
        parseTicket("전시/행사");
    };
    btns[7].onclick = function (event) {
        event.preventDefault();
        parseTicket("아동/가족");
    };
});
