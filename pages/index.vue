<script setup>
import { useEnlaces } from "@/store/store";

const enlaces = useEnlaces();

const plataformasVirtuales = ref(null);
const campusConvenios = ref(null);
const produccionAcademica = ref(null);
const formacionCapacitacion = ref(null);
const zonaCrea = ref(null);
const comunicacionVirtual = ref(null);

const toggleModal = (modalactivo) => {
  if (modalactivo == "plataformasVirtuales") {
    plataformasVirtuales.value = !plataformasVirtuales.value;
  }
  if (modalactivo == "campusConvenios") {
    campusConvenios.value = !campusConvenios.value;
  }
  if (modalactivo == "produccionAcademica") {
    produccionAcademica.value = !produccionAcademica.value;
  }
  if (modalactivo == "formacionCapacitacion") {
    formacionCapacitacion.value = !formacionCapacitacion.value;
  }
  if (modalactivo == "zonaCrea") {
    zonaCrea.value = !zonaCrea.value;
  }
  if (modalactivo == "comunicacionVirtual") {
    comunicacionVirtual.value = !comunicacionVirtual.value;
  }
};
</script>


<template>
  <div class="md:h-screen md:flex md:items-center md:justify-center fondo">
    <div
      class="bg-white p-10 border rounded-xl shadow-md shadow-gray-500/20 md:w-2/3"
    >
      <div class="flex justify-center items-center">
        <img
          class="w-24 h-24 rounded-full mx-4 bg-center bg-cover mb-10 md:-mt-6"
          src="/logo-unellez.jpg"
          alt="logo unellez"
        />
        <img
          class="w-24 h-24 rounded-full mx-4 bg-center bg-cover mb-10 md:-mt-6"
          src="/logo-dited.png"
          alt="logo Dited"
        />
      </div>
      <h1 class="text-4xl uppercase font-light mb-10 text-center">
        Campus Virtual - UNELLEZ
      </h1>

      <div class="md:grid md:grid-cols-3 grid-rows-4 gap-4">
        <!--Botones y contenido de Plataforma varina-->
        <div class="h-full row-span-2">
          <button
            type="button"
            class="block bg-blue-600 h-full w-full text-white font-medium uppercase rounded-md py-4 mb-4"
            @click="toggleModal('plataformasVirtuales')"
          >
            plataformas virtuales
          </button>
          <BaseModal
            :modalActive="plataformasVirtuales"
            @close-modal="toggleModal('plataformasVirtuales')"
          >
            <div class="text-black">
              <h1 class="text-4xl font-light mb-10 text-center">
                PLATAFORMA VIRTUALES
              </h1>
              <nuxt-link
                :to="enlaces.plataformaVarinas[0].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-red-950 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-red-950 hover:text-red-950 ease-in-out duration-300"
                >{{ enlaces.plataformaVarinas[0].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.plataformaVarinas[1].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300"
                >{{ enlaces.plataformaVarinas[1].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.plataformaVarinas[2].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300"
                >{{ enlaces.plataformaVarinas[2].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.plataformaVarinas[3].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300"
                >{{ enlaces.plataformaVarinas[3].titulo }}</nuxt-link
              >
            </div>
          </BaseModal>
        </div>

        <!--Botenes y contenido de campus vistuales unellez - convenios -->
        <div class="h-full row-span-2">
          <button
            type="button"
            class="block bg-green-600 w-full h-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
            @click="toggleModal('campusConvenios')"
          >
            CAMPUS VIRTUALES UNELLEZ - CONVENIOS
          </button>
          <BaseModal
            :modalActive="campusConvenios"
            @close-modal="toggleModal('campusConvenios')"
          >
            <div class="text-black">
              <h1 class="text-4xl font-light mb-10 text-center">
                CAMPUS VIRTUALES UNELLEZ - CONVENIOS
              </h1>
              <nuxt-link
                :to="enlaces.campusVirtuales[0].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300"
                >{{ enlaces.campusVirtuales[0].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.campusVirtuales[1].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300"
                >{{ enlaces.campusVirtuales[1].titulo }}</nuxt-link
              >
            </div>
          </BaseModal>
        </div>

        <!--PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA-->
        <div class="h-full row-span-2">
          <button
            type="button"
            class="block bg-red-600 w-full h-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
            @click="toggleModal('produccionAcademica')"
          >
            PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA
          </button>
          <BaseModal
            :modalActive="produccionAcademica"
            @close-modal="toggleModal('produccionAcademica')"
          >
            <div class="text-black">
              <h1 class="text-4xl font-light mb-10 text-center">
                PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA
              </h1>
              <nuxt-link
                :to="enlaces.produccionCreacion[0].url" target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300"
                >{{enlaces.produccionCreacion[0].titulo}}</nuxt-link
              >
              <nuxt-link
                to=""
                class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300"
                >HISTORICO EaD</nuxt-link
              >
              <nuxt-link
                to=""
                class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300"
                >Nube Edudigital</nuxt-link
              >
            </div>
          </BaseModal>
        </div>

        <!--FORMACIÒN Y CAPACITACIÒN -->
        <div class="h-full row-span-2">
          <button
            type="button"
            class="block bg-orange-400 w-full h-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
            @click="toggleModal('formacionCapacitacion')"
          >
            FORMACIÒN Y CAPACITACIÒN
          </button>
          <BaseModal
            :modalActive="formacionCapacitacion"
            @close-modal="toggleModal('formacionCapacitacion')"
          >
            <div class="text-black">
              <h1 class="text-4xl font-light mb-10 text-center">
                FORMACIÒN Y CAPACITACIÒN
              </h1>
              <nuxt-link
                :to="enlaces.formacionCapacitacion[0].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-red-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-red-700 hover:text-red-700 ease-in-out duration-300"
                >{{ enlaces.formacionCapacitacion[0].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.formacionCapacitacion[1].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300"
                >{{ enlaces.formacionCapacitacion[1].titulo }}</nuxt-link
              >
            </div>
          </BaseModal>
        </div>

        <!--Botenes y contenido de ZONA CREA -->
        <div class="h-full row-span-2">
          <button
            type="button"
            class="block bg-teal-600 w-full h-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
            @click="toggleModal('zonaCrea')"
          >
            ZONA DITED
          </button>
          <BaseModal
            :modalActive="zonaCrea"
            @close-modal="toggleModal('zonaCrea')"
          >
            <div class="text-black">
              <h1 class="text-4xl font-light mb-10 text-center">ZONA DITED</h1>
              <nuxt-link
                :to="enlaces.zonaCrea[0].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300"
                >{{ enlaces.zonaCrea[0].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.zonaCrea[1].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300"
                >{{ enlaces.zonaCrea[1].titulo }}</nuxt-link
              >
              <nuxt-link
                :to="enlaces.zonaCrea[2].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300"
                >{{ enlaces.zonaCrea[2].titulo }}</nuxt-link
              >
            </div>
          </BaseModal>
        </div>

        <!--Botenes y contenido de COMUNICACIÓN e INTERACCIÓN VIRTUAL -->
        <div class="h-full row-span-2">
          <button
            type="button"
            class="block bg-indigo-600 w-full h-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
            @click="toggleModal('comunicacionVirtual')"
          >
            COMUNICACIÓN e INTERACCIÓN VIRTUAL
          </button>
          <BaseModal
            :modalActive="comunicacionVirtual"
            @close-modal="toggleModal('comunicacionVirtual')"
          >
            <div class="text-black">
              <h1 class="text-4xl font-light mb-10 text-center">
                COMUNICACIÓN e INTERACCIÓN VIRTUAL
              </h1>
              <nuxt-link
                to=""
                class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300"
                >Soporte en Linea</nuxt-link
              >
              <nuxt-link
                to=""
                class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300"
                >Radio</nuxt-link
              >
              <nuxt-link
                :to="enlaces.comunicacionVirtual[0].url"
                target="_blank"
                class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300"
                >{{ enlaces.comunicacionVirtual[0].titulo }}</nuxt-link
              >
            </div>
          </BaseModal>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.fondo {
  background-image: url("@/public/fondo.jpg");
}
</style>

