let thumbEls = document.querySelectorAll(".thumb");

thumbEls.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    popUp();
    document.body.classList.add("overflow-none");
  });
});

function popUp() {
  const popUpCont = document.createElement("div");
  popUpCont.classList.add("pop-up-container");
  popUpCont.innerHTML = `  <div class="pop-up">
  <button class="pop-up-close"><i class="fas fa-close"></i></button>
  <div class="pop-up-box">
      <div class="pop-up--content">
          <h2 class="pop-up--header">Confirm your support</h2>
          <div class="pop-up--body">
              <div class="pop-up--text">To record your support i ask that you enter your <br> email to know it
                  is genuine and not spammed 🥺. <br>
                  <span>I promise to never use your email for spam.</span>
              </div>
              <form name="mail" class="mail">
                  <input type="email" name="email" class="mail--input" placeholder="Enter your email">
                  <button type="button" class="mail--btn">
                      <i class="fas fa-plane"></i>
                  </button>
              </form>
          </div>
      </div>
  </div>
</div>`;

  let closeBtn = popUpCont.querySelector(".pop-up-close");
  closeBtn.addEventListener("click", (e) => {
    popUpCont.remove();
    document.body.classList.remove("overflow-none");
  });

  document.body.appendChild(popUpCont);
}

const navEl = document.querySelector(".home-nav");
let logAlphs = document.querySelectorAll(".logo-fill");
const mailR = document.querySelector("#mail-rect");
const mailP = document.querySelector("#mail-path");

function changeNav() {
  window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    logAlphs.forEach((alph) => {
      if (top < 1040) {
        alph.classList.add("logo-blue");
        mailP.classList.add("mail-blue-path");
        mailR.classList.add("mail-blue-rect");
      } else {
        alph.classList.remove("logo-blue");
        mailP.classList.remove("mail-blue-path");
        mailR.classList.remove("mail-blue-rect");
      }

      if (top > 1040 && top < 2700) {
        alph.classList.add("logo-brown");
        mailP.classList.add("mail-brown-path");
        mailR.classList.add("mail-brown-rect");
      } else {
        alph.classList.remove("logo-brown");
        mailP.classList.remove("mail-brown-path");
        mailR.classList.remove("mail-brown-rect");
      }

      if (top > 2700 && top < 4350) {
        alph.classList.add("logo-green");
        mailP.classList.add("mail-green-path");
        mailR.classList.add("mail-green-rect");
      } else {
        alph.classList.remove("logo-green");
        mailP.classList.remove("mail-green-path");
        mailR.classList.remove("mail-green-rect");
      }

      if (top > 4350) {
        alph.classList.add("logo-black");
        mailP.classList.add("mail-black-path");
        mailR.classList.add("mail-black-rect");
      } else {
        alph.classList.remove("logo-black");
        mailP.classList.remove("mail-black-path");
        mailR.classList.remove("mail-black-rect");
      }
    });
  };
}

changeNav();
