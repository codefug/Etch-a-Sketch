# Etch-a-Sketch
Using DOM manipulation, I will make Etch-a-Sketch project. as previous project, I will do think, plan, and make it.

1. 16 * 16 div 그리드로 웹페이지를 만듭니다.
    1-1. div를 div 안에 넣는 형식으로 만들어라
2. flexbox를 활용하여 div를 그리드로 표시합니다.
    2-1. CSS Grid를 쓰진 마
3. border와 margin은 사각형의 크기를 조정할 수도 있다.
4. 그리드 안되면
    4-1. css 연결
    4-2. 개발자 도구 열기
    4-3. 콘솔 확인
    4-4. 요소 창 확인
    4-5. console.log를 통해 로드 확인
5. 마우스가 그리드 div 위로 지나갈 때 색상이 변경되어 펜처럼 흔적을 남겨라. (hover)
    5-1. 호버에 이벤트 리스너를 설정할 수 있다.
    5-2. 색상 변경 방법
        5-2-1. div에 새 클래스를 추가
        5-2-2. JS를 사용하여 div의 배경색을 변경
6. 버튼 추가 (user에게 새 그리드의 측면당 사각형 수를 묻는 팝업을 띄운다.)
    6-1. 팝업에 입력이 되면 기존 그리드 삭제 > 전체 공간에 새 그리드 생성
    6-2. 사용자 입력 제한을 최대 100으로 설정
        6-2-1. button 태그 누르면 js 기능 실행
        6-2-2. prompt 누르면 js 기능 실행
        6-2-3. 64를 누르면 64 * 64 grid 팝업이 픽셀 변경 없이 나와야 한다. (flexbox)
7. 사각형
    7-1. black to white 말고 각 작업이 RGB값을 무작위로 꺼내야 한다.
    7-2. 점진적인 어두움을 주자. 완전히 검은색 정사각형은 10번 상호작용 이후에 되도록