/* Kullanıcı nesnelerinden oluşan bir dizi olan users parametresini alan sortByDescendingFriendCount(users) isimli bir ok fonksiyonu yazın.

Fonksiyon, azalan arkadaş sayılarına göre sıralanmış tüm kullanıcıların bir dizisini döndürmelidir (friends özelliği).

Aşağıdaki kodu alın ve çalışmasının doğruluğunu kontrol etmek için fonksiyonunuzun tanımlamadan sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir. */

const sortByDescendingFriendCount = (users) => {
    return users.toSorted((a, b) => b.friends.length - a.friends.length );
};




console.log(
    sortByDescendingFriendCount([
      {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male"
      },
      {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female"
      },
      {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male"
      },
      {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female"
      },
      {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male"
      },
      {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male"
      },
      {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female"
      }
    ])
  );