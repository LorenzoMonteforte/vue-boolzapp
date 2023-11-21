const {createApp} = Vue
createApp({
    data(){
        return{
            contacts : [
                {
                    srcProfilePicture: "img/avatar_1.jpg",
                    alt : "Contatto 1",
                    name : "Michele"
                },
                {
                    srcProfilePicture: "img/avatar_2.jpg",
                    alt : "Contatto 2",
                    name : "Fabio"
                },
                {
                    srcProfilePicture: "img/avatar_3.jpg",
                    alt : "Contatto 3",
                    name : "Samuele"
                },
                {
                    srcProfilePicture: "img/avatar_4.jpg",
                    alt : "Contatto 4",
                    name : "Alessandro B."
                },
                {
                    srcProfilePicture: "img/avatar_5.jpg",
                    alt : "Contatto 5",
                    name : "Alessandro L."
                },
                {
                    srcProfilePicture: "img/avatar_6.jpg",
                    alt : "Contatto 6",
                    name : "Claudia"
                },
                {
                    srcProfilePicture: "img/avatar_7.jpg",
                    alt : "Contatto 7",
                    name : "Federico"
                },
                {
                    srcProfilePicture : "img/avatar_8.jpg",
                    alt : "Contatto 8",
                    name : "Davide"
                }
            ]
        }
    },
    methods : {

    }
}).mount('#app')