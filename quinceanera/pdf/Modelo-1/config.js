const config = {
    event: {
        defaultEventId: "rocio-fernando-2027",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    seo: {
        titulo: "Rocio & Fernando | Boda 2027",
        descripcion: "Boda de Rocio & Fernando - 27 de Febrero 2027",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Rocio & Fernando",
        fecha: "27-02-2027",
        fechaVisible: "27.02.2027"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cacncion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia de La Merced",
            hora: "3:00 PM",
            direccion: "Antigua Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/n9k4w8ixKS7Rr4uz6"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Ruinas de la Recolección",
            hora: "6:00 PM",
            direccion: "Antigua Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/VdUh997QMwtf9dH56"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#RocioFernandoBoda",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
