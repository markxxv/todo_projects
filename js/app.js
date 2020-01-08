new Vue({
    el: '#dash',
    components: { 'v-swatches': window.VueSwatches.default },
    methods: {

        addTask ( card, event) {
            var value = event.target.value;
            if(!value) {
                return
            }

            card.tasks.push({
                title: value,
                status: "open"
            })
            event.target.value = "";
        },    

        removeTask: function (card, task) {
            card.tasks.splice(card.tasks.indexOf(task), 1)
        },
        removeCard: function (cards, card) {
            if(confirm("Do you really want to delete?")){
                this.cards.splice(this.cards.indexOf(card), 1)
            }    
        },

        addCard: function () {
            var value = this.newCardTitle && this.newCardTitle.trim()
            if (!value) {
                return
            }
            this.cards.push({
                "title": value,
                "color": "#597491",
                "tasks": []
            })
            this.newCardTitle = "";
        },          

    },

    data: {
        colors: ['#74b9ff', '#78e08f', '#fdcb6e', '#778beb', '#fd79a8', '#597491'],
        newCardTitle: '',
        gridColumns: 'col_4',
        cards: [
            {
                "title": "Raisa: Fashion Of Spain",
                "color": "",
                "tasks": [
                    {"title":"Validar registracion","status":"completed"},
                    {"title":"Integrar TefPay","status":"open"},
                    {"title":"Conectar Mailgun","status":"open"},
                    {"title":"Plantillas correo","status":"open"},
                ],
            },
            {
                "title": "Tato: VentaBCN.com",
                "color": "",
                "tasks": [
                    {"title":"Task 01","status":"completed"},
                    {"title":"Task 02","status":"open"},
                    {"title":"Task 03","status":"completed"},
                ],
            },
            {
                "title": "Tatiana: Orff.ru",
                "color": "",
                "tasks": [
                    {"title":"Correcciones en asociacion","status":"open"},
                    {"title":"Añadir nuevo libro","status":"completed"},
                    {"title":"Añadir interfaz de fotos en blog","status":"open"},
                ],
            },
        ]
    },// data

    watch: {
        cards: {
          handler() {
            //console.log('cards changed!');
            localStorage.setItem('cards', JSON.stringify(this.cards));
          },
          deep: true,
        },
        gridColumns: {
            handler() {
              //console.log('cards changed!');
              localStorage.setItem('gridColumns', this.gridColumns);
            },
            deep: true,
          },
    },

    mounted() {
        //console.log('App mounted!');
            if (localStorage.getItem('cards')) {
                this.cards = JSON.parse(localStorage.getItem('cards'));
            }

            if (localStorage.getItem('gridColumns')) {
                this.gridColumns = localStorage.getItem('gridColumns');
            }
            
    }

})