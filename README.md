# MERN चैट प्रोजेक्ट (MERN-chat)

## विवरण

यह एक **MERN स्टैक** (MongoDB, Express, React, Node.js) पर आधारित चैट एप्लिकेशन है।  
इस प्रोजेक्ट में रियल-टाइम चैटिंग, यूज़र ऑथेंटिकेशन और एक आधुनिक UI शामिल है।

---

## प्रोजेक्ट की संरचना

```
.
├── frontend/       # React फ्रंटएंड
├── backend/        # Node.js + Express बैकएंड
├── package.json    # प्रोजेक्ट की निर्भरताएं
└── README.md       # यह दस्तावेज़ फ़ाइल
```

---

## आवश्यकताएं

- [Node.js](https://nodejs.org/) (संस्करण 18 या उससे ऊपर)
- [MongoDB](https://www.mongodb.com/) (लोकल या Atlas)
- npm या yarn

---

## इंस्टॉलेशन

1. रिपो क्लोन करें:
   ```bash
   git clone https://github.com/krishna2700/dummy-repo.git
   cd dummy-repo
   ```

2. निर्भरताएं इंस्टॉल करें:
   ```bash
   npm install
   ```

3.  फ़ाइल बनाएं और MongoDB URI डालें:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

---

## उपयोग

### बैकएंड सर्वर चलाएं

```bash
cd backend
npm start
```

### फ्रंटएंड चलाएं

```bash
cd frontend
npm start
```

---

## मुख्य विशेषताएं

- रियल-टाइम चैट (Socket.io)
- यूज़र रजिस्ट्रेशन और लॉगिन (JWT ऑथेंटिकेशन)
- एक-से-एक और ग्रुप चैट
- आधुनिक और रेस्पॉन्सिव UI

---

## API एंडपॉइंट्स

| मेथड   | एंडपॉइंट              | विवरण                       |
|--------|----------------------|-----------------------------|
| POST   |  | नया यूज़र बनाएं             |
| POST   |     | लॉगिन करें                  |
| GET    |       | सभी संदेश प्राप्त करें      |
| POST   |       | नया संदेश भेजें             |

---

## योगदान

1. रिपो को **Fork** करें।
2. एक नई **Branch** बनाएं: 
3. अपने बदलाव **Commit** करें: On branch feature/nayi-suvidha
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	chatapp/

nothing added to commit but untracked files present (use "git add" to track)
4. Branch को **Push** करें: 
5. एक **Pull Request** खोलें।

---

## लाइसेंस

यह प्रोजेक्ट [MIT License](LICENSE) के अंतर्गत है।

---

> बनाया गया: krishna2700 द्वारा
