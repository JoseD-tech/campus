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
                titulo: 'VARINAS',
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
        ],
        campusVirtuales: [
            {
                titulo: 'CARIBE',
                url: 'http://campus.unellez.edu.ve/caribe/login/index.php',
            },
            {
                titulo: 'ARAWAK',
                url: 'campus.unellez.edu.ve/arawak',
            },
            {
                titulo: 'SENNA',
                url: 'http://campus.unellez.edu.ve/senna',
            },
            {
                titulo: 'MARICHE',
                url: 'campus.unellez.edu.ve/mariche',
            },
        ],
        produccionCreacion: [
            {
                titulo: '',
                url: '',
            }
        ],
        formacionCapacitacion: [
            {
                titulo: '',
                url: '',
            }
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