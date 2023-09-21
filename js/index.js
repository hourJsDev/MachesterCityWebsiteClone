import { players } from "./data.js";
const btnList = document.querySelector(".btnList");
const allBtn = document.querySelectorAll(".btn");
const defenderList = document.getElementById("defender-list");
const goalkeeperList = document.getElementById("goalkeeper-list");
const midList = document.getElementById("mid-list");
const forwardList = document.getElementById("forward-list");
const managerList = document.getElementById("manager-list");
const assManagerList = document.getElementById("Assmanager-list");
const btnPreDef = document.querySelector(".btn-pre-def");
const btnNextDef = document.querySelector(".btn-next-def");
const btnPreMid = document.querySelector(".btn-pre-mid");
const btnNextMid = document.querySelector(".btn-next-mid");
const btnNextG = document.querySelector(".btn-next-g");
const btnPreG = document.querySelector(".btn-pre-g");
const btnNextF = document.querySelector(".btn-next-f");
const btnPreF = document.querySelector(".btn-pre-f");
const topPage = document.querySelector(".top-page");
const btnPreAs = document.querySelector(".btn-pre-as");
const btnNextAs = document.querySelector(".btn-next-as");
const allPlayerCard = document.querySelectorAll(".player-cards");
const cardPopup = document.querySelector(".card-popup");
const cardPopupContainer = document.querySelector(".card-popup-container");
const closeBtn = document.querySelector(".closeBtn");
const sectionPlayers = document.querySelectorAll(".player-info-section");
const headPage = document.querySelector(".head-page");
// const bioPopup = document.querySelector(".bio");

//click on player card to show player infomation
allPlayerCard.forEach((listcard) => {
  listcard.addEventListener("click", (e) => {
    headPage.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    cardPopupContainer.classList.toggle("show");
    // bioPopup.classList.toggle("show");
    sectionPlayers.forEach((section) => {
      section.style.display = "none";
    });
    cardPopup.classList.add("show");
    const firstName = e.target.parentElement.parentElement.dataset.id;
    const findPlayer = players.filter((p) => {
      return p.lname == firstName;
    });
    const result = findPlayer
      .map((p) => {
        return `<div class="img-card-popup">
    <img src="${p.src}" alt="${p.lname}">
  </div>
  <div class="info-card-popup">
    <h1 class="fname-card-popup">${p.fname}</h1>
    <h1 class="lname-card-popup">${p.lname}</h1>
    <h1 class="number-card-popup">#${p.number}</h1>
  </div>`;
      })
      .join("");
    cardPopup.innerHTML = result;
  });
});

closeBtn.addEventListener("click", () => {
  cardPopup.classList.remove("show");
  headPage.classList.toggle("hide");
  cardPopupContainer.classList.toggle("show");
  closeBtn.classList.toggle("show");
  // bioPopup.classList.toggle("show");
  sectionPlayers.forEach((section) => {
    section.style.display = "block";
  });
});
btnList.addEventListener("click", (e) => {
  const btnNew = e.target;
  allBtn.forEach((btn) => {
    btnNew.classList.add("active");
    btn.classList.remove("active");
  });
});
allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const teamType = e.target.dataset.id;
    showPlayer(goalkeeperList, "Goalkeeper", teamType);
    showPlayer(defenderList, "Defender", teamType);
    showPlayer(midList, "Midfielder", teamType);
    showPlayer(forwardList, "Forward", teamType);
    showPlayer(managerList, "Manager", teamType);
    showPlayer(assManagerList, "Assmanager", teamType);
  });
});
const showPlayer = (playerList, filter, teamType) => {
  const filterCard = players.filter((p) => {
    return p.position == filter && p.teamType == teamType;
  });
  const playerCard = filterCard
    .map((p) => {
      return `
        <article data-id="${p.lname}">
          <div class="img ">
            <img src="${p.src}" alt="${p.lname}" />
          </div>
          <div class="player-name">
            <h3 class="fname">${p.fname}</h3>
            <h3 class="lname">${p.lname}</h3>
          </div>
          <h3 class="number">${p.number}</h3>
        </article>`;
    })
    .join("");
  playerList.innerHTML = playerCard;
};
window.addEventListener("DOMContentLoaded", () => {
  showPlayer(goalkeeperList, "Goalkeeper", "Man");
  showPlayer(defenderList, "Defender", "Man");
  showPlayer(midList, "Midfielder", "Man");
  showPlayer(forwardList, "Forward", "Man");
  showPlayer(managerList, "Manager", "Man");
  showPlayer(assManagerList, "Assmanager", "Man");
});

// btn for midfielder list
let slm = 0;
btnNextMid.addEventListener("click", () => {
  slm += 300;
  midList.scrollLeft = slm;
});
btnPreMid.addEventListener("click", () => {
  slm -= 300;
  midList.scrollLeft = slm;
});
// btn for defender list
let sld = 0;
btnNextDef.addEventListener("click", () => {
  sld += 300;
  defenderList.scrollLeft = sld;
});
btnPreDef.addEventListener("click", () => {
  sld -= 300;
  defenderList.scrollLeft = sld;
});
// btn for goalkeeper list
let slg = 0;
btnNextG.addEventListener("click", () => {
  slg += 300;
  goalkeeperList.scrollLeft = slg;
});
btnPreG.addEventListener("click", () => {
  slg -= 300;
  goalkeeperList.scrollLeft = slg;
});
// btn for forward list
let slf = 0;
btnNextF.addEventListener("click", () => {
  slf += 300;
  forwardList.scrollLeft = slf;
});
btnPreF.addEventListener("click", () => {
  slf -= 300;
  forwardList.scrollLeft = slf;
});
// btn for Assiatant manager  list
let slas = 0;
btnNextAs.addEventListener("click", () => {
  slas += 300;
  assManagerList.scrollLeft = slas;
});
btnPreAs.addEventListener("click", () => {
  slas -= 300;
  assManagerList.scrollLeft = slas;
});
//sroll animation for toppage
window.addEventListener("scroll", () => {
  topPage.classList.toggle("scroll", scrollY > 0);
});
