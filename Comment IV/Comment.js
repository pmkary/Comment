var languageMultiLineTopLeft;var languageMultiLineTopRight;var languageMultiLineBottomLeft;var languageMultiLineBottomRight;var languageOneLine;var globalTextValue;var globalSizeValue;var globalIndexValue;var Core;(function(e){var a="&boxv;";var n="&boxh;";var t="&boxdr;";var l="&boxdl;";var o="&boxur;";var r="&boxul;";function i(){var e;e=languageMultiLineTopLeft+" "+s(globalSizeValue)+" "+languageMultiLineTopRight+"\n";var a=v(globalTextValue);var n="";var t="";for(var l=1;l<(globalSizeValue-a.length)/2;l++){t+="&colon;"}if((globalSizeValue-a.length)%2==0){console.log("here");n="&colon;"}e+=languageMultiLineBottomLeft+" "+n+t+a+" "+t+" "+languageMultiLineTopRight+"\n";e+=languageMultiLineBottomLeft+" "+s(globalSizeValue)+" "+languageMultiLineBottomRight;console.log(e);return e}e.GenerateClassComment=i;function u(){var e=languageOneLine+"\n";e+=languageOneLine+" "+c(n,3)+" "+globalTextValue.toUpperCase()+" "+c(n,globalSizeValue-globalTextValue.length-5)+"\n";e+=languageOneLine;return e}e.GenerateSectionComment=u;function g(){var e=languageOneLine+"\n";e+=languageOneLine+" "+"- -"+" "+globalTextValue.toLowerCase();var a=(globalSizeValue-globalTextValue.length-5)/2;if(a%2==0){e+=" "+c(" -",a)+"\n"}else{e+=c(" -",a)+"\n"}e+=languageOneLine;return e}e.GenerateSubSectionComment=g;function s(e){return c(n,e)}function v(e){var a="";for(var n=0;n<e.length;n++){var t=e[n];a+=" "+t}return a.toUpperCase()}function c(e,a){var n="";for(var t=0;t<a;t++){n+=e}return n}})(Core||(Core={}));var UI;(function(e){var a="one-line-value-div";var n="size-value-div";var t="index-value-div";var l="commentformatbox";var o="cp-value";var r="cp-size";var i="cp-index";var u="cs-top-left";var g="cs-top-right";var s="cs-bottom-left";var v="cs-bottom-right";var c="cs-one-line";var d="class";var m="flag";var y="section";var p="subsection";var b="line";var f="note";var L="view";var h="comment-box";function x(e){if(e.keyCode==13){C()}}e.OnTextInputKeyPress=x;function C(){T();B();var e=document.createElement("pre");e.className=h;e.innerHTML=V();var a=document.getElementById(L);if(a.children.length==0){a.appendChild(e)}else{a.insertBefore(e,a.firstChild)}}function V(){var e;switch(M()){case d:e=Core.GenerateClassComment();break;case y:e=Core.GenerateSectionComment();break;case p:e=Core.GenerateSubSectionComment();break}return e}function I(){var e=document.getElementById(n);var l=document.getElementById(t);var o=document.getElementById(a);var r="inline";var i="none";switch(M()){case d:e.style.display=r;l.style.display=i;o.style.display=r;break;case m:e.style.display=r;l.style.display=r;o.style.display=r;break;case y:e.style.display=r;l.style.display=i;o.style.display=r;break;case p:e.style.display=r;l.style.display=i;o.style.display=r;break;case b:e.style.display=r;l.style.display=i;o.style.display=i;break;case f:e.style.display=i;l.style.display=i;o.style.display=i;break}}e.LoadInputBoxes=I;function B(){languageMultiLineBottomLeft=k(s);languageMultiLineBottomRight=k(v);languageMultiLineTopLeft=k(u);languageMultiLineTopRight=k(g);languageOneLine=k(c)}e.UpdateCommentChars=B;function T(){globalSizeValue=S(r);globalIndexValue=S(i);globalTextValue=k(o)}e.UpdateGlobalInputVariables=T;function M(){var e=document.getElementById(l);return e.options[e.selectedIndex].value}function S(e){var a=parseInt(document.getElementById(e).value);if(isNaN(a)){return 0}else{return a}}function k(e){return document.getElementById(e).value}})(UI||(UI={}));