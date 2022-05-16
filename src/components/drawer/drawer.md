# bsw-react-ui.drawer

### API
| Props | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| position | The position of drawer is placed | "left", "top", "right", "bottom" | "left" |
| height | When position is "top" or "bottom", height of the Drawer dialog | CSS value in string | "256px" |
| width | When position is "left" or "right", width of the Drawer dialog | CSS value in string | "256px" |
| header | Custom header of the drawer dialog (Works with title and closeIcon) | ReactNode | - | 
| title | Title of the drawer in header | String | "" |
| closable | Control the visibility of closeIcon in default header | boolean | true |
| closeIcon | Custom close icon | ReactNode | - |
| bodyClassName | Custom CSS classes for Drawer body | String | "" |
| bodyStyle | Custom inline CSS for Drawer body | Object | {} |
| footer | Custom footer of the drawer dialog | ReactNode | null |
| visible | Control the visibility of the drawer | boolean | false |
| mask | Control the visibility of the mask | boolean | true |
| maskClosable | Apply the onClose function on mask when clicked | boolean | true |
| onClose | A callback function to control the visibility of drawer | function() | - |