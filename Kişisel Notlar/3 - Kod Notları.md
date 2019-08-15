# Kod Notları

## With Metodlarının Kullanımları

| Metod                | `this.props.` objesi | Sağladığı işlemler        |
| -------------------- | -------------------- | ------------------------- |
| `withFirebase`       | `firebase`           | Firabase                  |
| `withRouter`         | `history`            | Sayfa yönlendirme         |
| `withAuthorization`  |                      | Koşullu sayfa yönlendirme |
| `withAuthentication` | `authUser`           | Kullanıcı kimlik erişimi  |

### Authorization Metodu

```jsx
// Yönlendirme koşulu
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AdminPage);
```
