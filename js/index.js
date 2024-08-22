// 实现模糊查询
let keyword = document.querySelector('.keyword'); // 获取输入框
let searchHelper = document.querySelector('.search-help'); // 获取下拉列表
// 切换输入框的关键字
(function (){
    let keywords = ['Swisse京东超级品牌日 爆款低至5折', '华为手机', '苹果手机', '小米手机', '电视机', '笔记本'];
    let index = 0;
    // 设置HTML的标准属性：元素节点。属性="属性值"
    setInterval(function(){
        index++;
        if(index > keywords.length-1){
            index = 0;
        }
        // 设置placeholder属性
        keyword.placeholder = keywords[index];
    },3000);
})();
// 定义数组，存储搜索内容
let searchArr = ['华为手机', '苹果手机', '小米手机', '电视机', '笔记本'];
// 给输入框绑定内容改变事件
// 添加一个定时器
let timerInput = null;
keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0; i < searchArr.length; i++){
        if (searchArr[i].indexOf(keyword.value.trim()) !== -1) {
            // 创建一个段落元素作为搜索建议
            let suggestion = document.createElement('p');
            suggestion.textContent = searchArr[i];
            // 为搜索建议添加点击事件监听器
            suggestion.addEventListener('click', function() {
                keyword.value = this.textContent; // 将输入框的值设置为点击的搜索建议
                searchHelper.style.display = 'none'; // 隐藏下拉列表
            });
            searchHelper.appendChild(suggestion); // 将搜索建议添加到下拉列表中
        }
    }
    if (searchHelper.children.length > 0) {
        searchHelper.style.display = 'block'; // 如果有搜索建议，显示下拉列表
    }
    keyword.onblur = function(){
        timerInput = setTimeout(() => {
            searchHelper.style.display = 'none';
        },500);
    }
};
// 实现轮播图切换
let img = document.querySelector('.img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let fs_col2 = document.querySelector('.fs_col2');
let lis = document.querySelectorAll('.banner-btn li');

let imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let count = 0;
// 定义函数，用来切换图片路径
function cutImg(){
    img.src = './img/轮播图/' + imgArr[count];
    for(let i = 0; i < lis.length; i++){
        lis[i].className = '';
    }
    lis[count].className = 'active';
}
//设置定时器，每隔3秒切换图片
let timer = setInterval(function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
},3000);
// 点击上一张
prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }
    cutImg();
}
// 点击下一张
next.onclick = function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
}
// 鼠标划入，关掉定时切换图片
fs_col2.onmouseover = function(){
    clearInterval(timer);
}
// 鼠标划出，启动定时切换图片
fs_col2.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        if(count > imgArr.length - 1){
            count = 0;
        }
        cutImg();
    },3000);
}
/* // 给li绑定点击事件
for (let i = 0; i < lis.length; i++){
    lis[i].onclick = () => {
        count = i;
        cutImg();
    };
} */
// 鼠标落下触发
for (let i = 0; i < lis.length; i++){
    lis[i].onmouseover = () => {
        count = i;
        cutImg();
    };
} 