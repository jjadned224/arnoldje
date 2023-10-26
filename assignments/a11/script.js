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
    let section = document.createElement("section");
  
    let h3 = document.createElement("h3");
    h3.innerText = band.name;
    section.append(h3);
  
    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(`Labels: ${band.label}`));
    ul.append(getLi(`Members: ${band.members}`));
    ul.append(getLi(`Founded in: ${band.founded}`));
    ul.append(getLi(`Genres: ${band.genres}`));
    ul.append(getLi(`Description: ${band.description}`));
    ul.append(getLi(`Monthly Listeners: ${band.month0}`));
  
    return section;
  };
  
  const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };

  window.onload = () => showBands();