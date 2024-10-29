const app = Vue.createApp({

    data() {

        return {
            Shares: [
                {
                    Name: "Unknown",
                    BuyPrice: 0,
                    SellPrice: 0,
                    Amount: 0,
                    Sum: 0,
                },
                
                
            ]
        }

    },

    methods: {
        myMethod() {

        },
    
    },
    computed: {
        myComputed() {
            return "wassup?"
        },
        
    }

})