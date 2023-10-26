const getBands = async () => {
    const url = "https://jjadned224.github.io/assignments/a11/json/bands.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showBands = async () => {
    let bands = await getBands();
    let BandList = document.getElementById("band-lists");
  
    bands.forEach((band) => {
      BandList.append(getBandItem(band));
    });
  };

  const getBandItem = (band) => {
    let title = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = band.name;
    title.append(h1);

    let section = document.createElement("section");
    section.classList.add("rower");
    
    let row = document.createElement("div");

    let img = document.createElement("img");
    img.src = band.img;
    section.append(img);

    let ul = document.createElement("ul");
    
    section.append(ul);
    ul.append(getLi(`Labels: ${band.labels}`));
    ul.append(getLi(`Members: ${band.members}`));
    ul.append(getLi(`Founded in: ${band.founded}`));
    ul.append(getLi(`Genres: ${band.genres}`));
    ul.append(getLi(`Description: ${band.description}`));
    ul.append(getLi(`Monthly Listeners: ${band.month}`));
    
    row.appendChild(title);
    row.appendChild(section);
    return row;
  };
  
  const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };

  window.onload = () => showBands();