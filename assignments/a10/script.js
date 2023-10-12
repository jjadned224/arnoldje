window.onload = () => {
    showToy();
}

const toys = [];

const showToy = () => {
    const toyList = document.getElementById("toy-list");
    
    // Lego Bugatti: Matthew
    toys.push(new Toy("Lego Bugatti", "$385.99", "16+", 4.8, "legocar.png"));
    // Forkknife Bazooka Nerfgun: Daniel
    toys.push(new Toy("Fortnite Bazooka Nerfgun", "$53.18", "8+", 4.6, "forkknife.jpg"));
    // Beyblade Pegasus: Willyum
    toys.push(new Toy("Beyblade: Pegasus", "$16.99", "5+", 4.4, "beyblade.jpg"));
    // Gameboy: JJ
    toys.push(new Toy("Gameboy Color", "$93.93", "8+", 4.4, "gameboy.jpg"));
    // Harrypotter Vibrating Broomstick: Matthew... again
    toys.push(new Toy("Harry Potter Nimbus 2000 Vibrating Broomstick", "$41.41", "8+", 4.1, "harrypotter.png"));
    // Little Pet Shop: Lily
    toys.push(new Toy("Littlest Pet Shop", "$27.99", "2+", 4.0, "petshop.png"));

    toys.forEach(toy => {
        toyList.append(toy.pica);
    });

};

class Toy {
    constructor(name, price, age, rating, image) {
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.image = image;
    }

    get pica() {
        const pic = document.createElement("div");
        pic.classList.add("pictura");
        pic.append(this.picture(this.image));
        

        const h4 = document.createElement("h4");
        h4.innerHTML = this.name;
        pic.append(h4);

        const ul = document.createElement("ul");
        pic.append(ul);
        ul.append(this.listItem("Price: " + this.price));
        ul.append(this.listItem("Ages: "+ this.age));
        ul.append(this.listItem(this.rating + " out of 5 stars"));

        h4.style.position = "relative";
        h4.style.top = "-200px";
        h4.style.left = "125px";
        h4.style.width = "50%";

        ul.style.position = "relative";
        ul.style.top = "-200px";
        ul.style.left = "-25px";
        ul.style.listStyleType = "none";
        
        return pic;
    }

    picture(info) {
        let png = document.createElement("img");
        png.style.position = "relative";
        png.src = './toyimages/' + info;
        return png;
    }

    listItem(info) {
        let li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}


