import wo from "../assets/portfolio/WO.png";
import bookshelf from "../assets/portfolio/Bookshelf.png";
import mealFinder from "../assets/portfolio/MealFinder.png";
import restaurant from "../assets/portfolio/restauran-1.png";
import fitlifehub from "../assets/portfolio/fitlifehub-1.png";
import locrent from "../assets/portfolio/locrent.png";
import bookshelfAPI from "../assets/portfolio/Bookshelf API.png";

const portfolios = [
  {
    id: 1,
    title: "Wedding Organizer",
    img: wo,
    desc: "Website ini merupakan sebuah website profil untuk sebuah wedding Organizer yang menerapkan konsep semantic HTML dalam Menyusun struktur website, kemudian dalam penyusunan layout saya menggunakan flexbox.",
    repoUrl: "https://github.com/Abidr2002/Wedding_Organizer",
    website: "https://weddingorg.netlify.app/",
  },
  {
    id: 2,
    title: "Bookshelf Apps",
    img: bookshelf,
    desc: "Website ini merupakan sebuah website untuk menyimpan daftar buku baik yang sudah dibaca maupun belum dibaca. Pada website ini terdapat fitur tambahkan buku dalam bagian selesai dibaca atau belum dibaca, memindahkan buku dari bagian selesai dibaca ke bagian belum dibaca dan sebaliknya, juga terdapat fitur hapus buku. Saya memanfaatkan local storage untuk menyimpan data buku.",
    repoUrl: "https://github.com/Abidr2002/BookshelfApps",
    website: "https://bookshelfapps1.netlify.app/",
  },
  {
    id: 3,
    title: "Meal Finder Apps",
    img: mealFinder,
    desc: "Ini adalah sebuah website yang berisi daftar makanan yang dimana saya menggunakan API dari https://www.themealdb.com/api.php untuk medapatkan data. User dapat mencari makanan apa yang dapat dibuat berdasarkan bahan makanan yang diinginkan. Pada pembuatan website ini saya menggunakan custom element, Webpack sebagai module bundler, dan Memanfaatkan API dengan menggunakan konsep AJAX dalam menampilkan data yang dinamis pada aplikasi yang dibuat.",
    repoUrl: "https://github.com/Abidr2002/meal-finder",
    website: "https://mealfinder111.netlify.app/",
  },
  {
    id: 4,
    title: "Restaurant PWA",
    img: restaurant,
    desc: "Ini adalah sebuah website yang berisikan daftar beberapa restoran dimana user dapat melihat detail dari restauran dengan dengan mengklik nama restauran. Website ini menerapkan responsibilitas yang dimana mampu diakses di seluruh ukuran layarr devices, mulai dari mobile terlebih dahulu (mobile first approach) hingga ke layer desktop. Aksesibilitas website yang dimana website harus dapat juga diakses dengan hanya menggunakan keyboard, kemudian terdapat element Skip to Content, screen reader, dan lain sebagainya. Website yang dibuat juga mampu berprilaku layaknya aplikasi mobile yang diantaranya yaitu mampu ditambahkan ke home screen, kemudian dapat diakses secara offline jika data sudah pernah dimuat sebelumnya. Pada pembuatan website juga menerapkan integration test dan end to end test. Agar website lebih maksimal lagi, yang terakhir kita menerapkan image optimization dan bundle optimization.",
    repoUrl: "https://github.com/Abidr2002/restaurant-PWA-testing",
    website: "https://restauran-app.netlify.app/",
  },
  {
    id: 5,
    title: "Fitlife Hub",
    img: fitlifehub,
    desc: "Website ini memiliki beberapa fitur utama yaitu menyediakan informasi-informasi terkait kesehatan dengan harapan mampu meningkatkan kesadaran masyarakat mengenai pentingnya kesehatan, kemudian website ini juga mampu menghitung berat badan ideal, BMI, dan kebutuhan kalori dari pengguna. user dapat melakukan registrasi dan login untuk dapat menyimpan setiap hasil perhitungan yang telah dilakukan. Dalam proses pembuatan website ini menggunakan React dan Tailwind pada bagian front-end dan Node.Js dan Express pada bagian back-end. Untuk database dari website ini saya menggunakan mySql.",
    repoUrl: "https://github.com/Abidr2002/Fitlife-Hub",
    website: "https://fitlifehub.vercel.app/",
  },
  {
    id: 6,
    title: "LocRent",
    img: locrent,
    desc: "Website ini adalah sebuah website persewaan kendaraan. User dapat melakukan registrasi dan login untuk dapat menyewa kendaraan. Website ini juga menerapkan multi level user, dimana user dengan level admin dapat melihat status kendaraan yang ada, menambahkan dan mengedit detail kendaraan, menghapus kendaraan. Dalam pembuatan website ini menggunakan PHP dan juga Bootstrap. Untuk database dari website ini saya menggunakan mySql.",
    repoUrl: "https://github.com/Abidr2002/FP_Pemweb",
    website: "/",
  },
  {
    id: 7,
    title: "Bookshelf API",
    img: bookshelfAPI,
    desc: "Ini adalah sebuah API yang berisikan daftar buku. Api ini dapat melakukan tambahkan buku, edit buku, hapus buku, menampilkan detail buku dengan berdasarkan id, dan juga menampilkan semua daftar buku yang ada. Dalam proses pengembangan saya menggunakan framework Hapi, dan nanoid untuk membuat id buku. ",
    repoUrl: "https://github.com/Abidr2002/Bookshelf-API",
    website: "/",
  },
];

export default portfolios;
