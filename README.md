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

2. colorPicker

3. random

4. eraser

5. clear

6. border

7. backgroundcolor

8. palette

9. set