# *MAUV PAGE PROJECT*

## A. Stack
1. Next JS
2. React Bootstrap
3. Scss

## B. Plan
1. Scrollable per page
2. Navigation to explore project
3. Dark mode
4. Art combination? Glassmorphism? Lottie?

## C. To do
1. Material UI, component position adjustment.
2. Chrome scroll issue.

## D. Debug
1. 겹쳐진 Component의 `style hidden`은 css를 전부 망가뜨린다. 따라서 `display: none`을 사용해야 css가 붕괴되지 않는다.`Products/TabPanel`
2. Material UI의 `Container`는 양 옆의 margin을 남겨 예상한 css를 표현하지 않을 때가 있다. 최상위 container를 설정할 때의 `Container` Component는 유용하나 child 단위로 내려갈수록 지양하는 게 좋다.
3. Material UI의 styling은 정해진 양식에 따라야 하는 경우가 많고, components는 무조건 `sx prop`으로 넘겨야 한다. 그렇지 않으면 제한된 css를 구현하게 되고 제대로 작동하지 않는 경우가 많다. 꼭 필요한 경우를 제외하고는 `className`을 사용하는 것은 지양한다.(global 단위의 css 선언 등.)
4. 상위 parent component에서 `%`의 `width height`을 가져오는 경우, 중간에 끼어 있는 컴포넌트에서 `width height`을 잘 전달받고 있는지 확인해야 한다.`Products/TabPanel` => `children component`
