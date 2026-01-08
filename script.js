function greetingTime() {
    const time = new Date().getHours();
    let greeting;

    if (time >= 5 && time <= 11) {
        greeting = "Selamat Pagi";
    } else if (time >= 12 && time <= 14) {
        greeting = "Selamat Siang";
    } else if (time >= 15 && time <= 17) {
        greeting = "Selamat Sore";
    } else {
        greeting = "Selamat Malam";
    }

    document.getElementById("greeting").innerText =
        greeting + ", selamat datang di website adidas Indonesia";
}

function toggleCategory(category) {
    // ambil semua kategori
    const allCategories = document.querySelectorAll('.category-content');

    // sembunyikan semuanya
    allCategories.forEach(item => {
        item.style.display = 'none';
    });

    // tampilkan kategori yang diklik
    const target = document.getElementById('cat-' + category);
    if (target) {
        target.style.display = 'block';
    }
}
