<script setup>
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>


<template>
  <div class="h-screen flex items-center justify-center fondo">
    <div
      class="bg-white p-10 border rounded-xl shadow-md shadow-gray-500/20"
    >
      <img
        class="w-24 h-24 rounded-full mx-auto bg-center bg-cover mb-10 -mt-6"
        src="/logo-unellez.jpg"
        alt="logo unellez"
      />
      <h1 class="text-4xl uppercase font-light mb-20">Campus Virtual</h1>
      <button type="button" class="bg-blue-400 py-2 px-4" @click="toggleModal">
        plataforma varina
      </button>
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="text-black">
          <h1 class="text-4xl font-light mb-10">PLATAFORMA VIRTUALES</h1>
          <nuxt-link to="" class="block text-center py-4 mt-4 font-semibold bg-green-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-green-700 hover:text-green-700 ease-in-out duration-300">OTOMACOS</nuxt-link>
          <nuxt-link to="" class="block text-center py-4 mt-4 font-semibold bg-orange-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 ease-in-out duration-300">VARINAS</nuxt-link>
          <nuxt-link to="" class="block text-center py-4 mt-4 font-semibold bg-blue-700 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-blue-700 hover:text-blue-700 ease-in-out duration-300">CATHARY</nuxt-link>
          <nuxt-link to="" class="block text-center py-4 mt-4 font-semibold bg-red-500 px-4 rounded-md cursor-pointer text-white border hover:bg-white hover:border-red-500 hover:text-red-500 ease-in-out duration-300">COSPES</nuxt-link>
        </div>
      </BaseModal>
      
    </div>
  </div>
</template>


<style scoped>
.fondo {
  background-image: url('@/public/fondo.jpg');
}
</style>

