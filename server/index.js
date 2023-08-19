const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');



let corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect('mongodb+srv://npmrundev:npmrundev@npmrundevdevsprints.a6okfhz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Create a schema for the user
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Create a schema for the post
const postSchema = new mongoose.Schema({
  author_name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  caption: { type: String, required: true },
  tags: { type: [String], required: true },
  location: { type: String },
  addfriend: { type: Boolean, default: false },
});

const Post = mongoose.model('Post', postSchema);

app.use(express.json());

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid Email or Password' });
//     }

//     // Compare the provided password with the stored password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid Email or Password' });
//     }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


const secretKey = '6-PdfLOH5ghjcp7AbhVTO-Drq7xxrsLNs6oSt95jdpY'


// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid Email or Password' });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid Email or Password' });
    }

    // If the user's credentials are valid, create and send a JWT token
    ; // Replace with your secret key
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// Middleware to protect the protected-route
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

app.get('/protected-route', authenticateToken, async (req, res) => {
  try {
    // Replace this with your actual logic for protected route
    const posts = await Post.find({ userId: req.user.userId });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




app.post('/addpost', async (req, res) => {
  try {
    const { author_name, imageUrl, caption, tags, location, addfriend } = req.body;

    // Create a new post
    const newPost = new Post({
      author_name,
      imageUrl,
      caption,
      tags,
      location,
      addfriend
    });

    // Save the post to the database
    await newPost.save();

    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/profile/:username', (req, res) => {
  try {
    const username = req.params.username;

    // Example JSON dummy data for six sets
    const setsOfData = [
      {
        "setNumber": 1,
        "profileImage": "http://localhost:3000/images/set1/post1.jpg",
        "text": "Enjoying a beautiful day at the beach!",
        "likes": 123,
        "comments": [
          "Looks amazing!",
          "Wish I was there!",
          "Great photo!"
        ]
      },
      {
        "setNumber": 1,
        "profileImage": "http://localhost:3000/images/set1/post2.jpg",
        "text": "Recycling gadgets!",
        "likes": 123,
        "comments": [
          "Good work!",
          "Wish I was there!",
          "Great photo!"
        ]
      },
      {
        "setNumber": 1,
        "profileImage": "http://localhost:3000/images/set1/post3.jpg",
        "text": "Enjoying a beautiful day at the beach!",
        "likes": 123,
        "comments": [
          "Good work!!",
          "Wish I was there!",
          "Great photo!"
        ]
      },
      {
        "setNumber": 1,
        "profileImage": "http://localhost:3000/images/set1/post4.jpg",
        "text": "Enjoying a beautiful day at the beach!",
        "likes": 123,
        "comments": [
          "Looks amazing!",
          "Good work!",
          "Great photo!"
        ]
      },
      {
        "setNumber": 1,
        "profileImage": "http://localhost:3000/images/set1/post5.jpg",
        "text": "Enjoying a beautiful day at the beach!",
        "likes": 123,
        "comments": [
          "Looks amazing!",
          "Good work!",
          "Great photo!"
        ]
      },
      {
        "setNumber": 1,
        "profileImage": "http://localhost:3000/images/set1/post6.jpg",
        "text": "Enjoying a beautiful day at the beach!",
        "likes": 123,
        "comments": [
          "Looks amazing!",
          "Good work!",
          "Great photo!"
        ]
      },

    ];

    res.json(setsOfData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching profile data.' });
  }
});

// Define route to fetch posts that match specific criteria
app.get('/api/posts', async (req, res) => {
  const criteria = req.query;

  try {
    const posts = await Post.find(criteria);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
