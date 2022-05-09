<template>
<h4>Partner</h4>
    <div v-if="currentPartner" class="edit-form">
        <form>
            <div class="form-group">
                <label for="title">Nombre</label>
                <input type="text" disabled class="form-control" id="title"
                v-model="currentPartner.name"
                />
            </div>
            <div class="form-group">
                <label for="title">Username</label>
                <input type="text" disabled class="form-control" id="title"
                v-model="currentPartner.username"
                />
            </div>
            <div class="form-group">
                <label for="title">Stack</label>
                <input type="text" class="form-control" id="title"
                v-model="currentPartner.mainStack"
                />
            </div>
            <div class="form-group">
                <label for="title">Enrollment</label>
                <input type="text" disabled class="form-control" id="title"
                v-model="currentPartner.currentEnrollment"
                />
            </div>
            <div class="form-group">
                <label for="title">Azure Certification</label>
                <input type="text" disabled class="form-control" id="title"
                v-model="currentPartner.hasAzureCertification"
                />
            </div>
        </form>
        <button class="btn btn-danger mr-2" @click="deletePartner">
            Eliminar Partner
        </button>
        <button type="submit" class="btn btn-info mr-2" @click="updatePartner">
            Actualizar
        </button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p> Selecciona un partner. </p>
    </div>
</template>
<script>
import PartnerService from "../services/PartnerService";
export default {
    name: "Partner",
    data() {
        return {
        currentPartner: null,
        message: ''
        };
    },
    methods: {
        getPartner(id) {
        PartnerService.get(id)
            .then(response => {
            this.currentPartner= response.data;
            })
            .catch(e => {
            console.log(e);
            });
        },
        deletePartner() {
        PartnerService.delete(this.currentPartner.id)
        .then(response => {
            console.log(response.data);
            this.$router.push({ name: "explorers" });
        })
        .catch(e => {
            console.log(e);
        });
        },
        updatePartner() {
        PartnerService.update(this.currentPartner.id, this.currentPartner)
            .then(response => {
            console.log(response.data);
            this.message = 'Se actualizó correctamente';
            })
            .catch(e => {
            console.log(e);
            });
        }
    },
    mounted() {
        this.message = '';
        this.getPartner(this.$route.params.id);
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
