import Vue from 'vue';
import {  MessageBox,Message,Pagination,Input,Button} from 'element-ui';


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.use(Pagination)
Vue.component(Button.name,Button)
Vue.component(Input.name,Input)