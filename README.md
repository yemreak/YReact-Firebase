# YReact-Firebase <!-- omit in toc -->

Açıklama sonradan eklenecek.

## İçerikler <!-- omit in toc -->

- [Hızlandırılmış Kurulum](#H%C4%B1zland%C4%B1r%C4%B1lm%C4%B1%C5%9F-Kurulum)
- [Kullanılan Teknolojiler](#Kullan%C4%B1lan-Teknolojiler)
- [Faydalandığım Kaynaklar](#Faydaland%C4%B1%C4%9F%C4%B1m-Kaynaklar)

## Hızlandırılmış Kurulum

- [Nodejs kurulumu](https://nodejs.org/en/download/)
- `npm install -g create-react-app`
- Projenin oluşturulacağı dizine terminal (`cmd` veya `bash`) ile gelin 
- `create-react-app <proje ismi>` yazın
  - Örn: `YReact-Firebase`
- `cd <proje ismi>` ile proje dizinine girin
- `npm start` ile projeyi test edin

<details>
<summary>Firebase kalıbı</summary>

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



## Kullanılan Teknolojiler

| Teknoloji    | Açıklama                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| React        | Facebook'un oluşturmuş olduğun web framework'u                                                               |
| React Router | Her sayfa değişikliğinde yeniden sunucuya istek atılmaz, sadece giriş kısmında tüm sayfalar sunucudan alınır |
| Firebase     | Google'ın sunduğu database sistemi                                                                           |


## Faydalandığım Kaynaklar

- [A Firebase in React Tutorial for Beginners](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
