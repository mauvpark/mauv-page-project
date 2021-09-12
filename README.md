# *MAUV PAGE PROJECT*

## *A. Link*
https://mauv-page.vercel.app/

## *B. Stack*
1. Framework: Next JS
2. Style lib: Material UI(version 5 beta), scss, lottie

## *C. Structure*

    .
    ├── components               # 컴포넌트를 별도로 관리, 각자의 컴포넌트 내에 고유의 스타일 파일 존재(유지보수)
    ├── pages                    # 이번 프로젝트는 하나의 index.js에서 모두 관리
    ├── styles                   # Global style 파일 관리
    ├── public                    
    └── README.md
> **reference**: [components](https://github.com/Mauv-hub/mauv-page-project/tree/main/components), [pages](https://github.com/Mauv-hub/mauv-page-project/tree/main/pages), [styles](https://github.com/Mauv-hub/mauv-page-project/tree/main/styles)

## *B. Design*
### 1. Smoothly scrollable per each page component
> **CSS**: `scroll snap`을 이용하여 구현, chrome에서 performance issue를 없애기 위해 `body`에서 선언하지 않고 `body`의 children 단위에서 선언하여 구현함.
> <br />
> <br />
> **참고** [global css](https://github.com/Mauv-hub/mauv-page-project/blob/main/styles/globals.css) `styles/global.css`

### 2. Highlited Intro & Outro page using CSS
> **Figma & CSS**: *Figma*를 이용해 svg 파일을 만들고 `css`의 `stroke-dash` `animation`을 적용하여 구현함. 
> <br />
> **CSS**: Outro의 경우 text stroke를 이용한 animation을 적용하여 단순히 재미없게 끝내지 않고 볼거리를 제공할 용도로 구현함. 또한, 글을 클릭하면 자연스럽게 github로 연결함으로써 github와 page 간의 연동성을 강화함.
> <br />
> <br />
> **참고** [intro scss](https://github.com/Mauv-hub/mauv-page-project/blob/main/components/Intro/Intro.module.scss) `components/intro/intro.module.scss` [outro scss](https://github.com/Mauv-hub/mauv-page-project/blob/main/components/Last/Last.module.scss)`components/last/last.module.scss`

### 3. Simple but animated background
> **Lottie**: 단조로운 배경을 보완하기 위하여 *Lottie*의 animted 배경을 사용하기로 결정함.
> <br />
> <br />
> **참고** [intro scss](https://github.com/Mauv-hub/mauv-page-project/blob/main/components/Intro/Intro.module.scss) `components/intro.module.scss`

### 4. Dark mode compatibility
> **CSS**: 최근 눈 건강을 생각해 다크모드를 추가하는 경향성이 뚜렷하므로 홈페이지 내에 기능을 구현하기로 결정. 다크모드는 `body.dark`에서 관리 되며 전역 스타일로 선언하고 하위 Material ui의 컴포넌트들만 추가하여 색을 바꿔 기능을 구현하는 방식으로 작동하게 함. 
> <br />
> <br />
> **참고** [global css](https://github.com/Mauv-hub/mauv-page-project/blob/main/styles/globals.css) `styles/global.css`

### 5. Easily readable project introduction design
> **Tabs**: 프로젝트 별로 각각의 페이지 컴포넌트를 할당해 보여주는 것은 스크롤을 길게 만들고 사용자 UX를 떨어뜨릴 수 있다고 판단함. 가시성 또한 좋지 않다고 판단하여 한 페이지 컴포넌트 내에 Tabs로 구분되는 View를 만듦.(Material UI의 sample 참고) 
> <br />
> <br />
> **참고** [products](https://github.com/Mauv-hub/mauv-page-project/blob/main/components/Products/Products.tsx) `components/Products/Products`

## C. Debug
### *겹쳐진 Components의 css 붕괴 현상* 
> `style hidden`은 css를 전부 망가뜨린다. 따라서 `display: none`을 사용해야 css가 붕괴되지 않는다.`Products/TabPanel`

### *Material UI `Container`의 제한된 maxWidth* 
> Material UI의 `Container`는 양 옆의 margin을 남겨 예상한 css를 표현하지 않을 때가 있다. 최상위 container를 설정할 때의 `Container` Component는 유용하나 child 단위로 내려갈수록 지양하는 게 좋다.

### *Material UI의 Styling* 
> Material UI의 styling은 정해진 양식에 따라야 하는 경우가 많고, components는 무조건 `sx prop`으로 넘겨야 한다. 그렇지 않으면 제한된 css를 구현하게 되고 제대로 작동하지 않는 경우가 많다. 꼭 필요한 경우를 제외하고는 `className`을 사용하는 것은 지양한다.(global 단위의 css 선언 등.)

### *parent's width, height inheritance issue* 
> 상위 parent component에서 `%`의 `width height`을 가져오는 경우, 중간에 끼어 있는 컴포넌트에서 `width height`을 잘 전달받고 있는지 확인해야 한다.`Products/TabPanel` => `children component`

### *Lottie Responsive environment top, botom blank issue* 
> *Lottie*의 Responsive 환경에서 top, bottom이 채워지지 않는 현상 발생, preserveAspectRatio로 조정하여 해결. [링크](https://github.com/airbnb/lottie-web/wiki/Renderer-Settings#preserveaspectratio)

### *Position과 scroll간의 관계성 issue* 
> 페이지 컴포넌트에서 scroll이 작동하지 않는 issue 발생: css의 `position`이 제대로 할당되지 않아 발생한 것을 알게 돼 `position` 할당 후 해결

## D. Report
1. Day 1
- Project 환경 설정
- Intro 완성
- PR 부분 완성
- Dark mode 기초 구현

2. Day 2
- PR 완성
- Components Dark mode 연계
- Products page 완성

3. Day 3
- Project page 완성
- Outro page 완성
- 버그 fix


All copyrights reserved by Mauv.
