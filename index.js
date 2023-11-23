const {createApp} = Vue
createApp({
    data(){
        return{
            contacts : [
                {
                    srcProfilePicture: "img/avatar_1.jpg",
                    alt : "Contatto 1",
                    name : "Michele",
                    messages : [
                        {
                            message : "Hai portato a spasso il cane?",
                            hour : "15:30",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Ricordati di stendere i panni",
                            hour : "15:50",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Tutto fatto",
                            hour : "16:15",
                            status : "received",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 3,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture: "img/avatar_2.jpg",
                    alt : "Contatto 2",
                    name : "Fabio",
                    messages : [
                        {
                            message : "Ciao come stai?",
                            hour : "16:30",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Bene grazie! Stasera ci vediamo?",
                            hour : "16:30",
                            status : "received",
                            delateMessage : false
                        },
                        {
                            message : "Mi piacerebbe ma devo andare a fare la spesa",
                            hour : "16:35",
                            status : "sent",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 3,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture: "img/avatar_3.jpg",
                    alt : "Contatto 3",
                    name : "Samuele",
                    messages : [
                        {
                            message : "La Marianna va in campagna",
                            hour : "10:10",
                            status : "received",
                            delateMessage : false
                        },
                        {
                            message : "Sicuro di non aver sbagliato chat?",
                            hour : "10:20",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Ah scusa!",
                            hour : "16:15",
                            status : "received",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 3,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture: "img/avatar_4.jpg",
                    alt : "Contatto 4",
                    name : "Alessandro B.",
                    messages : [
                        {
                            message : "Lo sai che ha aperto una nuova pizzeria?",
                            hour : "15:30",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Si, ma preferirei andare al cinema",
                            hour : "15:50",
                            status : "received",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 2,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture: "img/avatar_5.jpg",
                    alt : "Contatto 5",
                    name : "Alessandro L.",
                    messages : [
                        {
                            message : "Ricordati di chiamare la nonna",
                            hour : "15:30",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Va bene, stasera la sento",
                            hour : "15:50",
                            status : "received",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 2,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture: "img/avatar_6.jpg",
                    alt : "Contatto 6",
                    name : "Claudia",
                    messages : [
                        {
                            message : "Ciao Claudia, hai novità?",
                            hour : "15:30",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Non ancora",
                            hour : "15:50",
                            status : "received",
                            delateMessage : false
                        },
                        {
                            message : "Nessuna nuova, buona nuova",
                            hour : "15:51",
                            status : "sent",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 3,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture: "img/avatar_7.jpg",
                    alt : "Contatto 7",
                    name : "Federico",
                    messages : [
                        {
                            message : "Fai gli auguri a Martina che è il suo compleanno!",
                            hour : "15:30",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "Grazie per avermelo ricordato, le scrivo subito!",
                            hour : "15:50",
                            status : "received",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 2,
                    lastAccess : undefined
                },
                {
                    srcProfilePicture : "img/avatar_8.jpg",
                    alt : "Contatto 8",
                    name : "Davide",
                    messages : [
                        {
                            message : "Ciao, andiamo a mangiare la pizza stasera?",
                            hour : "15:30",
                            status : "received",
                            delateMessage : false
                        },
                        {
                            message : "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            hour : "15:50",
                            status : "sent",
                            delateMessage : false
                        },
                        {
                            message : "OK!!",
                            hour : "15:51",
                            status : "received",
                            delateMessage : false
                        }
                    ],
                    visible : true,
                    messageNumber : 3,
                    lastAccess : undefined
                }
            ],
            chatToShow: 0,
            inputUser : "",
            inputFilter : "",
            iconNotification : "fa-solid fa-bell-slash",
            notificationMessage1 : "Ricevi notifiche di nuovi messaggi",
            notificationMessage2 : "Attiva notifiche desktop",
            resCla : false
        }
    },
    methods : {
        showChat : function(i){
            this.chatToShow = i; 
        },
        getHour : function(){
            const data = new Date();
            const hour = data.getHours();
            const minutes = data.getMinutes();
            const fullTimetable = hour + ":" + minutes;
            return fullTimetable;
        },
        autoReply : function(i){
            this.contacts[i].messages.push({
                message : "OK",
                hour : this.getHour(),
                status : "received",
                delateMessage : false
            });
            this.contacts[i].messageNumber++;
            this.calculateLastAccess();
        },
        sendMessage : function(){
            const i = this.chatToShow;
            this.contacts[this.chatToShow].messages.push({
                message : this.inputUser,
                hour : this.getHour(),
                status : "sent",
                delateMessage : false
            });
            this.contacts[this.chatToShow].messageNumber++;
            this.inputUser = "";
            setTimeout(()=>{
                this.autoReply(i);
            }, 1000)
        },
        filter : function(){
            const inputFilterLength = this.inputFilter.length;
            for(let i=0; i<this.contacts.length; i++){
                let subString = this.contacts[i].name.substr(0, inputFilterLength);
                subString = subString.toLowerCase();
                if(this.inputFilter.toLowerCase() == subString){
                    this.contacts[i].visible = true;
                }else{
                    this.contacts[i].visible = false;
                }
            }
        },
        removeAllDelateMessage : function(){
            for(let index=0; index<this.contacts[this.chatToShow].messages.length; index++){
                this.contacts[this.chatToShow].messages[index].delateMessage = false;
            }
        },
        showDelateMessage : function(i){
            if(this.contacts[this.chatToShow].messages[i].delateMessage == false){
                this.removeAllDelateMessage();
                this.contacts[this.chatToShow].messages[i].delateMessage = true;
            }else{
                this.contacts[this.chatToShow].messages[i].delateMessage = false;
            }
        },
        delateMessage : function(i){
            this.contacts[this.chatToShow].messages.splice(i, 1);
            this.contacts[this.chatToShow].messageNumber--;
        },
        actDisNot : function(){
            if(this.notificationMessage2 == "Attiva notifiche desktop"){
                this.iconNotification = "fa-solid fa-bell";
                this.notificationMessage1 = "Disattiva notifiche di nuovi messaggi";
                this.notificationMessage2 = "Disattiva notifiche desktop";
            }else{
                this.iconNotification = "fa-solid fa-bell-slash";
                this.notificationMessage1 = "Ricevi notifiche di nuovi messaggi";
                this.notificationMessage2 = "Attiva notifiche desktop";
            }
        },
        funRes : function(){
            if(this.resCla == false){
                this.resCla = true;
            }else{
                this.resCla = false;
            }
        },
        calculateLastAccess : function(){
            for(let i=0; i<this.contacts.length; i++){
                for(let index=this.contacts[i].messages.length; index>0; index--){
                    if(this.contacts[i].messages[(index-1)].status == "received"){
                        this.contacts[i].lastAccess = this.contacts[i].messages[(index-1)].hour;
                        break;
                    }
                }
            }
        }
    },
    mounted(){
        this.calculateLastAccess();
    }
}).mount('#app')