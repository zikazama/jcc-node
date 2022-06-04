// Tugas A

// soal 1
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";
console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

// soal 2
var sentence = "I am going to be React Native Developer";

var exampleFirstWord = sentence[0];
var secondWord = sentence[2] + sentence[3];
var thirdWord =
  sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri
var sixthWord =
  sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri
var seventhWord =
  sentence[23] +
  sentence[24] +
  sentence[25] +
  sentence[26] +
  sentence[27] +
  sentence[28]; // lakukan sendiri
var eighthWord =
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33] +
  sentence[34] +
  sentence[35] +
  sentence[36] +
  sentence[37] +
  sentence[38]; // lakukan sendiri

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

// soal 3
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14); // do your own!
var thirdWord2 = sentence2.substring(15, 17); // do your own!
var fourthWord2 = sentence2.substring(18, 20); // do your own!
var fifthWord2 = sentence2.substring(21, 25); // do your own!

console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

// soal 4
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14); // do your own!
var thirdWord2 = sentence2.substring(15, 17); // do your own!
var fourthWord2 = sentence2.substring(18, 20); // do your own!
var fifthWord2 = sentence2.substring(21, 25); // do your own!

console.log(
  "First Word: " +
    exampleFirstWord2 +
    ", with length : " +
    exampleFirstWord.length
);
console.log(
  "Second Word: " + secondWord2 + ", with length : " + secondWord2.length
);
console.log(
  "Third Word: " + thirdWord2 + ", with length : " + thirdWord2.length
);
console.log(
  "Fourth Word: " + fourthWord2 + ", with length : " + fourthWord2.length
);
console.log(
  "Fifth Word: " + fifthWord2 + ", with length : " + fifthWord2.length
);

// Tugas B

// soal 1
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Siapa kamu: ", (name) => {
  readline.question("Apa peranmu: ", (role) => {
    if (name === "" && role === "") {
      console.log(`Nama harus diisi!`);
    } else if (name !== "" && role === "") {
      console.log(`Halo ${name}, Pilih peranmu untuk memulai game!`);
    } else if (name !== "" && role === "penyihir") {
      console.log(
        `Halo Penyihir ${name}, kamu dapat melihat siapa yang menjadi werewolf!`
      );
    } else if (name !== "" && role === "guard") {
      console.log(
        `Halo Guard ${name}, kamu akan membantu melindungi temanmu dari serangan werewolf.`
      );
    } else if (name !== "" && role === "warewolf") {
      console.log(
        `Halo Werewolf ${name}, Kamu akan memakan mangsa setiap malam!`
      );
    }
    readline.close();
  });
});

// soal 2
var hari = 19;
var bulan = 1;
var tahun = 1998;

switch (bulan) {
  case 0:
    bulan = "Januari";
    break;
  case 1:
    bulan = "Februari";
    break;
  case 2:
    bulan = "Maret";
    break;
  case 3:
    bulan = "April";
    break;
  case 4:
    bulan = "Mei";
    break;
  case 5:
    bulan = "Juni";
    break;
  case 6:
    bulan = "Juli";
    break;
  case 7:
    bulan = "Agustus";
    break;
  case 8:
    bulan = "September";
    break;
  case 9:
    bulan = "Oktober";
    break;
  case 10:
    bulan = "November";
    break;
  case 11:
    bulan = "Desember";
    break;
}

console.log(hari + " " + bulan + " " + tahun);
