const App ={
    template:`
    //  <h1> {{count}}</h1>
    //  <button value="increment" @click="increment">+</button>
    //  </br>
    //  <button value="decrement" @click="decrement">-</button>
    //  <p v-if="count >=18">majeur</p>
    //  <p v-else>mineur</p>
    <ul>
    <li v-for="name in names">
           {{name}}
    </li>
    </ul>
 
    `,
    data(){
        return{
            
            // count:0,
            names:["amina","amina","amina"]
        };
    },
    // methods:{
    //     increment(){
    //         this.count+=1;
    //     },
    //     decrement(){
    //         this.count-=1;

    //     },
    // }

    
};
Vue.createApp(App).mount("#app");