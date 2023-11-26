// Definindo uma classe Animal usando encapsulamento
class Animal {
    constructor(name) {
        this._name = name;
    }
    // Método para obter o nome do animal
    getName() {
        return this._name;
    }
    // Método abstrato para fazer o animal emitir um som
    makeSound() {
        throw new Error("O método makeSound deve ser implementado pelas subclasses");
    }
}

// Subclasse Dog que herda de Animal
class Dog extends Animal {
    // Implementando o método makeSound para a classe Dog
    makeSound() {
        return "Woof! Woof!";
    }
}

// Subclasse Cat que herda de Animal
class Cat extends Animal {
    // Implementando o método makeSound para a classe Cat
    makeSound() {
        return "Meow!";
    }
}

// Função para exibir informações sobre um animal
function displayAnimalInfo(animal) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>${animal.getName()}</h2>
        <p>${animal.makeSound()}</p>
    `;
}

// Criando instâncias das classes
const myDog = new Dog('Buddy');
//const myCat = new Cat('Whiskers');

displayAnimalInfo(myDog);
//displayAnimalInfo(myCat);
