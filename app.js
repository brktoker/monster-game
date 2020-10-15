new Vue({
    el: "#app",
    data:{
        player_heal : 100,
        monster_heal : 100,
        game_is_on : false

    },
    methods:{
        start_game : function(){
            this.player_heal = 100;
            this.monster_heal = 100;
            this.game_is_on = true;
        },
        attack : function(){
            let point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.monster_attack();
        },
        special_attack : function(){
            let point = Math.ceil(Math.random() * 20);
            this.monster_heal -= point;
            this.monster_attack();
        },
        first_aid : function(){
            let point = Math.ceil(Math.random() * 15);
            this.player_heal += point;
            this.monster_attack();
        },
        give_up : function(){
            this.player_heal = 0;
            this.game_is_on = false;
        },
        monster_attack : function(){
            let point = Math.ceil(Math.random() * 15);
            this.player_heal -= point;
        }
    },
    watch:{
        player_heal : function(value){
            if(value >= 100){
                this.player_heal = 100;
            }
            else if(value <= 0){
                this.player_heal = 0;
                if(confirm("Oyunu Kaybettiniz!! Tekrar Denemek istermisiniz")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
                
            }
        },
        monster_heal : function(value){
            if(value <= 0){
                this.monster_heal = 0;
                if(confirm("Oyunu Kazandınız!! Tekrar Denemek istermisiniz")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            }
        }
    }
});