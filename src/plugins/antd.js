/*
 * @Author: ymy
 * @Date: 2021-11-08 17:27:07
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 16:32:19
 */
import {
  Button,
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
  Tag
} from 'ant-design-vue'

export function setupAnd (app) {
  app.use(Button)
  app.use(Modal),
    app.use(Table),
    app.use(Menu),
    app.use(Input),
    app.use(Form),
    app.use(Card),
    app.use(Checkbox),
    app.use(Radio),
    app.use(Col),
    app.use(Row),
    app.use(Select),
    app.use(DatePicker),
    app.use(Tag)
}