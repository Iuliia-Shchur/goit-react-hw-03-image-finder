(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2t9Jw",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2lKB0"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__fGEJV",Modal:"Modal_Modal__3e2EC"}},24:function(e,t,a){e.exports={App:"App_App__6yYTY"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__15I3i"}},27:function(e,t,a){e.exports={Button:"Button_Button__k7DpO"}},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),l=(a(32),a(3)),s=a(4),i=a(6),u=a(5),m=a(24),h=a.n(m),d=a(25),g=a(7),p=a.n(g),b=a(12),j=a.n(b);var y=a(13),f=a.n(y),v=(a(51),a(14)),O=a.n(v),I=a(0),S=document.querySelector("#modal-root"),_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("Component did mount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Component will unmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(I.jsx)("div",{className:O.a.Overlay,onClick:this.handleBackdropClick,children:Object(I.jsx)("div",{className:O.a.Modal,children:Object(I.jsx)("img",{src:this.props.modalImg,alt:this.props.tags})})}),S)}}]),a}(n.Component),x=_;var w=function(e){var t=e.id,a=e.previewImg,n=e.tags,o=e.onToggleModal,r=e.showModal,c=e.modalImg,l=e.onClick;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(I.jsx)("img",{src:a,alt:n,className:f.a.ImageGalleryItemImage,onClick:l})},t),r&&Object(I.jsx)(x,{modalImg:c,onToggleModal:o,tags:n})]})},M=a(26),k=a.n(M);a(28);var C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showModal:!1,currentImg:"",modalImg:"",apiUrl:"https://pixabay.com/api",apiKey:"23195406-da0192683225ba1cc94043cce"},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImgClick=function(t){e.setState({modalImg:t}),e.toggleModal()},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.images;return e=a?Object(I.jsx)("ul",{className:k.a.ImageGallery,children:a.map((function(e){var a=e.id,n=e.webformatURL,o=e.tags,r=e.largeImageURL;return Object(I.jsx)(w,{previewImg:n,tags:o,onImgClick:t.onImgClick,onToggleModal:function(){return t.toggleModal()},showModal:t.state.showModal,onClick:function(){return t.onImgClick(r)},modalImg:t.state.modalImg},a)}))}):null,Object(I.jsx)("div",{children:e})}}]),a}(n.Component),B=C,F=a(27),q=a.n(F);var G=function(e){var t=e.onLoadMore;return Object(I.jsx)("button",{type:"button",className:q.a.Button,onClick:function(){return t()},children:"Load more"})},N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",page:1,apiUrl:"https://pixabay.com/api",apiKey:"23195406-da0192683225ba1cc94043cce",images:[]},e.handleQueryChange=function(t){var a=t.target.value;return e.setState(Object(d.a)({},t.target.name,a),(function(){""===a?e.setState({images:[]}):j.a.get("".concat(e.state.apiUrl,"/?q=").concat(e.state.query,"&page=").concat(e.state.page,"&key=").concat(e.state.apiKey,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return e.setState({images:t.data.hits})})).catch((function(e){return console.log(e)}))}))},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()&&(e.props.onSubmit(e.state.query),e.setState({query:""}))},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log(this.state.images),Object(I.jsxs)("div",{children:[Object(I.jsx)("header",{className:p.a.Searchbar,children:Object(I.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(I.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(I.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(I.jsx)("input",{name:"query",value:this.state.query,onChange:this.handleQueryChange,className:p.a.SearchFormInput,type:"text",placeholder:"Search images and photos"})]})}),this.state.images.length>0?Object(I.jsx)(B,{images:this.state.images,query:this.state.query,apiUrl:this.state.apiUrl,apiKey:this.state.apiKey,page:this.state.page}):null,Object(I.jsx)(G,{onLoadMore:this.loadMore})]})}}]),a}(n.Component),L=N,K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(s.a)(a,[{key:"render",value:function(){this.state.showModal,this.toggleModal;var e=this.handleFormSubmit;return Object(I.jsxs)("div",{className:h.a.App,children:[Object(I.jsx)(L,{onSubmit:e}),Object(I.jsx)(G,{})]})}}]),a}(n.Component),A=K;c.a.render(Object(I.jsx)(o.a.StrictMode,{children:Object(I.jsx)(A,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2x76L",SearchForm:"Searchbar_SearchForm__1YE1p",SearchFormButton:"Searchbar_SearchFormButton__SdRx2",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__hBfui",SearchFormInput:"Searchbar_SearchFormInput__vT5bo"}}},[[55,1,2]]]);
//# sourceMappingURL=main.aa90549e.chunk.js.map