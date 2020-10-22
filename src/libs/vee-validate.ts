import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import ptBR from 'vee-validate/dist/locale/pt_BR.json'

extend('required', required)

extend('email', email)

localize('pt_BR', ptBR)

Vue.component('ValidationProvider', ValidationProvider)

Vue.component('ValidationObserver', ValidationObserver)
