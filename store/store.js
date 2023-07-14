import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useEnlaces = defineStore('Enlaces', {
    // a function that returns a fresh state
    state: () => ({

        plataformaVarinas: [
            {
                titulo: 'OTOMACOS',
                url: 'http://edudigital.unellez.edu.ve/apure/otomacos/',
            },
            {
                titulo: 'VARINA',
                url: 'https://varina.edudigital.unellez.edu.ve/',
            },
            {
                titulo: 'CATHARY',
                url: 'http://edudigital.unellez.edu.ve/cojedes/cathary/',
            },
            {
                titulo: 'COSPES',
                url: 'http://edudigital.unellez.edu.ve/cospes/',
            },
            {
                titulo: 'CUIVAS',
                url: 'http://campus.unellez.edu.ve/guahibo/',
            },
        ],
        campusVirtuales: [
            {
                titulo: 'CARIBE',
                url: 'http://campus.unellez.edu.ve/caribe/login/index.php',
            },
            {
                titulo: 'ARAWAK',
                url: 'http://campus.unellez.edu.ve/arawak',
            },


        ],
        produccionCreacion: [
            {
                titulo: 'ARSE',
                url: 'https://unellez.edu.ve/portal/',
            },
            {
                titulo: 'Historico EaD',
                url: '',
            },
            {
                titulo: 'Nube Edudigital',
                url: '',
            },
            {
                titulo: 'Timoto Cuicas',
                url: 'http://edudigital.unellez.edu.ve/timoto-cuicas/',
            },
        ],
        formacionCapacitacion: [
            {
                titulo: 'MARICHE',
                url: 'http://campus.unellez.edu.ve/mariche',
            },
            {
                titulo: 'SENNA',
                url: 'http://campus.unellez.edu.ve/senna',
            },
            {
                titulo: 'Formación y Proyectos',
                url: 'campus.unellez.edu.ve/formacion/',
            },
        ],
        zonaCrea: [
            {
                titulo: 'FORMACION DITED',
                url: 'http://edudigital.unellez.edu.ve/formaciondited/',
            },
            {
                titulo: 'LABORATORIO DE PRODUCCION',
                url: 'http://edudigital.unellez.edu.ve/laboratorio/',
            },
            {
                titulo: 'AULAS MODELOS',
                url: 'http://edudigital.unellez.edu.ve/aulasmodelo/',
            },
        ],
        comunicacionVirtual: [
            {
                titulo: 'TV',
                url: 'https://www.youtube.com/channel/UCeh3UoCbumvXsmt8QQtmz5Q',
            }
        ],

    }),

})