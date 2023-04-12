//ul 인데 클래스가 list인 요소를 list라는
//변수에 찾아서
//담아주세요

let list = document.querySelector(".list");
console.log(list);
//list안에서 자식인 li를 모두 찾아서
//qustn items라는곳에
//담아주세요
// let items = document .querySelectorAll(".list li")

/*
document에서 계속 찾게되면 필요없는 리소스를 너무많이
사용해서 검색하게 됩니다. 따라서 상위 부모를 이미
찾아 변수로 담았다면 그 해당 변수에서 하위 요소를 찾도록
하면 리소스를 덜 잡을수 있습니다
*/
//let items = list .querySelectorAll("li");
let items = list.children;

console.log(items);

console.log(list.childNodes);
/*
node란
html dom은 노드라고 불리는
계층적 단위에 정보를 저장합니다
html dom은 이런 노드들을 정의하고 
그 사이의 관계를 설명해주는 역할을 합니다

html문서의 모든것은 노드라고 합니다
문서노드 = html문서 전체를 나타내는 노드
요소노드 = 모든 html요소(엘리멘트)를 요소노드라고 합니다
요소노드는 속성노드를 가질수 있습니다

*/ 
