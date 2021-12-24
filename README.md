# *MAUV PAGE PROJECT*

## 2021-12-24 업데이트(v 1.0.0)
1. 구조 변경: 각 최상위 컴포넌트의 구조가 변경되었습니다. HTML 구조에 따라 재배열 되었으며, `<header>`, `<main>`이 추가되었습니다.
2. React Memo가 사용되어 최적화가 진행 되었습니다.
3. 기존의 스크롤러가 없던 상태에서 스크롤러를 마우스로 사용할 수 있게 변경되었습니다.
4. MIT 라이센스가 추가되었습니다.

## A. Stack
1. Next JS
2. React Bootstrap
3. Scss

## B. Plan
1. Day 1:
- Scrollable per page
- Navigation to explore project
- Dark mode
- Art combination? Glassmorphism? Lottie?

2. Day 3:
- Make projects page: show live project.
- Enhance page design

## C. Debug To Do
1. Material UI, component position adjustment. (Solved!)
2. Chrome scroll issue. (Solved!)

## D. Debug
1. 겹쳐진 Component의 `style hidden`은 css를 전부 망가뜨린다. 따라서 `display: none`을 사용해야 css가 붕괴되지 않는다.`Products/TabPanel`
2. Material UI의 `Container`는 양 옆의 margin을 남겨 예상한 css를 표현하지 않을 때가 있다. 최상위 container를 설정할 때의 `Container` Component는 유용하나 child 단위로 내려갈수록 지양하는 게 좋다.
3. Material UI의 styling은 정해진 양식에 따라야 하는 경우가 많고, components는 무조건 `sx prop`으로 넘겨야 한다. 그렇지 않으면 제한된 css를 구현하게 되고 제대로 작동하지 않는 경우가 많다. 꼭 필요한 경우를 제외하고는 `className`을 사용하는 것은 지양한다.(global 단위의 css 선언 등.)
4. 상위 parent component에서 `%`의 `width height`을 가져오는 경우, 중간에 끼어 있는 컴포넌트에서 `width height`을 잘 전달받고 있는지 확인해야 한다.`Products/TabPanel` => `children component`

## E. Report
1. Day 1
- Project 환경 설정
- Intro 완성
- PR 부분 완성
- Dark mode 기초 구현

2. Day 2
- PR 완성
- Components Dark mode 연계
- Products page 완성
