/* empty css                  */import{_ as w}from"./Header-C4XX_eTG.js";import{o as t,c as i,b as e,t as n,h as v,n as f,F as m,k,r as _,a as h}from"./index-9pPk83EK.js";import{_ as y}from"./BottomBtn-YeEw6wB2.js";const B={class:"guide_box"},C={class:"guide_cont"},S={key:0,class:"title"},$=["innerHTML"],T={key:1,class:"etc"},b={__name:"GuideBox",props:{guides:{type:Object,required:!1,default:()=>({})},titleShow:Boolean,title:String,etcShow:Boolean,etcTxt:String,bulletClass:{type:String,required:!1,default:""}},setup(o){return(r,x)=>(t(),i("div",B,[e("div",C,[o.titleShow?(t(),i("strong",S,n(o.title),1)):v("",!0),e("ul",{class:f([o.bulletClass,"list"])},[(t(!0),i(m,null,k(o.guides,(l,u)=>(t(),i("li",{key:u,innerHTML:l},null,8,$))),128))],2),o.etcShow?(t(),i("p",T,n(o.etcTxt),1)):v("",!0)])]))}},q={class:"sub_content new_req"},E={class:"top_cont content_w"},N=e("h2",{class:"title"},"중개사무소 방문시간 선택",-1),L={class:"flex column"},R=e("select",{class:"sel_visit"},[e("option",null,"방문일 선택"),e("option",null,"2023.04.04(월)"),e("option",null,"2023.04.05(화)"),e("option",null,"2023.04.06(수)"),e("option",null,"2023.04.07(목)")],-1),V={class:"timetable"},F={key:0,class:"time_box"},H=e("strong",null,"시간 선택",-1),M={class:"inner flex"},j=["onClick"],z=e("strong",null,"분 선택",-1),D={class:"inner flex"},G=["onClick"],K={__name:"NewReq4",setup(o){const r=_([{id:1,hour:"7시",active:!0},{id:2,hour:"8시",active:!1},{id:3,hour:"9시",active:!1},{id:5,hour:"10시",active:!1},{id:6,hour:"11시",active:!1},{id:7,hour:"12시",active:!1},{id:8,hour:"13시",active:!1},{id:9,hour:"14시",active:!1},{id:10,hour:"15시",active:!1},{id:11,hour:"16시",active:!1},{id:12,hour:"17시",active:!1},{id:13,hour:"18시",active:!1},{id:14,hour:"19시",active:!1},{id:15,hour:"20시",active:!1},{id:16,hour:"21시",active:!1}]),x=c=>{r.value.forEach(a=>{a.active=a.id===c})},l=_([{id:1,minute:"00분",active:!0},{id:2,minute:"10분",active:!1},{id:3,minute:"20분",active:!1},{id:5,minute:"30분",active:!1},{id:6,minute:"40분",active:!1},{id:6,minute:"50분",active:!1}]),u=c=>{l.value.forEach(a=>{a.active=a.id===c})},d=_(!1),g=()=>{d.value=!d.value};return(c,a)=>(t(),i("div",q,[h(w,{title:"매수/임차 중개의뢰",link:"brokerState",step:!0,step4:!0}),e("div",E,[N,e("div",L,[R,e("div",V,[e("button",{class:"choice btn_square bg emerald",onClick:g},"시간 선택"),d.value?(t(),i("div",F,[H,e("div",M,[(t(!0),i(m,null,k(r.value,s=>(t(),i("button",{key:s.id,class:f({on:s.active}),onClick:p=>x(s.id)},n(s.hour),11,j))),128))]),z,e("div",D,[(t(!0),i(m,null,k(l.value,s=>(t(),i("button",{key:s.id,class:f({on:s.active}),onClick:p=>u(s.id),style:{width:"48px"}},n(s.minute),11,G))),128))])])):v("",!0)])])]),h(b,{guides:{text1:"1. 공인중개사가 전문가의 입장에서 좋은 매물을 추천합니다.",text2:"2. 추천매물을 확인 후, 마음에 드는 매물을 추가 방문요청하십시오.(나의 매수에서 추가 방문요청 가능)",text3:"3. 방문일시에 중개사무소를 방문하면 여러 개의 매물을 한번에 확인할 수 있어 빠르게 계약하실 수 있습니다."},etcShow:!0,etcTxt:"※ 중개사무소 방문일은 당일을 피하시는 것이 좋습니다."}),h(y,{btnTxt1:"취소",btnTxt2:"확인",addClass:"col2",link1:"newReq3",link2:"newReqEnd"})]))}};export{K as default};
