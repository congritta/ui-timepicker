
const digest = 'ca3822c5c00323459e6b3f327b6ba777b5ca47b18df0dd5a2d9b48ef19ce3f95';
const css = `._TimePicker_1v81j_1 {
  position: relative;
  width: 100%;
  flex: 1;
  height: var(--cui-inputs-height)
}

/* Time input wrapper */

._inputWrapper_1v81j_10 {
  cursor: pointer;
}

._inputWrapper_1v81j_10 > input {
  cursor: inherit;
  min-width: unset;
}
/* Picker */

._picker_1v81j_20 {
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
  ._picker_1v81j_20 {
    background: var(--cui-black-color-900);
    color: var(--cui-black-color-300)
  }
}

._picker_1v81j_20[class*="_isRemovedFromLayout"] {
  display: none;
}

._picker_1v81j_20[class*="_isRevealedFromBottom"] {
  top: unset;
  bottom: calc(100% + var(--gap-between-input-wrapper-and-picker));
}

._picker_1v81j_20[class*="_isRevealedFromRight"] {
  left: unset;
  right: 0;
  transform: none;
}

._TimePicker_1v81j_1:not([class*="_isOpened"]) > ._picker_1v81j_20 {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10%)
}

._TimePicker_1v81j_1:not([class*="_isOpened"]) > ._picker_1v81j_20[class*="_isRevealedFromBottom"] {
  transform: translateY(-10%)
}

/* Values list */

._valuesList_1v81j_68 {
  flex: 1;
  height: 100%;
  overflow: auto;
  overscroll-behavior: none;
}

._valuesListValue_1v81j_75 {
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
}

._valuesListValue_1v81j_75:not(:first-child) {
  border-top: 1px solid var(--cui-black-color-300)
}

@media(prefers-color-scheme: dark) {
  ._valuesListValue_1v81j_75:not(:first-child) {
    border-top-color: var(--cui-black-color-800)
  }
}

._valuesListValue_1v81j_75:hover {
  background: var(--cui-black-color-200);
}

@media(prefers-color-scheme: dark) {
  ._valuesListValue_1v81j_75:hover {
    background: var(--cui-black-color-800);
  }
}

._valuesListValue_1v81j_75[class*="_isSelected"] {
  background: var(--cui-accent-color-700);
  color: #fff
}

@media(prefers-color-scheme: dark) {
  ._valuesListValue_1v81j_75[class*="_isSelected"] {
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
    
export default {"TimePicker":"_TimePicker_1v81j_1","timePicker":"_TimePicker_1v81j_1","inputWrapper":"_inputWrapper_1v81j_10","picker":"_picker_1v81j_20","valuesList":"_valuesList_1v81j_68","valuesListValue":"_valuesListValue_1v81j_75"};
export { css, digest };
  