<template>
    <div class="product-infor">

        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h3 class="display-5">Product Infomation</h3>
    <router-link to="/product">Back</router-link>
</div>

<div class="container">
    <form @submit.prevent="save()">
        <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Product name</label>
        <div class="col-sm-9">
            <input type="text"
             class="form-control" 
             v-model="product.name" 
             @blur="validate()"
             v-bind:class="{'is-invalid':errors.name}"/>
             <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
        </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Product price</label>
            <div class="col-sm-9">
                <input type="text"
                 class="form-control" 
                 v-model="product.price" 
                 @blur="validate()"
             v-bind:class="{'is-invalid':errors.price}"/>
             <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Product description</label>
            <div class="col-sm-9">
                <textarea class="form-control"
                 rows="3" 
                 v-model="product.description"
                 @blur="validate()"
             v-bind:class="{'is-invalid':errors.description}"></textarea>
             <div class="invalid-feedback" v-if="errors.description">{{ errors.description }}</div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label"></label>
            
            <div class="col-sm-9 text-left" >
                <button type="submit" class="btn btn-primary">Save</button> &nbsp;
                <button type="reset" class="btn btn-danger" @click="cancel()">Cancel</button>
            </div>
        </div>
    </form>
</div>

    </div>
</template>

<script>
export default {
    name:'ProductForm',
    data(){
        return{
            errors:{
                name:'',
                price:'',
                description:''
            },
            product:{
                name:'',
                price:'',
                description:''
            }
        }
    },
    created(){
        let productId = this.$route.params.id
        if(productId){
            this.getProduct(productId)
        }
    },
    methods:{
        validate(){
            let isValid=true 
            this.errors={
                name:'',
                price:'',
                description:''
            }

            if(!this.product.name ){
               this.errors.name = 'Product name is required';
               isValid=false;
            }
            if(!this.product.price ){
                this.errors.price = 'Product price is required';
                isValid=false;
            }else if(!this.isNumber(this.product.price)){
                this.errors.price = 'Product price must be a number';
                isValid=false;
            }
            if(!this.product.description ){
                this.errors.description = 'Product description is required';
                isValid=false;
            }

            return isValid;
        },
        isNumber(value){
           return /^\d*$/.test(value);
        },
        save(){
            if(this.validate()){
                if(this.product.id){
                    this.$request.put(`https://backend-source-codee.onrender.com/api/products/${this.product.id}`,this.product).then(res=>{
                        if(res.data.success){
                            this.$router.push({name:'product.list'})
                            return
                        }
                        alert('Error')
                    })
                    return;
                }

                this.$request.post('https://backend-source-codee.onrender.com/api/products',this.product).then(res=>{
                   if(res.data.success){
                        this.$router.push({name:'product.list'})
                    return
                   }
                   alert('Error')
                })
        }
    },
    getProduct(productId){
        this.$request.get(`https://backend-source-codee.onrender.com/api/products/${productId}`).then(res=>{
                this.product=res.data
        })
    },
    cancel(){
        this.product.name='';
        this.product.price='';
        this.product.description='';
        }
    }
}

</script>