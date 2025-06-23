function showDetails(place) {
  const info = {
    paro: {
      title: "Paro Taktsang",
      description: "Also known as the Tiger’s Nest, Paro Taktsang is Bhutan’s most iconic monastery. It is dramatically perched on the edge of a 900-meter cliff and is believed to be the meditation site of Guru Rinpoche, who flew there on the back of a tigress. The hike to the monastery is a sacred pilgrimage and a breathtaking journey, symbolizing inner strength, spiritual growth, and Bhutan’s deep-rooted Buddhist heritage."
    },
    punakha: {
      title: "Punakha Dzong",
      description: "Punakha Dzong, or Pungthang Dewachen Phodrang (Palace of Great Bliss), was built in 1637 and served as the capital of Bhutan until 1955. It is located at the confluence of the Pho Chhu and Mo Chhu rivers and is renowned for its majestic structure and historical significance. It hosts many royal events, including the coronation of the first King of Bhutan. The Dzong is a symbol of national unity and spiritual strength."
    },
    dochula: {
      title: "Dochula Pass",
      description: "Located at an altitude of 3,100 meters, Dochula Pass offers panoramic views of the snow-capped eastern Himalayas. It is home to the 108 Druk Wangyal Chortens built in honor of Bhutanese soldiers who lost their lives in 2003. On clear days, the sight of the distant peaks paired with fluttering prayer flags offers a deeply spiritual and tranquil experience, representing peace, remembrance, and national pride."
    },
    simtokha: {
      title: "Simtokha Dzong",
      description: "Constructed in 1629 by Zhabdrung Ngawang Namgyal, Simtokha Dzong is considered the oldest dzong in Bhutan. It served both as a fortress and a center for learning. Today, it houses a language institute dedicated to preserving and teaching Dzongkha, the national language. Its ancient murals and carvings reflect Bhutan’s commitment to cultural preservation and education."
    },
    ta: {
      title: "Ta Dzong",
      description: "Originally built in 1649 as a watchtower to defend Rinpung Dzong, Ta Dzong now houses Bhutan's National Museum. Situated on a ridge overlooking the Paro valley, it holds a vast collection of artifacts ranging from ancient weapons to religious relics, manuscripts, and traditional costumes. The circular structure itself is architecturally unique and tells the story of Bhutan’s artistic and historical journey."
    }
  };

  const placeInfo = info[place];
  if (placeInfo) {
    document.getElementById("modal-title").innerText = placeInfo.title;
    document.getElementById("modal-description").innerText = placeInfo.description;
    document.getElementById("modal").style.display = "flex";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
