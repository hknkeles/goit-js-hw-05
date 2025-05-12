/* İki parametre alan bir getTotalBalanceByGender(users, gender) ok fonksiyonu yazın:

ilk parametre users - kullanıcı nesnelerinden oluşan bir dizi,
ikinci parametre gender - cinsiyeti saklayan bir dize.
Fonksiyon bir metot çağrı zinciri kullanmalı ve cinsiyeti (özellik gender) gender parametresinin değeriyle eşleşen kullanıcıların toplam bakiyesini (özellik balance) döndürmelidir.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımlanmasından sonra yapıştırın. Çalışmasının sonuçları konsolda görüntülenecektir. */

/* const getTotalBalanceByGender = (users, gender) => {
  return users.filter(user => user.gender === gender).reduce((toplam, sayi) => toplam + sayi.balance,0)
}
 */

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);

const all_users = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(all_users, "male")); // 12053

console.log(getTotalBalanceByGender(all_users, "female")); // 8863


