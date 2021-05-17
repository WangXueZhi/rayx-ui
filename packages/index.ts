import { App } from 'vue'
import Button from './button'
import Col from './col'
import Draggable from './draggable'
import Icon from './icon'
import Input from './input'
import Row from './row'
import ScrollBar from './scroll-bar'
const components = [Button, Col, Draggable, Icon, Input, Row, ScrollBar]

const install = function (app: App) {
  components.map(component => {
    app.component(component.name, component)
  })
}

export default {
  install,
  Button, Col, Draggable, Icon, Input, Row, ScrollBar
}
export {
  Button, Col, Draggable, Icon, Input, Row, ScrollBar
}
