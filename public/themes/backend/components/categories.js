window.app = new Vue({
    el: '#app',
    data: {
        categories: [],
        category: {
            cateId: '',
            cateNm: '',
            cateLevel: 1,
            catePrnt: '',
        },
        levels: [
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
        ]
    },

    methods: {
        search() {
            axios.get('/api/categories')
                .then((response) => {
                    console.log(response);
                    this.categories = response.data;
                })
                .catch((err) => {
                    alert(err.message);
                });
        },

        create() {
            axios.post('/api/categories', this.category)
                .then((response) => {
                    let cate = response.data;
                    console.log(`Added new Cate: `, cate);
                    this.search();
                    // this.categories.push(cate);
                    this.category = {
                        cateId: '',
                        cateNm: '',
                        cateLevel: 1,
                        catePrnt: '',
                    };
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
    },

    mounted() {
        this.search();
    }
})