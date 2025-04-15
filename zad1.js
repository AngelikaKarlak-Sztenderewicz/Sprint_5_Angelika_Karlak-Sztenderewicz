const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

const firstNameLetter = (person) => {
  if (typeof person.firstName === "string" && person.firstName.length >= 3) {
    const last3 = person.firstName.slice(-3);
    return last3.split("").reverse().join("").toLowerCase();
  } else {
    return null;
  }
};

const lastNameLetter = (person) => {
  if (typeof person.lastName === "string" && person.lastName.length >= 3) {
    const first3 = person.lastName.slice(0, 3);
    return first3.split("").reverse().join("").toLowerCase();
  } else {
    return null;
  }
};

people.forEach((person) => {
  const first = firstNameLetter(person);
  const last = lastNameLetter(person);

  if (first && last) {
    const nickname = first + last;
    const formatted = nickname.charAt(0).toUpperCase() + nickname.slice(1);
    person.nickname = formatted;
  } else {
    console.log("błąd");
  }
});

const nicknamePeople = people.filter((person) => person.nickname);

nicknamePeople.forEach((person, index) => {
  const firstLength =
    typeof person.firstName === "string" ? person.firstName.length : 0;
  const lastLength =
    typeof person.lastName === "string" ? person.lastName.length : 0;
  const sum = firstLength + lastLength;
  if (sum % 2 === 0) {
    person.age = sum;
  } else {
    const allLetters = Object.keys(person)
      .filter((key) => ["firstName", "lastName", "nickname"].includes(key))
      .reduce((acc, key) => {
        const keyLength = key.length;
        return acc + keyLength;
      }, 0);
    const number = index === 0 ? 1 : index;
    person.age = Math.ceil(allLetters / number);
  }
});
people.forEach((person) => {
  const everyLetter = (
    (person.firstName || "") +
    (person.lastName || "") +
    (person.nickname || "")
  ).toLowerCase();
  const letterCount = {};

  for (let char of everyLetter) {
    if (char.match(/[a-z]/)) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  }

  let mostFrequentLetter = "";
  let maxCount = 0;

  for (let char in letterCount) {
    const count = letterCount[char];

    if (count > maxCount) {
      maxCount = count;
      mostFrequentLetter = char;
    } else if (count === maxCount) {
      if (char < mostFrequentLetter) {
        mostFrequentLetter = char;
      }
    }
  }
  person.mostCommonLetter = { letter: mostFrequentLetter, count: maxCount };
});
console.log(
  nicknamePeople.map(
    ({ firstName, lastName, nickname, age, mostCommonLetter }) => ({
      firstName,
      lastName,
      nickname,
      age,
      mostCommonLetter,
    })
  )
);
