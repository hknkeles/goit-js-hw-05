/* Bir kullanıcı nesnesi dizisi olan users parametresini alan bir getUserNames(users) ok fonksiyonu yazın. Fonksiyon, users dizisinden tüm kullanıcıların adlarını (name özelliği) içeren bir dizi döndürmelidir.

Aşağıdaki kodu alın ve çalışmasının doğruluğunu kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çağrılarının sonuçlarını görüntüleyecektir. */


const getUserNames = users=> {return users.map((user)=>user.name)}




console.log(
    getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
  );