  //定义组件todo,并注册
  Vue.component("todo",{
    templte:` <h1>待办事项</h1>
  <div>
    <input type="text"><button>+</button>
  </div>
   <ul>
      <li>1-吃饭<button>-</button></li>
      <li>2-睡觉<button>-</button></li>
      <li>3-学习<button>-</button></li>
      <li>4-打亮亮<button>-</button></li>
   </ul></div>`,
   components:{
       todoAdd,
       //todo-add

   }
  });