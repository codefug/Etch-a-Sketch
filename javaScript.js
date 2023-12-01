// 5. 마우스가 그리드 div 위로 지나갈 때 색상이 변경되어 펜처럼 흔적을 남겨라. (hover)
//     5-1. 호버에 이벤트 리스너를 설정할 수 있다.
//     5-2. 색상 변경 방법
//         5-2-1. div에 새 클래스를 추가
//         5-2-2. JS를 사용하여 div의 배경색을 변경
// 6. 버튼 추가 (user에게 새 그리드의 측면당 사각형 수를 묻는 팝업을 띄운다.)
//     6-1. 팝업에 입력이 되면 기존 그리드 삭제 > 전체 공간에 새 그리드 생성
//     6-2. 사용자 입력 제한을 최대 64으로 설정
//         6-2-1. button 태그 누르면 js 기능 실행
//         6-2-2. prompt 누르면 js 기능 실행
//         6-2-3. 64를 누르면 64 * 64 grid 팝업이 픽셀 변경 없이 나와야 한다. (flexbox)
// 7. 사각형
//     7-1. black to white 말고 각 작업이 RGB값을 무작위로 꺼내야 한다.
//     7-2. 점진적인 어두움을 주자. 완전히 검은색 정사각형은 10번 상호작용 이후에 되도록

const bodyLeft = document.querySelector('#bodyLeft'); // bodyLeft
const palette = document.querySelector('#palette'); //palette
const setButton = document.querySelector('#set'); //set
const languageSetting = document.querySelector("#lanContainer"); //languageSetting
const h1 = document.querySelector('h1'); //h1
const colorCircle = document.querySelector("#colorCircle");
const hiddenColorCircle = document.querySelector("#hiddenColorCircle");
const random = document.querySelector("#random");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const border = document.querySelector("#border");
const colorSlider = document.querySelector('#colorSlider');
let selectedColor = '#000000';
let borderSetting = 0;
let selectedLanguage = 1;
let eraserSetting = false;
let drawPalette = false;

// 0. 언어 팩

const lanPack = [
    ['SKETCH', '스케치'],
    ['Language Setting', '언어설정'],
    ['RANDOM', '랜덤'],
    ['ERASER', '지우개'],
    ['CLEAR', '지우기'],
    ['BORDER', '테두리'],
    ['Background-color', '배경색 설정'],
    ['SET', '설정']
];

// 1. headContent
languageSetting.addEventListener('change', (event) => {
    if (event.target.value == "ko") {
        let i = 0;
        selectedLanguage = 0;
        for (textele of [h1, languageSetting.childNodes[1],
            bodyLeft.childNodes[3], bodyLeft.childNodes[5],
            bodyLeft.childNodes[7], bodyLeft.childNodes[9],
            bodyLeft.childNodes[11].childNodes[1],
            setButton]) {
            textele.textContent = lanPack[i++][1]
        }
    } else {
        let i = 0;
        selectedLanguage = 1;
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
function promptFunction() {
    if (selectedLanguage == 1) {
        let n = prompt(`Please specify the size of the desired grid in the format 'n*n'(which means n*n)
        you can put it just the number. (less than or equal to 64)`);
        return n;
    } else {
        let n = prompt(`원하시는 그리드의 크기를 말해주세요 'n*n' 숫자만 적어주셔도 됩니다. ('n*n' 형식)
        (64이하 번호 적어주세요.)`);
        return n;
    }
}
// set
setButton.addEventListener('click', () => {
    let n = promptFunction();
    if (n != null) {
        n = Number(n.split('*')[0]);
    } else { return; };
    if (n == NaN || n > 64) {
        alert('64이하의 번호만 입력해주세요!')
    } else {
        palette.innerHTML = "";
        for (let i = 0; i < n; i++) {
            let newNodeContainer = document.createElement('div');
            newNodeContainer.classList.add('newNodeContainer');
            for (let j = 0; j < n; j++) {
                let newNode = document.createElement('div');
                newNode.classList.add('newNode');
                newNodeContainer.appendChild(newNode);
            }
            palette.appendChild(newNodeContainer);
        }
        if (borderSetting == 1) {
            borderPalette();
        }
        eraser.disabled = false;
        clear.disabled = false;
        border.disabled = false;
    }
})
// palette
// bodyLeft delegate : colorCircle, random, eraser, clear, colorsetting, border
palette.addEventListener('mousedown', (event) => {
    drawPalette = true; let target = event.target;
    if (target.classList.contains('newNode') && drawPalette) {
        palettehover(target);
    }
});

palette.addEventListener('mouseup', () => {
    drawPalette = false;
    console.log('mouseup')
});
palette.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target.classList.contains('newNode') && drawPalette) {
        palettehover(target);
    }
})

function palettehover(target) {
    if (!eraserSetting) {
        target.style.backgroundColor = selectedColor;
    } else {
        target.style.backgroundColor = '';
    }
}

// 3. bodyLeft

// bodyLeft function

function randomColor() {
    selectedColor = '#' + (Math.floor(Math.random() * 0xFFFFFF).toString(16)).padStart(6, '0');
    hiddenColorCircle.value = selectedColor;
    colorCircle.setAttribute('style', `background-color: ${selectedColor}`);
}

function eraserPalette() {
    eraserSetting = !eraserSetting;
}

function clearPalette() {
    palette.innerHTML = "";
    eraser.disabled = true;
    clear.disabled = true;
    border.disabled = true;
}

function borderPalette() {
    let newNode = document.querySelectorAll('.newNode');
    borderSetting = 1;
    for (nN of newNode) {
        if (nN.classList.contains('border')) {
            nN.classList.remove('border');
        }
        else {
            nN.classList.add('border');
        }
    }
}

function changeBackGroundColor(event){
    
}
// bodyLeft delegate : colorCircle, random, eraser, clear, colorsetting, border

colorCircle.addEventListener('click', () => { hiddenColorCircle.click() });
hiddenColorCircle.addEventListener('input', (event) => {
    colorCircle.setAttribute('style', `background-color:${event.target.value}`);
    selectedColor = event.target.value
});

bodyLeft.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        case 'random':
            randomColor();
            break;
        case 'eraser':
            eraserPalette();
            break;
        case 'clear':
            clearPalette();
            break;
        case 'border':
            borderPalette();
            break;
    }
})

// bodyLeft : background-color Setting colorSlider

colorSlider.addEventListener('change',changeBackGroundColor);