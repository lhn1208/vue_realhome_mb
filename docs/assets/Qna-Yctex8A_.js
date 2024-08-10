/* empty css               */import{_ as d}from"./Header-C4XX_eTG.js";import{r as _,o as c,c as l,b as t,t as a,n as o,u as m,a as n}from"./index-9pPk83EK.js";import{_ as u}from"./BottomBtn-YeEw6wB2.js";/* empty css                  */const x={class:"flex"},g={class:"title"},b={class:"date"},f=t("span",{class:"link_arr down"},null,-1),v=["innerHTML"],i={__name:"QnaItem",props:{title:String,rdText:String,addClass:String,date:String,text:String},setup(s){const e=_(!1),r=()=>{e.value=!e.value};return(p,T)=>(c(),l("div",null,[t("button",{class:"cont_box notice_row",onClick:r},[t("div",x,[t("strong",g,a(s.title),1),t("span",{class:o([s.addClass,"rd_ico"])},a(s.rdText),3)]),t("span",b,a(s.date),1),f]),t("div",{class:o({cont:!0,active:e.value})},[t("div",{class:"cont_in",innerHTML:s.text},null,8,v)],2)]))}},h={class:"qna sub_content"},q={__name:"Qna",setup(s){return m(),(e,r)=>(c(),l("div",h,[n(d,{title:"1:1 문의",link:"myhome"}),n(i,{title:"문의제목이 나타납니다",rdText:"미답변",date:"23.10.10",text:`문의 내용입니다.\r
        <br>문의 내용입니다.\r
        <br>문의 내용입니다.\r
        <br>문의 내용입니다.`}),n(i,{title:"문의제목이 나타납니다2",addClass:"grass",rdText:"답변완료",date:"23.09.30",text:`문의 내용입니다.2\r
        <br>문의 내용입니다.2\r
        <br>문의 내용입니다.2\r
        <br>문의 내용입니다.2`}),n(u,{btnTxt1:"문의하기",link1:"qnaWrite"})]))}};export{q as default};
