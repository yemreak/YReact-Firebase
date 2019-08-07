# YReact-Firebase <!-- omit in toc -->

React ⚛️, React-Router 🔗 ve Firebase 🔥 projesi

## İçerikler <!-- omit in toc -->

- [Kullanılan Teknolojiler ve Kurulumları](#Kullan%C4%B1lan-Teknolojiler-ve-Kurulumlar%C4%B1)
  - [Nodejs ve React](#Nodejs-ve-React)
  - [Firebase](#Firebase)
    - [Firebase Oluşturma](#Firebase-Olu%C5%9Fturma)
    - [Firebase Kullanımı](#Firebase-Kullan%C4%B1m%C4%B1)
    - [Firebase Üzerineden Sunum](#Firebase-%C3%9Czerineden-Sunum)
    - [Firebase için Faydalı Notlar](#Firebase-i%C3%A7in-Faydal%C4%B1-Notlar)
- [Faydalandığım Kaynaklar](#Faydaland%C4%B1%C4%9F%C4%B1m-Kaynaklar)
- [TODO-Tree Yapılandırması](#TODO-Tree-Yap%C4%B1land%C4%B1rmas%C4%B1)
- [Destek ve İletişim](#Destek-ve-%C4%B0leti%C5%9Fim)

## Kullanılan Teknolojiler ve Kurulumları

| Teknoloji    | Açıklama                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| React        | Facebook'un oluşturmuş olduğun web framework'u                                                               |
| React Router | Her sayfa değişikliğinde yeniden sunucuya istek atılmaz, sadece giriş kısmında tüm sayfalar sunucudan alınır |
| Firebase     | Google'ın sunduğu çok verimli database sistemi                                                               |

### Nodejs ve React

- [Nodejs kurulumu](https://nodejs.org/en/download/)
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

### Firebase

#### Firebase Oluşturma

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

#### Firebase Kullanımı

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

#### Firebase Üzerineden Sunum

Firebase CLI kurulumunu `npm install -g firebase-tools` ile yapın

| Komut           | Açılama                                        |
| --------------- | ---------------------------------------------- |
| firebase login  | Firebase'e giriş (Google hesabı ile)           |
| firebase init   | Firebase'de serilenmeden önce hazırlama eylemi |
| firebase deploy | Firebase üzerinden sunma                       |

#### Firebase için Faydalı Notlar

Çok sık tercih edilen **Firebase class'ı oluşturup, her _component_ için onu çağırmak** eylemi sorunlara sebeb olur, çünkü:

- React bileşenlerini test etmesi çok zorlaşır
- Firebase tek seferlik tanımlanması gereken bir sistem içerir (singleton)
  - Aksi halde hata eğilimli bir davranış sergiler.

> [React Context API](https://www.robinwieruch.de/react-context-api/) tercih edilmelidir. Bu sistem ile firebase örneği tüm componentlerin üstünde tanımlar.

## Faydalandığım Kaynaklar

- [A Firebase in React Tutorial for Beginners](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
- [Firebase Tutorial](https://www.robinwieruch.de/firebase-tutorial/)
- [React Kitapları](https://drive.google.com/open?id=1JFHiLsMys29fGLcYMweU33hExWtyG2zV)
- [Firebase Web İşlemleri](https://firebase.google.com/docs/auth/web/start)

## TODO-Tree Yapılandırması

![](res/todo_tree.png)

<details>
<summary>Yapılandırmayı göster</summary>

````json
{
  "todo-tree.tags": ["!TODO", "!BUG", "!DEV", "!RES", "!OLD", "!WARN", "!TIP"],
  "todo-tree.labelFormat": "${after}", // (${line})
  "todo-tree.tagsOnly": true,
  "todo-tree.defaultHighlight": {
    "icon": "tasklist",
    "type": "text",
    "background": "#6FA5FF",
    "opacity": 17,
    "iconColour": "#6FA5FF"
  },
  "todo-tree.customHighlight": {
    // !TIP: Bilgiler (tip)
    "!TIP": {
      "icon": "book",
      "type": "text",
      "foreground": "#f5f2a9",
      "background": "#f5f2a9",
      "opacity": 7,
      "iconColour": "#f5f2a9"
    },
    // !TODO: Yapılacak (todo)
    "!TODO": {
      "icon": "checklist",
      "type": "text",
      "fontStyle": "normal",
      "foreground": "#6FA5FF",
      "background": "#6FA5FF",
      "opacity": 7,
      "iconColour": "#6FA5FF"
    },
    // !BUG: Hatalar (bug)
    "!BUG": {
      "icon": "bug",
      "type": "text",
      "foreground": "#FF2C2C",
      "background": "#FF2C2C",
      "opacity": 7,
      "iconColour": "#FF2C2C"
    },
    // !DEV: İyileştirme, geliştirme (dev)
    "!DEV": {
      "icon": "telescope",
      "type": "text",
      "foreground": "#72CB6A",
      "background": "#72CB6A",
      "opacity": 7,
      "iconColour": "#72CB6A"
    },
    // !RES: Gelecek planları, araştırmalar (res)
    "!RES": {
      "icon": "beaker",
      "type": "text",
      "foreground": "#9CF7FF",
      "background": "#9CF7FF",
      "opacity": 7,
      "iconColour": "#9CF7FF"
    },
    // !WARN: Uyarılar (warn)
    "!WARN": {
      "icon": "megaphone",
      "type": "text",
      "foreground": "#CFCC35",
      "background": "#CFCC35",
      "opacity": 7,
      "iconColour": "#CFCC35"
    },
    // !OLD: Eskimiş, kaldırılacak (deprecated)
    "!OLD": {
      "icon": "trashcan",
      "type": "text",
      "foreground": "#959595",
      "background": "#959595",
      "opacity": 7,
      "iconColour": "#959595"
    }
  }
}
```

</details>

## Destek ve İletişim

**The [MIT License](https://choosealicense.com/licenses/mit/) &copy; Yunus Emre Ak**

[![Github](https://drive.google.com/uc?id=1PzkuWOoBNMg0uOMmqwHtVoYt0WCqi-O5)][github]
[![LinkedIn](https://drive.google.com/uc?id=1hvdil0ZHVEzekQ4AYELdnPOqzunKpnzJ)][linkedin]
[![Website](https://drive.google.com/uc?id=1wR8Ph0FBs36ZJl0Ud-HkS0LZ9b66JBqJ)][website]
[![Mail](https://drive.google.com/uc?id=142rP0hbrnY8T9kj_84_r7WxPG1hzWEcN)][mail]
[![Destek](https://drive.google.com/uc?id=1zyU7JWlw4sJTOx46gJlHOfYBwGIkvMQs)][bağış anlık]

[![Patreon](https://drive.google.com/uc?id=11YmCRmySX7v7QDFS62ST2JZuE70RFjDG)][bağış aylık]

<!-- İletişim -->

[mail]: mailto::yedhrab@gmail.com?subject=YBilgiler%20%7C%20Github
[github]: https://github.com/yedhrab
[website]: https://yemreak.com
[linkedin]: https://www.linkedin.com/in/yemreak/
[bağış anlık]: https://gogetfunding.com/yemreak/
[bağış aylık]: https://www.patreon.com/yemreak/

<!-- İletişim Sonu -->
````
