<template>
  <q-list>
    <q-item :to="{ name: 'home' }" exact>
      <q-item-section avatar>
        <q-icon name="dashboard" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Dashboard</q-item-label>
      </q-item-section>
    </q-item>

    <q-item :to="{ name: 'dishes' }" exact>
      <q-item-section avatar>
        <q-icon name="fastfood" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Pratos</q-item-label>
      </q-item-section>
    </q-item>

    <q-expansion-item icon="pages" label="Pages">
      <q-list class="q-pl-lg">
        <q-item to="/Login-1" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="email" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login-1</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Lock" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lock Screen</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Lock-2" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lock Screen - 2</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Pricing" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Pricing</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Profile" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User Profile</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item icon="map" label="Maps">
      <q-list class="q-pl-lg">
        <q-item to="/Map" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Map</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/MapMarker" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="location_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Map Marker</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/StreetView" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="streetview" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Street View</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-item to="/TreeTable" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="list" />
      </q-item-section>
      <q-item-section>
        <q-item-label>TreeTable</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Charts" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="insert_chart" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Charts</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Cards" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="card_giftcard" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Cards</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Tables" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="table_chart" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Tables</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Contact" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="person" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Contact</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Checkout" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="check_circle_outline" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Checkout</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Calendar" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="date_range" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Calendar</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Taskboard" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="done" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Taskboard</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/Pagination" active-class="q-item-no-link-highlighting">
      <q-item-section avatar>
        <q-icon name="date_range" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Pagination</q-item-label>
      </q-item-section>
    </q-item>

    <q-expansion-item icon="menu_open" label="Menu Levels">
      <q-item class="q-ml-xl" active-class="q-item-no-link-highlighting">
        <q-item-section>
          <q-item-label>Level 1</q-item-label>
        </q-item-section>
      </q-item>

      <q-expansion-item :header-inset-level="0.85" label="Level 2">
        <q-item class="q-ml-xl" style="margin-left: 55px  !important;" active-class="q-item-no-link-highlighting">
          <q-item-section>
            <q-item-label>Level 2.1</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item :header-inset-level="1" label="Level 2.2">
          <q-item style="margin-left: 65px  !important;" active-class="q-item-no-link-highlighting">
            <q-item-section>
              <q-item-label>Level 2.2.1</q-item-label>
            </q-item-section>
          </q-item>

          <q-item style="margin-left: 65px  !important;" active-class="q-item-no-link-highlighting">
            <q-item-section>
              <q-item-label>Level 2.2.2</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-expansion-item>
    </q-expansion-item>
  </q-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EssentialLinks extends Vue {}
</script>

<style></style>
