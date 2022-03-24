https://francesco419.github.io/tp_Movie

이번 프로젝트는 React의 사용 및 React의 Routes, state, useEffect 등을 사용하여 React에 대한 사용 이해도를 높이고

---

===1st===

https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year의 페이지에서 await fetch를 통해 영화 데이터를 읽어 들여옴

useState를 통해 state를 생성 및 제어, useEffect를 통해 불필요한 랜더링 횟수를 최소화 함.

component폴더의 Movie.js를 생성하여 Home.js에서의 영화데이터를 매개변수로 받아 생성하는 컴포넌트를 생성.

Loading state를 통해 데이터를 화면에 출력하기 전까지의 loading문구를 표시함.

---

===2nd===
전반적으로 html구조와 css스타일에 대한 작업을 주로 진행, css작업은 js파일에 대한 css module파일을 제작.

Home에서 보여지는 슬라이드 구조와같은 작업은, 옆으로 연속적으로 나열된 Movie컴포넌트를

    overflow:hidden

을 통해 사용해 보이고자 하는 부분을 제외한 부분들이 페이지에서 안보이도록 하였고,

    transform: `translateX(${move}px)`

을 state와 button을 이용해, 한번의 클릭시마다 Movie컴포넌트 한개의 width만큼 이도하도록 하였고,

    transition:`transform 1.5s`

을 사용해 부드러운 움직임이 보이도록 했다.

Movie컴포넌트에서의 summary의 길이, 장르 구분 등의 편의성을 위한 세부조정 하였다.

Home에서 보여지는 각 영화에 대한 자세한 페이지를 만들기 위해 Detail파일 추가, 좀더 세부적인 설명을 포함하고 있다.

---

===3rd===

Loading파일을 생성해 새로운 컴포넌트를 만들었고, Home과 Detail에서 각 정보를 불러오기 전에 사용된다.

Home, Detail css 수정.

Home 혹은 Detail의 한개의 정보만 보여주는 페이지 이외에 여러가지 정보를 한번에 볼수 있도록 TableView.js를 생성.

---

===4th===

Switch.js을 생성하여 Home과 TableView간의 이동이 가능하도록 함.

    <button className={styles.icon} alt="Change View">
        <Link to={place ? `/movie/tableview` : `/tp_Movie`}>
            //아이콘
        </Link>
    </button>

컴포넌트가 받는 매개변수를 Home에서는 true를 TableView에서는 false를 주어 각각의 페이지에서 작동되는 기능이 다르도록 설정한다.

Link와 버튼을 이용하여 Detail페이지에서 Home으로 돌아가는 버튼 추가.(아이콘을 사용하지 않고 이미지를 추가하여 만들어봄)

TableView에서 TableMovie컴포넌트가 상위 parent속성의 범위를 벗어나는 문제점 발생. height를 일정이상 낮추거나 높이면 화면 밖으로 contents가 나가는 현상이 발생.

    flex-wrap: wrap

을 사용하여도 div안에 속해있지 못함. 이에대한 해결책 필요.

비슷한 컴포넌트 Movie.js와 TableMovie.js가 존재함. 하나의 JS파일에 상황에 따라 2개의 CSS파일을 적용시키는 방법이 있는지 찾게되면 JS파일을 하나 줄일 수 있다.
