# MERN चॅट प्रोजेक्ट (MERN-chat)

## प्रकल्पाचे वर्णन

हे एक **MERN स्टॅक** (MongoDB, Express, React, Node.js) वर आधारित चॅट अॅप्लिकेशन आहे।  
या प्रोजेक्टमध्ये रिअल-टाइम चॅटिंग, वापरकर्ता प्रमाणीकरण (Authentication) आणि आधुनिक UI समाविष्ट आहे.

---

## प्रकल्पाची रचना

```
.
├── frontend/       # React फ्रंटएंड
├── backend/        # Node.js + Express बॅकएंड
├── package.json    # प्रकल्पाच्या अवलंबित्वा (dependencies)
└── README.md       # हे दस्तऐवज
```

---

## आवश्यकता

- [Node.js](https://nodejs.org/) (आवृत्ती 18 किंवा त्यावरील)
- [MongoDB](https://www.mongodb.com/) (स्थानिक किंवा Atlas)
- npm किंवा yarn

---

## स्थापना आणि सुरुवात

1. रिपो क्लोन करा:
   ```bash
   git clone https://github.com/krishna2700/agent-trial.git
   cd agent-trial
   ```

2. अवलंबित्वे स्थापित करा:
   ```bash
   npm install
   ```

3. `.env` फाईल तयार करा आणि MongoDB URI टाका:
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
cd frontend
npm start
```

---

## मुख्य वैशिष्ट्ये

- रिअल-टाइम चॅट (Socket.io)
- वापरकर्ता नोंदणी आणि लॉगिन (JWT प्रमाणीकरण)
- एक-ते-एक आणि गट चॅट
- आधुनिक आणि प्रतिसादात्मक (Responsive) UI
- चॅट हटवण्याचे (Delete) बटण

---

## तंत्रज्ञान स्टॅक

| विभाग       | तंत्रज्ञान                              |
|------------|----------------------------------------|
| फ्रंटएंड    | React.js, Tailwind CSS, Socket.io-client |
| बॅकएंड     | Node.js, Express.js, Socket.io          |
| डेटाबेस     | MongoDB, Mongoose                       |
| प्रमाणीकरण  | JSON Web Token (JWT), bcrypt            |

---

## API एंडपॉइंट्स

| पद्धत  | एंडपॉइंट              | वर्णन                          |
|--------|----------------------|-------------------------------|
| POST   | /api/auth/register   | नवीन वापरकर्ता तयार करा        |
| POST   | /api/auth/login      | लॉगिन करा                      |
| GET    | /api/messages        | सर्व संदेश मिळवा               |
| POST   | /api/messages        | नवीन संदेश पाठवा               |
| DELETE | /api/messages/:id    | संदेश हटवा                     |

---

## योगदान कसे करावे

1. रिपो **Fork** करा.
2. नवीन **Branch** तयार करा:
   ```bash
   git checkout -b feature/नवीन-सुविधा
   ```
3. बदल **Commit** करा:
   ```bash
   git commit -m "feat: नवीन सुविधा जोडली"
   ```
4. Branch **Push** करा:
   ```bash
   git push origin feature/नवीन-सुविधा
   ```
5. **Pull Request** उघडा.

---

## परवाना (License)

हा प्रकल्प [MIT License](LICENSE) अंतर्गत आहे.

---

> निर्मिती: krishna2700 द्वारे
