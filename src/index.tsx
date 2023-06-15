import React, {useEffect, useRef, useState} from 'react';

import styles from './index.module.css';

const defaultTransitionDuration = 210;
const defaultGapBetweenInputWrapperAndPicker = 10;
const defaultMinutesStep = 1

function leadingZero(number: number): string {
  return `${number <= 9 ? '0' : ''}${number}`
}

export default function TimePicker(props: {
  value: [number, number],

  minutesStep?: number,

  transitionDuration?: number,
  gapBetweenInputWrapperAndPicker?: number,

  onUpdate(value: [number, number]): void,

  timePickerClassName?: string,
  inputWrapperClassName?: string,
  pickerClassName?: string,
  valuesListClassName?: string,
  valuesListValueClassName?: string
}) {

  // Refs
  const timePickerRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  // State
  const [time, setTime] = useState(props.value);
  const [isOpened, setIsOpened] = useState(false);
  const [isPickerRemovedFromLayout, setIsPickerRemovedFromLayout] = useState(!isOpened);
  const [floatingDirection, setFloatingDirection] = useState<{top: boolean, left: boolean;}>({top: false, left: false});

  // Handle opening
  function handleOpening() {
    makePickerFloatingSide();
    setIsPickerRemovedFromLayout(false);
    setTimeout(() => {
      setIsOpened(true);
      window.addEventListener('click', handleClosing);
    }, 0);
  }

  // Handle closing
  function handleClosing(event?: Event) {

    if(event?.target && timePickerRef.current?.contains(event.target as any)) return;

    setIsOpened(false);
    setTimeout(() => {window.removeEventListener('click', handleClosing);}, 0);
    setTimeout(() => {setIsPickerRemovedFromLayout(true);}, props.transitionDuration ?? defaultTransitionDuration);
  }

  // Make picker floating side function
  function makePickerFloatingSide() {

    setTimeout(() => {
      const selectWrapperRect = timePickerRef.current?.getBoundingClientRect();
      const pickerRect = pickerRef.current?.getBoundingClientRect();

      if(!selectWrapperRect || !pickerRect) {
        throw new Error('No rect found');
      }

      const gap = props.gapBetweenInputWrapperAndPicker ?? defaultGapBetweenInputWrapperAndPicker;
      const {height: pickerHeight} = pickerRect;

      setFloatingDirection({
        top: selectWrapperRect.top + selectWrapperRect.height + gap + pickerHeight > window.innerHeight,
        left: selectWrapperRect.left + selectWrapperRect.width + gap > window.innerWidth
      });
    }, 0);
  }

  // Watch value changes
  useEffect(() => {
    setTime(props.value)
  }, [props.value])

  // Computed values
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

  // Compute minutes array
  const minutes: number[] = []
  for(let i = 0; i < 60; i += (props.minutesStep ?? defaultMinutesStep)) {
    minutes.push(i)
  }

  // Render
  return (
    <div
      ref={timePickerRef}
      className={[
        styles.TimePicker,
        ...(isOpened ? ['_isOpened'] : [])
      ].join(' ')}
      style={{
        '--transition-duration': `${props.transitionDuration ?? defaultTransitionDuration}ms`,
        '--gap-between-input-wrapper-and-picker': `${props.gapBetweenInputWrapperAndPicker ?? defaultGapBetweenInputWrapperAndPicker}px`
      } as never}
    >

      {/* Input wrapper */}
      <div
        className={styles.inputWrapper}
        onClick={() => !isOpened ? handleOpening() : null}
      >
        <input type="text" value={`${leadingZero(time[0])}:${leadingZero(time[1])}`} readOnly />
      </div>

      {/* Picker */}
      <div
        ref={pickerRef}
        className={[
          styles.picker,
          ...(floatingDirection.top ? ['_isRevealedFromBottom'] : []),
          ...(floatingDirection.left ? ['_isRevealedFromRight'] : []),
          ...(isPickerRemovedFromLayout ? ['_isRemovedFromLayout'] : [])
        ].join(' ')}
      >

        <div className={styles.valuesList}>
          {hours.map((hour, i) => (
            <div
              key={i}
              className={[
                styles.valuesListValue,
                ...(time[0] === hour ? ['_isSelected'] : [])
              ].join(' ')}
              onClick={() => props.onUpdate([hour, time[1]])}
            >
              {leadingZero(hour)}
            </div>
          ))}
        </div>

        <div className={styles.valuesList}>
          {minutes.map((minute, i) => (
            <div
              key={i}
              className={[
                styles.valuesListValue,
                ...(time[1] === minute ? ['_isSelected'] : [])
              ].join(' ')}
              onClick={() => props.onUpdate([time[0], minute])}
            >
              {leadingZero(minute)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
