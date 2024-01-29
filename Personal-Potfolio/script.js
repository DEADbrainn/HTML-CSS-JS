const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');

    const sectionId = this.querySelector('.link-item').getAttribute('href');
    activeSection(sectionId);

}
list.forEach((item)=>
item.addEventListener('click',activeLink));


document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        toggglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function toggglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",toggglePortfolioPopup);

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        toggglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}






document.addEventListener("click", (e) => {
    const linkItem = e.target.closest('.link-item');
    
    if (linkItem && linkItem.hash !== "") {
        console.log(linkItem.hash);
        activeSection(linkItem.hash);
    }
});
function activeSection(sectionId){
    document.querySelector("section.active").classList.remove("active");
    document.querySelector(sectionId).classList.add("active");
}