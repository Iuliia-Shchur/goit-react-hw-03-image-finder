(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2t9Jw",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2lKB0"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__fGEJV",Modal:"Modal_Modal__3e2EC"}},23:function(e,t,a){e.exports={App:"App_App__6yYTY"}},26:function(e,t,a){e.exports={Button:"Button_Button__k7DpO"}},31:function(e,t,a){},51:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__15I3i"}},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=(a(31),a(3)),i=a(4),s=a(6),u=a(5),h=a(23),m=a.n(h),d=a(24),p=a(7),b=a.n(p),g=a(25),j=a.n(g);a(12);var y=a(0);a(51),a(27);var f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{})}}]),a}(n.Component),O=f,_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,apiUrl:"https://pixabay.com/api",apiKey:"23195406-da0192683225ba1cc94043cce",images:[]},e.handleQueryChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value),(function(){j.a.get("".concat(e.state.apiUrl,"/?q=").concat(e.state.query,"&page=").concat(e.state.page,"&key=").concat(e.state.apiKey,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return e.setState({images:t.data.hits})})).catch((function(e){return console.log(e)}))}))},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()&&(e.props.onSubmit(e.state.query),e.setState({query:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.images),Object(y.jsxs)("div",{children:[Object(y.jsx)("header",{className:b.a.Searchbar,children:Object(y.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(y.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{name:"query",value:this.state.query,onChange:this.handleQueryChange,className:b.a.SearchFormInput,type:"text",placeholder:"Search images and photos"})]})}),this.state.images.length>0?Object(y.jsx)(O,{images:this.state.images}):null]})}}]),a}(n.Component),S=_,v=(a(52),a(13)),x=a.n(v),w=document.querySelector("#modal-root"),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Component did mount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Component will unmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(y.jsx)("div",{className:x.a.Overlay,onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:x.a.Modal,children:Object(y.jsx)("img",{src:"",alt:""})})}),w)}}]),a}(n.Component),k=I,M=a(26),B=a.n(M);var C=function(){return Object(y.jsx)("button",{type:"button",className:B.a.Button,children:"Load more"})},F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.showModal,t=this.toggleModal,a=this.handleFormSubmit;return Object(y.jsxs)("div",{className:m.a.App,children:[Object(y.jsx)(S,{onSubmit:a}),Object(y.jsx)(O,{query:this.state.query,onToggleModal:t}),Object(y.jsx)(C,{onClick:t}),e&&Object(y.jsx)(k,{onToggleModal:t})]})}}]),a}(n.Component),q=F;c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2x76L",SearchForm:"Searchbar_SearchForm__1YE1p",SearchFormButton:"Searchbar_SearchFormButton__SdRx2",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__hBfui",SearchFormInput:"Searchbar_SearchFormInput__vT5bo"}}},[[55,1,2]]]);
//# sourceMappingURL=main.c5a3afb8.chunk.js.map