var SigeInWnd = new Vue({
    el: '#signInWnd',
    data: {
        a: 1111,
        phoneWayShow: true,
        studentIDWayShow: false,
        techerIDWayShow: false,
        phoneNumber: 11111,
        phonePwd:1111,
    },
    methods: {
        phoneWay: function () {
            this.phoneWayShow = true;

            this.studentIDWayShow = false;
            this.techerIDWayShow = false;
            this.a = 1223;
        },
        studentIDWay: function () {
            this.phoneWayShow = false;
            this.studentIDWayShow = true;
            this.techerIDWayShow = false;
        },
        teacherIDWay: function () {
            this.phoneWayShow = false;
            this.studentIDWayShow = false;
            this.techerIDWayShow = true;
        },
        signIn:function(){
            window.location.href="/webpage/answer.html";
        }
    }
});