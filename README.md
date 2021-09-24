<p align="center">
    <img width="175" src="https://i.hizliresim.com/tb60ara.png" alt="Trendyol logo">
</p>
<p align="center">
  React.js ile yapılmış Trendyol Express klonu
</p>

---

# Demo

[trendyol-express-clone.netlify.app/](trendyol-express-clone.netlify.app/)

# Proje Kurulumu

Proje React.js kullanılarak yapılmıştır. Paket yöneticisi olarak yarn kullanılmaktadır.

### Kurulum:

```bash
yarn
```

### Geliştirme:

```bash
yarn start
```

### Build:

```bash
yarn build
```

# Yapılacaklar

- [x] Components
    - [x] Logo
    - [x] TAB
    - [x] Delivery Progress
    - [x] Delivery Details
        - [x] Details
        - [x] Table
    - [x] Delivery Query
    - [x] Footer
    - [x] Scroll Up

# Bilgi

Proje bitmiştir. Orijinal sitede kullanımı zorlaştıran şeyleri yeniden düzenledim. Örneğin URL'ye teslimat numarasını
parametre olarak göndermezsek "Gönderi Bulunamadı" şeklinde bir hata çıkıyor. Ben ise gönderi bulunamazsa da kullanıcıya
bir sorgu ekranı gösteriyorum. Bu sayede kullanıcı hatalı giriş yapsa da sorgu yapabilceği bir kullanım sunuyorum.
"Gönderi İşlemleri" kısmında ise bir kullanışsızlık hissettim. Kullanıcı zaten sorgusunu yaptığı teslimatı görüntülerken
kullanıcıdan tekrar teslimat no isteniyor. Gereksiz bulduğum için kullanıcıya teslimat no yazdırmadan direkt işlemleri
gösteriyorum. Proje API'ye bağlı canlı veriler gösteriyor fakat API dökümanı elimde olmadığı için elimdeki veriler ile
API'yi entegre ettim.