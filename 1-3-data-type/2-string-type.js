//   string : 문자열
//   [h, e, l, l, o]

let myName = "김철수";
myName = '박영희';
myName = `뽀로로`; // 백틱: 특수 문법이 포함됨
console.log(typeof myName);
console.log(myName);

let sentence = '나는 그 사람에게 "죽어"라고 말했다.';
console.log(sentence);

// let htmlTag = "<ul>\n\t<li>딸기</li>\n\t<li>바나나</li>\n</ul>";

let htmlTag = `
<ul>
  <li>딸기</li>
  <li>바나나</li>
</ul>
`;
console.log(htmlTag);

// x월 x일은 x입니다.
let month = 12;
let day = 25;
let anniversary = '크리스마스';

// console.log(month + '월 ' + day + '일은 ' + anniversary + '입니다.');

console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);

