var app = new Vue({
    el: '#app',
    data: {
        page: 'index',
        games: info,
        detail: {},
        modalsrc: '',
        modscr : {code:'<h1>코드나오는부분</h1>',desc:'설명하는부분'}
    },
    methods: {
        goIndex: function() {
            this.page = 'index';
        },
        goTogame: function(info) {
            // axios
            //     .get(info)
            //     .then(response => {
            //         this.detail = response.data;
            //     })
            //     .finally(() => {
            //         this.page = "game";
            //     })

            this.detail = eval(info);
            this.page = "game";
        },
        modalset: function(imgsrc) {
            this.modalsrc = imgsrc;
        },
        srcmodalset:function(code,desc){
            // axios
            // .get(code)
            // .then(response=>{
            //     this.modscr.code=response.data;
            //     this.modscr.desc = desc;
            // })
            this.modscr.code = eval(code);
            this.modscr.desc = desc;
            
        }
    },
    // mounted() {
    //     axios
    //         .get("./json/info.json")
    //         .then(response => {
    //             this.games = response.data;
    //         })
    // },
})