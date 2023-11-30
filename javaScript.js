const bodyLeft = document.querySelector('#bodyLeft'); // bodyLeft
const palette = document.querySelector('#palette'); //palette
const setButton = document.querySelector('#set'); //set
const languageSetting = document.querySelector("#lanContainer"); //languageSetting
const h1 = document.querySelector('h1'); //h1
const colorCircle = document.querySelector("#colorCircle");
const hiddenColorCircle = document.querySelector("#hiddenColorCircle");
let selectedLanguage=1;
  
// 0. 언어 팩

const lanPack = [
    ['SKETCH', '스케치'],
    ['Language Setting', '언어설정'],
    ['RANDOM', '랜덤'],
    ['ERASER', '지우개'],
    ['CLEAR', '지우기'],
    ['BORDER','테두리'],
    ['Background-color', '배경색 설정'],
    ['SET', '설정']
];

// 1. headContent
languageSetting.addEventListener('change', (event) => {
    if (event.target.value == "ko") {
        let i = 0;
        selectedLanguage=0;
        for (textele of [h1, languageSetting.childNodes[1],
            bodyLeft.childNodes[3], bodyLeft.childNodes[5],
            bodyLeft.childNodes[7], bodyLeft.childNodes[9],
            bodyLeft.childNodes[11].childNodes[1],
            setButton]) {
            textele.textContent = lanPack[i++][1]
        }
    } else {
        let i = 0;
        selectedLanguage=1;
        for (textele of [h1, languageSetting.childNodes[1],
            bodyLeft.childNodes[3], bodyLeft.childNodes[5],
            bodyLeft.childNodes[7], bodyLeft.childNodes[9],
            bodyLeft.childNodes[11].childNodes[1],
            setButton]) {
            textele.textContent = lanPack[i++][0]
        }
    }
}
)


// 2. bodyRight
//prompt
function promptFunction(){
    if (selectedLanguage==1){
        let n=prompt(`Please specify the size of the desired grid in the format 'n*n'(which means n*n)
        you can put it just the number. (less than or equal to 64)`);
        return n;
    }else{
        let n=prompt(`원하시는 그리드의 크기를 말해주세요 'n*n' 숫자만 적어주셔도 됩니다. ('n*n' 형식)
        (64이하 번호 적어주세요.)`);
        return n;
    }
}
// set
setButton.addEventListener('click',()=>{
    let n=promptFunction();
    n=Number(n.split('*')[0]);
    console.log(typeof(n));
    if (n==null || n==NaN){
        alert('64이하의 번호만 입력해주세요!')
    }else{
        palette.innerHTML="";
        for (let i=0;i<n;i++){
            let newNodeContainer=document.createElement('div');
            newNodeContainer.classList.add('newNodeContainer');
            for (let j=0;j<n;j++){
                let newNode=document.createElement('div');
                newNode.classList.add('newNode');
                newNodeContainer.appendChild(newNode);
            }
            palette.appendChild(newNodeContainer);
        }
    }
})
// palette

// 3. bodyLeft
colorCircle.addEventListener('click',()=>{hiddenColorCircle.click()});  
// bodyLeft delegate : colorCircle, random, eraser, clear, colorsetting, border
bodyLeft.addEventListener('click',(event)=>{
    
})

//let randomColor = Math.floor(Math.random()*16777215).toString(16);