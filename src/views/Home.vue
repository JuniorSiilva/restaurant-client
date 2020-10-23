<template>
  <q-card bordered class="bg-grey-1 q-pa-md shadow-3">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">
            <q-icon name="home" />
            Página inicial
          </div>
          <div class="text-subtitle2 q-pl-lg">
            dashboard
          </div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="refresh" title="Atualizar"> </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="q-pa-md">
        <div class="row">
          <q-card bordered class="bg-grey-1 shadow-3 col">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">
                    <q-icon name="notifications" />
                    Mesas
                  </div>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <TableNotifications></TableNotifications>
            </q-card-section>
          </q-card>

          <q-card bordered class="bg-grey-1 q-ml-sm shadow-3 col">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">
                    <q-icon name="notifications" />
                    Pedidos
                  </div>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <OrderDishesNotifications></OrderDishesNotifications>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OrderDishesNotifications from '../components/OrderDishesNotifications.vue'
import TableNotifications from '../components/TableNotifications.vue'

@Component({
  components: {
    OrderDishesNotifications,
    TableNotifications,
  },
})
export default class Home extends Vue {}
</script>

<style></style>
