// Importar imágenes estáticas alojadas en la carpeta public o src/assets
// Ajusta las rutas según donde guardes las imágenes en tu proyecto
export const gamesData = [
    { id: 1, name: "League of Legends", category: "Estrategia", image: process.env.PUBLIC_URL + "/images/estrategia.jpg" },
    { id: 2, name: "Fortnite", category: "Shooter", image: process.env.PUBLIC_URL + "/images/shooter.jpg" },
    { id: 3, name: "Minecraft", category: "Aventura", image: process.env.PUBLIC_URL + "/images/aventura.jpg" },
    { id: 4, name: "Fifa 2025", category: "Deportes", image: process.env.PUBLIC_URL + "/images/deportes.jpg" },
    { id: 5, name: "The Witcher 3", category: "Juegos de rol", image: process.env.PUBLIC_URL + "/images/rpg.jpg" },
    { id: 6, name: "GTA", category: "accion", image: process.env.PUBLIC_URL + "/images/accion.jpg" },
];