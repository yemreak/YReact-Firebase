# Kurulum ve Kullanım <!-- omit in toc -->

Projenin çalıştırılabilmesi ▶ için gerekli olan işlemleri ve açıklamaları 📃 içerir.

## İçerikler <!-- omit in toc -->

- [Kullanılan Teknolojiler](#Kullan%C4%B1lan-Teknolojiler)
- [Nodejs ve React Kurulumu](#Nodejs-ve-React-Kurulumu)
  - [Bu projenin kurulumu](#Bu-projenin-kurulumu)
  - [Sıfırdan Kurulum](#S%C4%B1f%C4%B1rdan-Kurulum)

## Kullanılan Teknolojiler

| Teknoloji                                                     | Açıklama                                                                                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React](https://reactjs.org/)                                 | Facebook'un oluşturmuş olduğun web framework'u                                                                                                                               |
| [React Router](https://github.com/ReactTraining/react-router) | Her sayfa değişikliğinde yeniden sunucuya istek atılmaz, sadece giriş kısmında tüm sayfalar sunucudan alınır                                                                 |
| [Firebase](https://firebase.google.com/)                      | Google'ın sunduğu çok verimli (auth, data storage ...) database sistemi                                                                                                      |
| [Recompose](https://github.com/acdlite/recompose)             | `withX(withX(withX...(component)))` yapısındaki karmaşıklığı engelleyerek tek metotda (`compose`) kullanmayı sağlar                                                          |
| React Context API                                             | En üst bileşenlerden en alt bileşenlere veri (`state`) göndermek için her bir bileşenden verinin aktarılması lazım, bu yapı sayesinde veriler direkt olarak aktarılabilmekte |

## Nodejs ve React Kurulumu

- [Nodejs kurulumu](https://nodejs.org/en/download/)

### Bu projenin kurulumu

- `git clone <url>` ile bu projeyi indirin
- İndiridiğiniz projenin içine girin `cd YReact-Firebase`
- `npm install` komutu ile gerekli modülleri yüklemeyi başlatın
- Firebase üzerinden bilgilerinizi `.env` dosyası oluşturarak içine yazın
  - Detaylı bilgi için **Firebase Kullanımı** alanına bakın
  - `.env` dosyası oluşturulmazsa **boş sayfa** gösterecektir
- `npm start` ile kurulumu test edin

### Sıfırdan Kurulum

- `npm install -g create-react-app`
- Projenin oluşturulacağı dizine terminal (`cmd` veya `bash`) ile gelin
- `create-react-app <proje ismi>` yazın
  - Örn: `YReact-Firebase`
- `cd <proje ismi>` ile proje dizinine girin
- `npm start` ile projeyi test edin

<details>
<summary>Router için örnek dizin yapısı</summary>

```sh
cd src
rm App.js App.test.js App.css logo.svg

mkdir components
cd components
mkdir Account Admin App Home Landing SignIn SignOut SignUp
mkdir Navigation PasswordChange PasswordForget
mkdir Session Firebase

cd App
touch index.js
cd ..

mkdir constants
cd constants
touch routes.js roles.js
cd ..
```

</details>
