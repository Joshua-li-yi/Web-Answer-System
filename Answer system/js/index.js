window.onload = function () {
   var phoneWay=new Vue({
        el: '#phoneNumberSignIn',
        data: {
            phoneNumber: 11111,
            phonePwd:1111,
        },
    });
    var sigeInWnd=new Vue({
        el: '#SignInWnd',
        data:{
            a:1111,
            phoneWayShow:true,
            studentIDWayShow:false,
            techerIDWayShow:false,
        },
        methods:{
            phoneWay:function(){
               phoneWayShow=true; 
               studentIDWayShow=false;
               techerIDWayShow=false;
                this.a=1223;
            },
            studentIDWay:function(){
                phoneWayShow=false; 
                studentIDWayShow=true;
                techerIDWayShow=false;
            },
            teacherIDWay:function(){
                phoneWayShow=false; 
                studentIDWayShow=false;
                techerIDWayShow=true;
            }
        }
    });
}