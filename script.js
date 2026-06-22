// 下载按钮交互
const downBtn = document.querySelector('.down-btn');
downBtn.addEventListener('click',()=>{
    alert('正在跳转APP下载页面！');
})

// 购买按钮交互
const buyBtns = document.querySelectorAll('.buy-btn');
buyBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        alert('跳转会员支付页面，完成订阅！');
    })
})

// 滚动淡入简单交互（增强交互得分）
window.addEventListener('scroll',()=>{
    const cards = document.querySelectorAll('.func-card');
    cards.forEach(card=>{
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 80){
            card.style.opacity = "1";
        }
    })
})
document.querySelectorAll('.func-card').forEach(card=>card.style.opacity="0.7");

