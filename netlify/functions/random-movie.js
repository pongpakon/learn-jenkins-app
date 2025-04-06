exports.handler = async (event, context) => {
  // ตัวอย่างอาร์เรย์หนังไทยและหนังต่างประเทศ (50 รายการ)
  const movies = [
    // หนังไทย
    "ฉลาดเกมส์โกง",
    "เพื่อนสนิท",
    "แฟนฉัน",
    "ลัดดาแลนด์",
    "นาคี 2",
    "โหมโรง",
    "สุริโยไท",
    "ต้มยำกุ้ง",
    "องค์บาก",
    "ชัตเตอร์ กดติดวิญญาณ",
    "เด็กหอ",
    "บอดี้ศพ 19",
    "แฝด",
    "รถไฟฟ้า..มาหานะเธอ",
    "กวน มึน โฮ",
    "ไอฟาย..แต๊งกิ้ว..เลิฟยู้",
    "พี่มาก..พระโขนง",
    "นางนาก",
    "หอแต๋วแตก",
    "ฟรีแลนซ์..ห้ามป่วย ห้ามพัก ห้ามรักหมอ",
    "รักแห่งสยาม",
    "โคตรเพชฌฆาต แค้นมหากาฬ",
    "วงจรปิด",
    "โหมโรง",
    "เมย์ไหน..ไฟแรงเฟร่อ",
    "วัยรุ่นพันล้าน",
    "ล่า",
    "4 Kings",
    "สตรีเหล็ก",
    "เดอะเมีย",
    "ไทบ้าน เดอะซีรีส์",
    "บุญชู",
    "พันธุ์หมาบ้า",

    // หนังต่างประเทศ
    "Inception",
    "The Godfather",
    "Titanic",
    "Interstellar",
    "The Dark Knight",
    "Forrest Gump",
    "The Matrix",
    "Avengers: Endgame",
    "Parasite",
    "Joker",
    "Pulp Fiction",
    "Fight Club",
    "The Shawshank Redemption",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
    "Harry Potter and the Sorcerer’s Stone",
    "Spider-Man: No Way Home",
    "Avatar",
    "The Lion King",
    "Gladiator"
  ];

  // สุ่ม index
  const randomIndex = Math.floor(Math.random() * movies.length);

  // ส่งค่ากลับเป็น JSON
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "หนังแนะนำวันนี้คือ:",
      movie: movies[randomIndex],
    }),
  };
};
