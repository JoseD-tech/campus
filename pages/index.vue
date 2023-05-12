<script setup>

const plataformasVirtuales = ref(null)
const campusConvenios = ref(null)
const produccionAcademica = ref(null)
const formacionCapacitacion = ref(null)
const zonaCrea = ref(null)
const comunicacionVirtual = ref(null)

const toggleModal = (modalactivo) => {
  console.log(modalactivo);
  if (modalactivo == 'plataformasVirtuales') {
    plataformasVirtuales.value = !plataformasVirtuales.value;
  }
  if (modalactivo == 'campusConvenios') {
    campusConvenios.value = !campusConvenios.value;
  }
  if (modalactivo == 'produccionAcademica') {
    produccionAcademica.value = !produccionAcademica.value;
  }
  if (modalactivo == 'formacionCapacitacion') {
    formacionCapacitacion.value = !formacionCapacitacion.value;
  }
  if (modalactivo == 'zonaCrea') {
    zonaCrea.value = !zonaCrea.value;
  }
  if (modalactivo == 'comunicacionVirtual') {
    comunicacionVirtual.value = !comunicacionVirtual.value;
  }
};
</script>


<template>
  <div class="md:h-screen md:flex md:items-center md:justify-center fondo">
    <div class="bg-white p-10 border rounded-xl shadow-md shadow-gray-500/20 md:w-1/3">
      <img class="w-24 h-24 rounded-full mx-auto bg-center bg-cover mb-10 md:-mt-6" src="/logo-unellez.jpg"
        alt="logo unellez" />
      <h1 class="text-4xl uppercase font-light mb-10 text-center">Campus Virtual</h1>

      <!--Botones y contenido de Plataforma varina-->
      <div>
        <button type="button" class="block bg-blue-600 w-full text-white font-medium uppercase rounded-md py-4 mb-4"
          @click="toggleModal('plataformasVirtuales')">
          plataforma varina
        </button>
        <BaseModal :modalActive="plataformasVirtuales" @close-modal="toggleModal('plataformasVirtuales')">
          <div class="text-black">
            <h1 class="text-4xl font-light mb-10 text-center">PLATAFORMA VIRTUALES</h1>
            <nuxt-link to="https://twitter.com/nuxt_js" target="_blank"
              class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">OTOMACOS</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300">VARINAS</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300">CATHARY</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-red-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-red-500 hover:text-red-500 ease-in-out duration-300">COSPES</nuxt-link>
          </div>
        </BaseModal>
      </div>

      <!--Botenes y contenido de campus vistuales unellez - convenios -->
      <div>
        <button type="button" class="block bg-green-600 w-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
          @click="toggleModal('campusConvenios')">
          CAMPUS VIRTUALES UNELLEZ - CONVENIOS
        </button>
        <BaseModal :modalActive="campusConvenios" @close-modal="toggleModal('campusConvenios')">
          <div class="text-black">
            <h1 class="text-4xl font-light mb-10 text-center">CAMPUS VIRTUALES UNELLEZ - CONVENIOS</h1>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">CARIBE</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300">ARAWAK</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300">SENNA</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-red-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-red-500 hover:text-red-500 ease-in-out duration-300">MARICHE</nuxt-link>
          </div>
        </BaseModal>
      </div>

      <!--PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA-->
      <div>
        <button type="button" class="block bg-red-600 w-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
          @click="toggleModal('produccionAcademica')">
          PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA
        </button>
        <BaseModal :modalActive="produccionAcademica" @close-modal="toggleModal('produccionAcademica')">
          <div class="text-black">
            <h1 class="text-4xl font-light mb-10 text-center">PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA</h1>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">ARSE</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300">HISTORICO
              EaD</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300">Nube
              Edudigital</nuxt-link>
          </div>
        </BaseModal>
      </div>

      <!--FORMACIÒN Y CAPACITACIÒN -->
      <div>
        <button type="button" class="block bg-orange-400 w-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
          @click="toggleModal('formacionCapacitacion')">
            FORMACIÒN Y CAPACITACIÒN
        </button>
        <BaseModal :modalActive="formacionCapacitacion" @close-modal="toggleModal('formacionCapacitacion')">
          <div class="text-black">
            <h1 class="text-4xl font-light mb-10 text-center">FORMACIÒN Y CAPACITACIÒN</h1>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">Campues Externo</nuxt-link>
          </div>
        </BaseModal>
      </div>

      <!--Botenes y contenido de ZONA CREA -->
      <div>
        <button type="button" class="block bg-teal-600 w-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
          @click="toggleModal('zonaCrea')">
          ZONA CREA
        </button>
        <BaseModal :modalActive="zonaCrea" @close-modal="toggleModal('zonaCrea')">
          <div class="text-black">
            <h1 class="text-4xl font-light mb-10 text-center">ZONA CREA</h1>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">FORMACION DITED</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300">LABORATORIO DE PRODUCCION</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300">AULAS MODELO</nuxt-link>
          </div>
        </BaseModal>
      </div>

      <!--Botenes y contenido de COMUNICACIÓN e INTERACCIÓN VIRTUAL -->
      <div>
        <button type="button" class="block bg-indigo-600 w-full text-white font-medium uppercase rounded-md py-4 px-4 mb-4"
          @click="toggleModal('comunicacionVirtual')">
          COMUNICACIÓN e INTERACCIÓN VIRTUAL
        </button>
        <BaseModal :modalActive="comunicacionVirtual" @close-modal="toggleModal('comunicacionVirtual')">
          <div class="text-black">
            <h1 class="text-4xl font-light mb-10 text-center">COMUNICACIÓN e INTERACCIÓN VIRTUAL</h1>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">Soporte en Linea</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300">Radio</nuxt-link>
            <nuxt-link to=""
              class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300">TV</nuxt-link>
          </div>
        </BaseModal>
      </div>

    </div>
  </div></template>


<style scoped>.fondo {
  background-image: url('@/public/fondo.jpg');
}</style>

