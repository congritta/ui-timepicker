# @congritta-ui/timepicker

This is timepicker React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/timepicker`;

Add

```javascript
import TimePicker from '@congritta-ui/timepicker';
```

into your code

## How to use

Example:

```jsx
export default MyComponentWidthTimePicker() {
  const [value, setValue] = useState([12, 15]); // [hours, minutes]

  return (
    <TimePicker value={value} onUpdate={setValue} />
  )
}
```

### Props

| Prop name                               | Description                                                                | Is Required | Default value                         |
|-----------------------------------------|----------------------------------------------------------------------------|-------------|---------------------------------------|
| value                                   | Active value (`[hours, minutes]`)                                                  | true        |                                       |
| onUpdate                                | Function that executes when user clicks on a hour or a minute              | true        |                                       |
| transitionDuration                      | Duration in milliseconds to reveal or close calendar                       | false       | `210`                                 |
| gapBetweenInputWrapperAndPicker         | Gap between input wrapper and picker (in pixels)                           | false       | `10`                                  |
| minutesStep                             | Step in minutes list                                                       | false       | `1`          |
| timePickerClassName                     | Class name for TimePicker component wrapper for adding additional styles   | false       |                                       |
| inputWrapperClassName                   | Class name for input wrapper for adding additional styles                  | false       |                                       |
| pickerClassName                         | Class name for picker wrapper for adding additional styles                 | false       |                                       |
| valuesListName                          | Class name for time values list for adding additional styles               | false       |                                       |
| valuesListValueName                     | Class name for time values list item for adding additional styles          | false       |                                       |
