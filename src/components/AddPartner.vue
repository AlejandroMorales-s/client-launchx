<template>
    <div class="submit-form">
        <div v-if="!submitted">
        <h3>Nuevo Partner</h3>
            <div class="form-group">
                <label for="title">Nombre </label>
                <input
                type="text"
                class="form-control"
                id="name"
                required
                v-model="partner.name"
                name="name"
                />
            </div>
            <div class="form-group">
                <label for="title">Username</label>
                <input
                type="text"
                class="form-control"
                id="username"
                required
                v-model="partner.username"
                name="username"
                />
            </div>
            <div class="form-group">
                <label for="title">Main Stack</label>
                <input
                type="text"
                class="form-control"
                id="mainStack"
                required
                v-model="partner.mainStack"
                name="mainStack"
                />
            </div>
            <div class="form-group">
                <label for="title">Enrollment</label>
                <input
                type="boolean"
                class="form-control"
                id="enrollment"
                required
                v-model="partner.currentEnrollment"
                name="enrollment"
                />
            </div>
            <div class="form-group">
                <label for="title">Azure Certification</label>
                <input
                type="boolean"
                class="form-control"
                id="azureCertification"
                required
                v-model="partner.hasAzureCertification"
                name="azureCertification"
                />
            </div>
            <button @click="savePartner" class="btn btn-success">Agregar</button>
        </div>
        <div v-else>
            <h4> Partner creado exitosamente. </h4>
            <button class="btn btn-success" @click="newPartner">Add</button>
        </div>
    </div>
</template>

<script>
import PartnerService from "../services/PartnerService";
export default {
    name: "add-partner",
    data() {
        return {
        partner: {
            id: null,
            name: "",
            username: "",
            mainStack: "",
            enrollment: Boolean,
            azureCertification: Boolean,
        },
        submitted: false
        };
    },
    methods: {
        savePartner() {
        var data = {
            name: this.partner.name,
            username: this.partner.username,
            mainStack: this.partner.mainStack,
            currentEnrollment: this.partner.enrollment,
            hasAzureCertification: this.partner.azureCertification
        };
        PartnerService.create(data)
            .then(response => {
            this.partner.id = response.data.id;
            this.submitted = true;
            })
            .catch(e => {
            console.log(e);
            });
        },
        newPartner() {
        this.submitted = false;
        this.partner = {};
        }
    }
};
</script>
