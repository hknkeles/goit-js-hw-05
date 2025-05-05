/* İki parametre alan bir getUsersWithFriend(users, friendName) ok fonksiyonu yazın:

ilk parametre users - kullanıcı nesnelerinden oluşan bir dizi
ikinci parametre friendName - aranacak arkadaşın adı.
Fonksiyon, friendName adında bir arkadaşı olan users dizisindeki tüm kullanıcıların bir dizisini döndürmelidir. Her kullanıcının arkadaşları friends özelliğinde saklanır. Böyle bir arkadaşı olan kullanıcı yoksa, fonksiyon boş bir dizi döndürmelidir.



İpuçları:

filter() metodu, belirli bir koşulu sağlayan öğelerle yeni bir dizi oluşturmak için kullanılabilir.
friends dizisinin friendName içerip içermediğini kontrol etmek için includes() yöntemini kullanın.


Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımladıktan sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir. */


const getUsersWithFriend = (users, friendName) =>{
  return users.filter( (user) => user.friends.includes(friendName)  );
};

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 

const sayılar = [1, 2, 3, 4, 5];

const ciftSayilar = sayılar.filter(sayi => sayi %2 === 0)

console.log(ciftSayilar);





















/* const çiftler = sayılar.filter(sayi => sayi % 2 === 0).map( (value, index)=> 
  {return `${value*2} index no: ${index}`})

console.log(çiftler); // [2, 4] */