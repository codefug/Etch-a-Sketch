# Etch-a-Sketch
Using DOM manipulation, I will make Etch-a-Sketch project. as previous project, I will do think, plan, and make it.

프로그램 문서 작성

HTML
1. input color
    1-1. color picker를 열 수 있다. 값을 value에 저장하는 식이다.

2. input range
    2-1. slider를 열 수 있다. 값을 value에 저장하는 식이다.
    2-2. 이걸 이용해서 color를 지정하기 위해 hex값을 넣기 위해 #ffffff의 십진수 값을 최대값으로 설정했다.

3. button id="set"
    3-1. button 안에 text를 정렬하기 위해 flex 박스를 써야한다.

4. bodyContent의 flexbox
    4-1. 다양한 화면에 최적화되기 위해서는 flexbox를 활용하는 것이 가장 현명한데 (현재 지식 수준에서는) 이를 위해서 bodyCOntainer라는 진짜 내용을 담는 친구들, 그리고 side 두개로 나누어서 flexBox를 구성하였다.

CSS
1. js 활용 css
    1-1. js를 이용해서 palette를 만들 때 class를 삽입하는 식으로 조작하기 위해서 newNode, newNodeContainer를 css로 지정하여 정해놓았다. html에는 두 클래스가 없지만 js에 의해서 생기게 된다.
    1-2. border 버튼을 js를 통해서 활성화, 비활성화하는데 이것 역시 class로 조작한다.
    1-3. class로 조작하는 걸 활용하여 eraser 버튼이 눌러진 상태라는걸 표현하는 .pressButton을 추가한다.

2. 전체 설정
    2-1. head와 foot를 largecomponent로 묶어둔다.
    2-2. 버튼의 format를 하나로 만든다. (.niceButton)
    2-3. body의 기본 margin을 삭제하고 flex를 설정한다. 이로써 가장 큰 하위 요소들이 flex 요소가 되었다.

3. headContent
    3-1. 최상단은 넓이를 최대한 뻗어야 한다. align-self: stretch (전체가 flex-direction: column)
    3-2. lanContainer의 경우 가운데에 있는 것이 보기 좋은 것 같았고 가로로 설명해줘야 보기 좋을 것 같았다.

4. bodyLeft
    4-1. slider의 넓이를 100%로 해야 충분히 길어진다.
    4-2. 크기가 줄었을 때 보기 좋을려면 colorsetting에 margin : 10%가 필요했다.
    4-3. radius 50%로 원을 표시하고 margin: 0 auto를 이용해서 수평 정렬을 맞췄고 원 가운데에 picker가 나오게 하기 위해 flex를 이용했다.
    4-4. color picker는 외부에 보이기엔 투박하기 때문에 opacity: 0으로 보이지 않게 했다.

5. bodyRight
    5-1. 임의적으로 height가 맞춰져 있다. 나중에 flex grow나 shrink로 비율을 맞추면 좀 더 유동적으로 할 수 있을 것 같다. ******
    5-2. set 수평을 맞추기 위해 align-self:center;


javaScript

1. languagesetting
    1-1. lanPack에 저장해서 인덱스를 통해서 설정
    1-2. 어떤 언어를 선택했는지 인덱스를 지정한다.

2. set
    2-1. promptFunction()은 변수 n에 prompt를 이용해 원하는 수를 담고 n를 리턴한다.
    2-2. n==null 이면 그냥 return하게 하고 null이 아니면 받아온 형식을 *을 기준으로 나누기 위해서 .split('*')해준다.
    2-3. n==NaN 이면 숫자가 아닌 것을 첫 인덱스로 한거기 때문에 경고창, 64넘어도 경고창
    2-4. 모두 아닐 경우 newNode라는 클래스를 가진 div들을 그리드 방식으로 생성해준다.
    2-5. 만들 때 border 버튼을 이미 누른 상태면 border를 생성해줘야한다.
    2-6. 초기 상태였다면 random을 제외하고 disabled된 상태인 버튼들을 풀어줘야 한다.

3. palette
    3-1. 화면 안에 들어가면 마우스를 클릭한 상태로 드래그하면 palette가 색칠되도록 해야한다.
    3-2. drawPalette : 화면에서 나갔다가 다시 들어오는 경우, 필요한 boolean이다. 나갔다가 다시 들어올때 mousedown이 아님에도 mouseover 상태이기 때문에 그려지는 경우가 있었다. 따라서 mouseleave된다면 drawPalette를 false로 만들어서 위의 예외 상황을 처리한다.
    3-3. palettehover : eraserSetting의 처리, 즉 eraser 버튼을 누른 상태인지 처리하는걸 함수 자체에서 한다. eraser면 없애는 것을 palette에 칠하고 아니면 선택된 전역 변수 selectedColor를 칠하는 함수가 된다.

4. randomColor
    4-1. Math.random()은 0이상 1미만까지 랜덤으로 실수를 꺼낸다. 이를 이용해 최대값을 곱하고 Math.floor로 소수부분 짤라내면 내가 원하는 범위의 랜덤 수를 찾을 수 있다.
    4-2. 이를 이용해 color들을 처리한다.

5. eraserPalette
    5-1. 버튼을 누르면 전역 변수를 바꾸고 이에 따라서 eraser버튼의 상태가 바뀌어야 한다.

6. clearPalette
    6-1. palette 자체를 비우고 초기상태로 만들어야 한다. (버튼도 함께 처리)

7. borderPalette
    7-1. palette를 전체 돌려서 border를 더해준다.

8. changeBackGroundColor
    8-1. body 전체에 selectedColor를 지정해줘야 한다.

9. colorCircle
    9-1. hiddenColorCircle이라는 color picker에 colorCIrcle을 연결하여 click하면 켜질 수 있도록 해준다.

10. bodyLeft
    10-1. event delegate를 이용해 아래의 버튼들을 동시에 처리한다.