
const digest = '5c9deeee6fecdcbbdad832f12c80796c7035c7eab62c998ef38db0f65e195533';
const css = `._TimePicker_ujd5u_1 {
  position: relative;
  width: 100%;
  flex: 1;
  height: var(--cui-inputs-height)
}

/* Time input wrapper */

._inputWrapper_ujd5u_19 {
  cursor: pointer;
}

._inputWrapper_ujd5u_19 > input {
  cursor: inherit;
  min-width: unset;
}
/* Picker */

._picker_ujd5u_39 {
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  top: calc(100% + var(--gap-between-input-wrapper-and-picker));
  width: 100%;
  height: 200px;
  background: var(--cui-black-color-100);
  transition: var(--transition-duration);
  overflow: auto;
  overscroll-behavior: none;
}

@media(prefers-color-scheme: dark) {
  ._picker_ujd5u_39 {
    background: var(--cui-black-color-900);
    color: var(--cui-black-color-300)
  }
}

._picker_ujd5u_39[class*="_isRemovedFromLayout"] {
  display: none;
}

._picker_ujd5u_39[class*="_isRevealedFromBottom"] {
  top: unset;
  bottom: calc(100% + var(--gap-between-input-wrapper-and-picker));
}

._picker_ujd5u_39[class*="_isRevealedFromRight"] {
  left: unset;
  right: 0;
  transform: none;
}

._TimePicker_ujd5u_1:not([class*="_isOpened"]) > ._picker_ujd5u_39 {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10%)
}

._TimePicker_ujd5u_1:not([class*="_isOpened"]) > ._picker_ujd5u_39[class*="_isRevealedFromBottom"] {
  transform: translateY(-10%)
}

/* Values list */

._valuesList_ujd5u_135 {
  flex: 1;
  height: 100%;
  overflow: auto;
  overscroll-behavior: none;
}

._valuesListValue_ujd5u_149 {
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
}

._valuesListValue_ujd5u_149:not(:first-child) {
  border-top: 1px solid var(--cui-black-color-300)
}

@media(prefers-color-scheme: dark) {
  ._valuesListValue_ujd5u_149:not(:first-child) {
    border-top-color: var(--cui-black-color-800)
  }
}

._valuesListValue_ujd5u_149:hover {
  background: var(--cui-black-color-200);
}

@media(prefers-color-scheme: dark) {
  ._valuesListValue_ujd5u_149:hover {
    background: var(--cui-black-color-800);
  }
}

._valuesListValue_ujd5u_149[class*="_isSelected"] {
  background: var(--cui-accent-color-700);
  color: #fff
}

@media(prefers-color-scheme: dark) {
  ._valuesListValue_ujd5u_149[class*="_isSelected"] {
    background: var(--cui-accent-color-900)
  }  
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"TimePicker":"_TimePicker_ujd5u_1","timePicker":"_TimePicker_ujd5u_1","inputWrapper":"_inputWrapper_ujd5u_19","picker":"_picker_ujd5u_39","valuesList":"_valuesList_ujd5u_135","valuesListValue":"_valuesListValue_ujd5u_149"};
export { css, digest };
  