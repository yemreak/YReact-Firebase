# Firebase 🔥 İşlemleri <!-- omit in toc -->

Google'ın sunduğu online database 📅 servisidir.

## İçerikler <!-- omit in toc -->

- [Firebase Oluşturma](#Firebase-Olu%C5%9Fturma)
- [Firebase Kullanımı](#Firebase-Kullan%C4%B1m%C4%B1)
- [Firebase Database Notları](#Firebase-Database-Notlar%C4%B1)
- [Firebase Üzerineden Sunum](#Firebase-%C3%9Czerineden-Sunum)
- [Firebase için Faydalı Notlar](#Firebase-i%C3%A7in-Faydal%C4%B1-Notlar)
  - [Firebase için Yetkiye Göre Sayfa Yönlendirmesi](#Firebase-i%C3%A7in-Yetkiye-G%C3%B6re-Sayfa-Y%C3%B6nlendirmesi)

## Firebase Oluşturma

- [Firebase](https://firebase.google.com/) sitesine **Google Hesabınız** ile giriş yapın
- Gerekli yönergeleri takip edip
  - Database oluşturun
  - `Add app` alanından **Web** kısmını seçin
- Firebase SDK snipped alanından `Config` kısmını seçin

```js
// Örnek config
const firebaseConfig = {
  apiKey: "XXXXxxxx",
  authDomain: "xxxxXXXX.firebaseapp.com",
  databaseURL: "https://xxxXXXX.firebaseio.comm",
  projectId: "xxxxXXXX",
  storageBucket: "",
  messagingSenderId: "xxxxXXXX",
  appId: "X:xxxxxxxxxx:xxx:xxxxxxxxx"
};
```

## Firebase Kullanımı

- Firebase bilgileri `.env` adlı dosya ile oluşturulmalıdır
- Projede `process.env` olarak Env dosyaları alınmaktadır.
- Env dosyaları projenin ana dizininde olmalı
  - İstersenin tek bir `.env` dosyası ile yönetebilirsiniz
  - Ya da özelleştirilmiş olarak kullanılabilir
    - `.env.development`
    - `.env.production`

```env
# Firebase config
REACT_APP_API_KEY=XXXXxxxx
REACT_APP_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID=xxxxXXXX
REACT_APP_STORAGE_BUCKET=xxxxXXXX.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxxxXXXX
REACT_APP_APP_ID=X:xxxxxxxxxx:xxx:xxxxxxxxx
```

## Firebase Database Notları

- In Firebase, the RESTful URI becomes a simple path, and the HTTP methods become Firebase’s API.
- [Firebase tutorial](https://www.robinwieruch.de/firebase-tutorial/)
- [Firebase hangi database seçmeliyim?](https://firebase.google.com/docs/database/rtdb-vs-firestore)
- [Firebase fiyatlandırması](https://firebase.google.com/pricing)


## Firebase Üzerineden Sunum

Firebase CLI kurulumunu `npm install -g firebase-tools` ile yapın

| Komut           | Açılama                                        |
| --------------- | ---------------------------------------------- |
| firebase login  | Firebase'e giriş (Google hesabı ile)           |
| firebase init   | Firebase'de serilenmeden önce hazırlama eylemi |
| firebase deploy | Firebase üzerinden sunma                       |

> [Firebase hosting'i iptal etme](https://stackoverflow.com/a/44584220)


## Firebase için Faydalı Notlar

Çok sık tercih edilen **Firebase class'ı oluşturup, her _component_ için onu çağırmak** eylemi sorunlara sebeb olur, çünkü:

- React bileşenlerini test etmesi çok zorlaşır
- Firebase tek seferlik tanımlanması gereken bir sistem içerir (singleton)
  - Aksi halde hata eğilimli bir davranış sergiler.

> [React Context API](https://www.robinwieruch.de/react-context-api/) tercih edilmelidir. Bu sistem ile firebase örneği tüm componentlerin üstünde tanımlar.

### Firebase için Yetkiye Göre Sayfa Yönlendirmesi

```jsx
// Girişe göre yetkilendirme (const condition = authUser => authUser != null;)
const condition = authUser => !!authUser;
// Rol tabanlı yetkilendirme
const condition = authUser => authUser.role === "ADMIN";
// İzin tabanlı yetkilendirme
const condition = authUser => authUser.permissions.canEditAccount;
```


