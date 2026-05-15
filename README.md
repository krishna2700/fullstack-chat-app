# MERN चॅट प्रोजेक्ट (MERN-chat)

## वर्णन

हे एक **MERN स्टॅक** (MongoDB, Express, React, Node.js) वर आधारित चॅट अॅप्लिकेशन आहे।  
या प्रोजेक्टमध्ये रिअल-टाइम चॅटिंग, यूज़र ऑथेंटिकेशन आणि एक आधुनिक UI समाविष्ट आहे।

---

## प्रोजेक्टची रचना

```
.
├── frontend-chat/   # React फ्रंटएंड (Vite + Chakra UI + Tailwind CSS)
├── backend/         # Node.js + Express बॅकएंड
├── package.json     # प्रोजेक्टच्या अवलंबनता
└── README.md        # हे दस्तऐवज
```

---

## आवश्यकता

- [Node.js](https://nodejs.org/) (आवृत्ती 18 किंवा त्यावरील)
- [MongoDB](https://www.mongodb.com/) (लोकल किंवा Atlas)
- npm किंवा yarn

---

## इन्स्टॉलेशन

1. रिपो क्लोन करा:
   ```bash
   git clone https://github.com/krishna2700/fullstack-chat-app.git
   cd fullstack-chat-app
   ```

2. बॅकएंडच्या अवलंबनता इन्स्टॉल करा:
   ```bash
   cd backend
   npm install
   ```

3. फ्रंटएंडच्या अवलंबनता इन्स्टॉल करा:
   ```bash
   cd ../frontend-chat
   npm install
   ```

4. बॅकएंड फोल्डरमध्ये `.env` फाइल तयार करा आणि खालील माहिती भरा:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

---

## वापर

### बॅकएंड सर्व्हर चालवा

```bash
cd backend
npm start
```

### फ्रंटएंड चालवा

```bash
cd frontend-chat
npm run dev
```

---

## मुख्य वैशिष्ट्ये

- रिअल-टाइम चॅट (Socket.io)
- यूज़र नोंदणी आणि लॉगिन (JWT ऑथेंटिकेशन)
- एक-ते-एक आणि ग्रुप चॅट
- आधुनिक आणि रेस्पॉन्सिव UI (Chakra UI + Tailwind CSS)
- सुरक्षित पासवर्ड साठवणूक (bcryptjs)

---

## तंत्रज्ञान

| भाग         | तंत्रज्ञान                                      |
|-------------|------------------------------------------------|
| फ्रंटएंड    | React 18, Vite, Chakra UI, Tailwind CSS        |
| बॅकएंड      | Node.js, Express.js                            |
| डेटाबेस     | MongoDB, Mongoose                              |
| रिअल-टाइम  | Socket.io                                      |
| ऑथ          | JWT (jsonwebtoken), bcryptjs                   |
| HTTP क्लाइंट | Axios                                         |

---

## API एंडपॉइंट्स

| मेथड  | एंडपॉइंट              | वर्णन                        |
|-------|----------------------|------------------------------|
| POST  | /api/users/register  | नवीन यूज़र तयार करा           |
| POST  | /api/users/login     | लॉगिन करा                    |
| GET   | /api/messages        | सर्व संदेश मिळवा             |
| POST  | /api/messages        | नवीन संदेश पाठवा             |

---

## योगदान

1. रिपो **Fork** करा।
2. नवीन **Branch** तयार करा: `git checkout -b feature/navi-suvidha`
3. बदल **Commit** करा: `git commit -m "नवीन सुविधा जोडली"`
4. Branch **Push** करा: `git push origin feature/navi-suvidha`
5. एक **Pull Request** उघडा।

---

## परवाना

हा प्रोजेक्ट [MIT License](LICENSE) अंतर्गत आहे।

---

> तयार केले: krishna2700 द्वारा
