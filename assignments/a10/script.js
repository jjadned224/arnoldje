window.onload = () => {
    MaiAppend();
}

const toys = [];

const showToy = () => {
    const toyList = document.getElementById("toy-list");
    
    // Lego Bugatti: Matthew
    toys.push(new Toy("Lego Bugatti", "$385.99", "16+", 4.8, "legocar.jpeg"));
    // Forkknife Bazooka Nerfgun: Daniel
    toys.push(new Toy("Fortnite Bazooka Nerfgun", "$53.18", "8+", 4.6, "forkknife.jpg"));
    // Beyblade Pegasus: Willyum
    toys.push(new Toy("Beyblade: Pegasus", "$16.99", "5+", 4.4, "beyblade.jpg"));
    // Gameboy: JJ
    toys.push(new Toy("Gameboy Color", "$93.93", "8+", 4.4, "gameboy.jpg"));
    // Harrypotter Vibrating Broomstick: Matthew... again
    toys.push(new Toy("Harry Potter Nimbus 2000 Vibrating Broomstick", "$41.41", "8+", 4.1, "harrypotter.jpg"));
    // Little Pet Shop: Lily
    toys.push(new Toy("Littlest Pet Shop", "$27.99", "2+", 4.0, "petshop.jpg"));

    toys.forEach(toy => {
        toyList.append(toy.pica);
        toyList.append(toy.item);
    });

};

const MaiAppend = () => {
    const Main = document.getElementById("main");
    Main.style.position = "relative";
    Main.style.float = "left";
    Main.style.margin = "5px";
    Main.append(showToy());
}

class Toy {
    constructor(name, price, age, rating, image) {
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.image = image;
    }
    

    get item() {
        const div = document.createElement("div");
        div.classList.add("toyz");

        const h3 = document.createElement("h4");
        h3.innerHTML = this.name;
        div.append(h3);

        const ul = document.createElement("ul");
        div.append(ul);
        ul.append(this.listItem(this.price));
        ul.append(this.listItem("Ages: "+ this.age));
        ul.append(this.listItem(this.rating + " out of 5 stars"));

        div.style.position = "absolute";
        div.style.top = "5px";
        div.style.left = "5px";

        return div;
    }

    get pica() {
        const pic = document.createElement("div");
        pic.classList.add("pictura");
        pic.append(this.picture(this.image));
        return pic;
    }

    picture(info) {
        let png = document.createElement("img");
        png.src = './toyimages/' + info;
        return png;
    }

    listItem(info) {
        let li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}


