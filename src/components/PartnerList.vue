<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Partners Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(partner, index) in partners"
          :key="index"
          @click="setActivePartner(partner, index)"
        >
          {{ partner.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentPartner">
        <h4>Partner</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentPartner.name}}
          <br><label><strong>Username:</strong></label> {{ currentPartner.username}}
          <br><label><strong>Main Stack:</strong></label> {{ currentPartner.mainStack}}
          <br><label><strong>Current Enrollment:</strong></label> {{ currentPartner.currentEnrollment}}
          <br><label><strong>Azure Certification:</strong></label> {{ currentPartner.hasAzureCertification}}

        </div>
        <router-link :to="'/partner/' + currentPartner.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un partner.</p>
      </div>
    </div>
  </div>
</template>
<script>

import PartnerService from "../services/PartnerService";

export default {
  name: "patner-list",
  data() {
    return {
      tutorials: [],
      partners: [],
      currentTutorial: null,
      currentPartner: null,
      currentIndex: -1,
      title: "",
      partnerId: ""
    };
  },
  methods: {
    getAllPartners(){
      PartnerService.getAll()
        .then(response => {
          this.partners = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActivePartner(partner, index) {
      this.currentPartner = partner;
      this.currentIndex = partner? index : -1;
    }
  },
  mounted() {
    this.getAllPartners();
  }
};
</script>
