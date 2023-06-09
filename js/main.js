const opinionContainers = [...document.querySelectorAll(".opinion-container")];

const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const prevBtn = [...document.querySelectorAll(".prev-btn")];
opinionContainers.forEach((item, i) => {
    let containerDeminsions = item.getBoundingClientRect();
    let containerWidth = containerDeminsions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    prevBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
})