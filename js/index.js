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
};