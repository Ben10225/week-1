// 視窗界面不同時調整圖的順序

let width = document.body.clientWidth
if(width < 1201 && width>600){
    html = document.querySelector(".itemBox")
    html.innerHTML = `
    <div class="item">
        <div class="itemImg bp_m1"></div>
        <div class="itemTxt teamR">Jisoo</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m1"></div>
        <div class="itemTxt teamB">Yura</div>
    </div>
    <div class="item">
        <div class="itemImg bp_m2"></div>
        <div class="itemTxt teamR">Jennie</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m2"></div>
        <div class="itemTxt teamB">Min-ah</div>
    </div>
    <div class="item">
        <div class="itemImg bp_m3"></div>
        <div class="itemTxt teamR">Rose</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m3"></div>
        <div class="itemTxt teamB">So Jin</div>
    </div>
    <div class="item">
        <div class="itemImg bp_m4"></div>
        <div class="itemTxt teamR">Lisa</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m4"></div>
        <div class="itemTxt teamB">Hyeri</div>
    </div>
    `
}else if(width <= 600){
    html = document.querySelector(".itemBox")
    html.innerHTML = `
    <div class="item">
        <div class="itemImg bp_m1"></div>
        <div class="itemTxt teamR">Jisoo</div>
    </div>
    <div class="item">
        <div class="itemImg bp_m2"></div>
        <div class="itemTxt teamR">Jennie</div>
    </div>
    <div class="item">
        <div class="itemImg bp_m3"></div>
        <div class="itemTxt teamR">Rose</div>
    </div>
    <div class="item">
        <div class="itemImg bp_m4"></div>
        <div class="itemTxt teamR">Lisa</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m1"></div>
        <div class="itemTxt teamB">Yura</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m2"></div>
        <div class="itemTxt teamB">Min-ah</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m3"></div>
        <div class="itemTxt teamB">So Jin</div>
    </div>
    <div class="item">
        <div class="itemImg gd_m4"></div>
        <div class="itemTxt teamB">Hyeri</div>
    </div>
    `
}