<template>
  <q-card bordered class="bg-grey-1 q-pa-md shadow-3">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">
            <q-icon name="fastfood" />
            Pratos
          </div>
          <div class="text-subtitle2 q-pl-lg">
            controle de pratos,bebidas,etc
          </div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="refresh" title="Atualizar"> </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-table
        :data="dishes"
        :columns="columns"
        row-key="id"
        :loading="isLoading"
        no-data-label="Não foram encontrados registros."
        loading-label="Carregando registros..."
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Dish } from '../models/dish'
import { Component, Vue } from 'vue-property-decorator'
import { DishService } from '../services/DishService'

@Component
export default class Dishes extends Vue {
  columns = [
    {
      name: 'id',
      required: true,
      label: '#',
      align: 'left',
      field: (row: Dish) => row.id,
    },
    {
      name: 'name',
      required: true,
      label: 'Prato',
      align: 'left',
      field: (row: Dish) => row.name,
    },
    {
      name: 'price',
      required: true,
      label: 'Valor',
      align: 'left',
      field: (row: Dish) => 'R$ ' + row.price,
    },
    {
      name: 'categories',
      required: true,
      label: 'Categorias',
      align: 'left',
      field: (row: Dish) => row.categories?.map(i => i.name).join(', '),
    },
  ]

  isLoading = false

  dishes: Array<Dish> = []

  created() {
    this.loadDishes()
  }

  async loadDishes() {
    this.isLoading = true

    const { data } = await DishService.get()

    this.dishes = data.data

    this.isLoading = false
  }
}
</script>

<style></style>
