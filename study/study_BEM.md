### BEM

1. BEM 이란?

   - Block, Element, Modifier
   - 위의 3가지로 나누어서 이름을 작성하는 것을 말함
   - 카드를 만든다고할때
     - 카드 자체는 Block
     - 카드의 사진, Title, button 처럼 더이상 분리될 수 없는 Element
     - block\_\_element--modifier 로 명명
       - .card
       - .card\_\_img
       - .card\_\_title
       - .card\_\_description
       - .card\_\_button
       - 카드에 다크색상 또는 버튼의 색상이 바뀌는 modifier가 있다면
       - .card--dark
       - .card\_\_button--blue
       - 다른곳에서도 버튼이 사용된다면 컴포넌트를 분리해서 따로 블럭화 하는것이 좋다
       - .button
       - .button--blue
   - 참고

     - BEM: http://getbem.com/introduction/

     - BEM 101 by CSS-Tricks: https://css-tricks.com/bem-101/

     - 10 Common Problems And How To Avoid Them:

     - https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/
