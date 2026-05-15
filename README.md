# MERN फुलस्टॅक चॅट अॅप्लिकेशन

> **krishna2700** यांनी तयार केलेले रिअल-टाइम चॅट अॅप्लिकेशन

---

## 📋 प्रकल्पाचे वर्णन

हे एक **MERN स्टॅक** (MongoDB, Express.js, React, Node.js) वर आधारित फुलस्टॅक चॅट अॅप्लिकेशन आहे. या अॅप्लिकेशनमध्ये रिअल-टाइम संदेश पाठवणे, वापरकर्ता नोंदणी व लॉगिन, आणि आधुनिक UI यांचा समावेश आहे. फ्रंटएंडसाठी React (Vite), Chakra UI, Tailwind CSS आणि Socket.io-client वापरले आहे.

---

## 🗂️ प्रकल्पाची रचना

```
.
├── frontend-chat/          # React फ्रंटएंड (Vite + Chakra UI + Tailwind)
│   ├── src/
│   │   ├── App.jsx         # मुख्य अॅप घटक
│   │   ├── main.jsx        # प्रवेश बिंदू
│   │   └── index.css       # जागतिक शैली
│   ├── public/             # स्थिर फाइल्स
│   ├── package.json        # फ्रंटएंड अवलंबित्वे
│   └── vite.config.js      # Vite कॉन्फिगरेशन
├── backend/                # Node.js + Express बॅकएंड (वेगळ्या रेपोत)
├── .gitignore
└── README.md               # हा दस्तऐवज
```

---

## ⚙️ आवश्यकता

खालील सॉफ्टवेअर आपल्या संगणकावर आधीच स्थापित असणे आवश्यक आहे:

| साधन | आवृत्ती |
|------|---------|
| [Node.js](https://nodejs.org/) | v18 किंवा त्याहून अधिक |
| [MongoDB](https://www.mongodb.com/) | स्थानिक किंवा Atlas |
| npm | v9 किंवा त्याहून अधिक |

---

## 🚀 स्थापना आणि सुरुवात

### १. रेपो क्लोन करा

```bash
git clone https://github.com/krishna2700/fullstack-chat-app.git
cd fullstack-chat-app
```

### २. फ्रंटएंड चालवा

```bash
cd frontend-chat
npm install
npm run dev
```

फ्रंटएंड `http://localhost:5173` वर उपलब्ध होईल.

### ३. बॅकएंड चालवा

```bash
cd backend
npm install
npm start
```

बॅकएंड सर्व्हर `http://localhost:5000` वर चालेल.

### ४. `.env` फाइल तयार करा

बॅकएंड फोल्डरमध्ये `.env` नावाची फाइल तयार करा आणि खालील माहिती भरा:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ✨ मुख्य वैशिष्ट्ये

- **रिअल-टाइम चॅट** — Socket.io वापरून तात्काळ संदेश देवाणघेवाण
- **वापरकर्ता नोंदणी आणि लॉगिन** — JWT आधारित सुरक्षित प्रमाणीकरण
- **एक-ते-एक चॅट** — खाजगी संदेश सुविधा
- **ग्रुप चॅट** — एकापेक्षा जास्त वापरकर्त्यांसोबत गटात संभाषण
- **आधुनिक UI** — Chakra UI आणि Tailwind CSS सह सुंदर व प्रतिसादात्मक इंटरफेस
- **Framer Motion अॅनिमेशन** — सुलभ आणि आकर्षक संवाद प्रभाव

---

## 🛠️ तंत्रज्ञान स्टॅक

### फ्रंटएंड
| तंत्रज्ञान | उपयोग |
|-----------|-------|
| React 18 | UI फ्रेमवर्क |
| Vite | बिल्ड टूल |
| Chakra UI | घटक लायब्ररी |
| Tailwind CSS | युटिलिटी CSS |
| Socket.io-client | रिअल-टाइम संप्रेषण |
| Axios | HTTP विनंत्या |
| React Router DOM | नेव्हिगेशन |
| Framer Motion | अॅनिमेशन |

### बॅकएंड
| तंत्रज्ञान | उपयोग |
|-----------|-------|
| Node.js | सर्व्हर रनटाइम |
| Express.js | वेब फ्रेमवर्क |
| MongoDB | डेटाबेस |
| Socket.io | रिअल-टाइम इव्हेंट |
| JWT | प्रमाणीकरण |

---

## 🔌 API एंडपॉइंट्स

| पद्धत | मार्ग | वर्णन |
|-------|-------|-------|
| POST | `/api/auth/register` | नवीन वापरकर्ता नोंदणी |
| POST | `/api/auth/login` | वापरकर्ता लॉगिन |
| GET | `/api/messages/:chatId` | चॅटचे सर्व संदेश मिळवा |
| POST | `/api/messages` | नवीन संदेश पाठवा |
| GET | `/api/chats` | सर्व चॅट्स मिळवा |
| POST | `/api/chats` | नवीन चॅट सुरू करा |

---

## 🤝 योगदान कसे करावे

१. रेपो **Fork** करा
२. नवीन **Branch** तयार करा:
   ```bash
   git checkout -b feature/navi-suvidha
   ```
३. बदल **Commit** करा:
   ```bash
   git commit -m "feat: नवीन सुविधा जोडली"
   ```
४. Branch **Push** करा:
   ```bash
   git push origin feature/navi-suvidha
   ```
५. **Pull Request** उघडा

---

## 📄 परवाना (License)

हा प्रकल्प [MIT License](LICENSE) अंतर्गत आहे. म्हणजेच आपण हे मुक्तपणे वापरू, बदलू आणि वितरित करू शकता.

---

## 👤 निर्माता

**krishna2700**
- GitHub: [@krishna2700](https://github.com/krishna2700)

---

> _हे README मराठीत लिहिले आहे. कोणतीही समस्या आढळल्यास Issues विभागात कळवा._
