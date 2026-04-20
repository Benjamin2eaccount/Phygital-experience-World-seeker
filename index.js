const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, `challenge-${req.params.id}-${Date.now()}${ext}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB max
});

// Challenges — digital instructions for the physical world
const challenges = [
  {
    id: 1,
    title: "Something Alive",
    description: "Find something in the real world that is alive — a plant, tree, flower, animal, or even moss. Photograph it so that its life force is clearly visible.",
    example: "E.g. a houseplant, a flower in the garden, an insect, or a branch with leaves.",
    keyword: "LIFE",
    emoji: "🌿"
  },
  {
    id: 2,
    title: "Something Wooden",
    description: "Find an object made of wood — something that was once part of a tree but now has a new life as furniture, a tool, or decoration.",
    example: "E.g. a wooden chair, a branch, a pencil, a cutting board, or a wooden frame.",
    keyword: "WOOD",
    emoji: "🪵"
  },
  {
    id: 3,
    title: "Water in the Wild",
    description: "Find water in your surroundings. Still or flowing, in a container or in nature. Photograph it in a creative way.",
    example: "E.g. a glass of water, a pond, a puddle on the street, a tap, or raindrops.",
    keyword: "WATER",
    emoji: "💧"
  },
  {
    id: 4,
    title: "Source of Light",
    description: "Find something that radiates or reflects light. Artificial light or sunlight — take a photo where light plays the leading role.",
    example: "E.g. a lamp, a candle, sunlight through a window, a reflection in glass, or a street light.",
    keyword: "LIGHT",
    emoji: "✨"
  },
  {
    id: 5,
    title: "Food for Thought",
    description: "Find something you can eat or drink — fresh, prepared, or packaged. Frame it beautifully and turn it into a little work of art.",
    example: "E.g. a piece of fruit, a sandwich, a cup of tea, vegetables, or a snack.",
    keyword: "FOOD",
    emoji: "🍎"
  },
  {
    id: 6,
    title: "Motion & Time",
    description: "Find something that moves or tracks time. It could be a clock, something in the wind, a wheel, or even a shadow shifting across a surface.",
    example: "E.g. a clock, a fan, leaves in the wind, a bicycle wheel, or an hourglass.",
    keyword: "TIME",
    emoji: "⏰"
  }
];

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(uploadsDir));

// API routes
app.get('/api/challenges', (req, res) => {
  res.json(challenges);
});

app.post('/api/submit/:id', upload.single('photo'), (req, res) => {
  const id = parseInt(req.params.id);
  const currentIndex = challenges.findIndex(c => c.id === id);

  if (currentIndex === -1) {
    return res.status(400).json({ success: false, message: 'Invalid challenge' });
  }

  const isComplete = currentIndex === challenges.length - 1;
  const photoUrl = req.file ? `/uploads/${req.file.filename}` : null;

  res.json({
    success: true,
    photoUrl,
    isComplete,
    completedChallengeId: id
  });
});

app.listen(PORT, () => {
  console.log(`\n🌿 WorldSeeker running at http://localhost:${PORT}\n`);
});
