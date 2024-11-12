const express = require('express')
const PORT = 4000
const cors = require('cors')
require('./db/config')
const multer = require('multer'); // Import multer
const Admin = require('./db/Admin/Admin')
const users = require('./db/Users/userschema')
const seller = require('./db/Seller/Sellers')
const items = require('./db/Seller/Additem')
const myorders = require('./db/Users/myorders')
const WishlistItem = require('./db/Users/Wishlist')     

const app = express()

app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}));

const storage = multer.diskStorage({
    destination: 'uploads', // The directory where uploaded files will be stored
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname); // Set the file name
    },
});

const upload = multer({ storage });
app.use('/uploads', express.static('uploads'));


                                          //  Admin  //
// Login
app.post('/alogin', (req, resp) => {  
    const { email, password } = req.body;   
    Admin.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id:user.id,name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
  })
  
  // Register Api
  app.post('/asignup', (req, resp) => {
    const { name, email, password } = req.body;
    Admin.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                Admin.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
  })

app.get('/users',(req,res)=>{
    users.find()
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch(() => {
        res.sendStatus(500)
    })
})
app.delete('/userdelete/:id',(req,res)=>{
    const { id }=req.params
     users.findByIdAndDelete(id)
     .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
    });
  })
  app.delete('/userorderdelete/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await myorders.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.delete('/useritemdelete/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await items.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/sellers',(req,res)=>{
    seller.find()
    .then((seller)=>{
        res.status(200).json(seller)
    })
    .catch(() => {
        res.sendStatus(500)
    })
})

app.delete('/sellerdelete/:id',(req,res)=>{
    const { id }=req.params
     seller.findByIdAndDelete(id)
     .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
    });
  })
    app.get('/orders', (req, res) => {
    myorders.find()
        .then((orders) => {
            res.status(200).json(orders)
        })
        .catch(() => {
            res.sendStatus(500)
        })
});


                                                    // Seller //
//  login api
app.post('/slogin', (req, resp) => {
    const { email, password } = req.body;
    seller.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

// Register Api
app.post('/ssignup', (req, resp) => {
    const { name, email, password } = req.body;
    seller.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                seller.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
})
// addBook
app.post('/items', upload.single('itemImage'), async (req, res) => {
    const { title, author, genre, description, price, userId, userName } = req.body;
    const itemImage = req.file.path; // The path to the uploaded image

    try {
        const item = new items({ itemImage, title, author, genre, description, price, userId, userName });
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create item' });
    }
});
//getbooks
app.get('/getitem/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await items.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});
//delete book
app.delete('/itemdelete/:id', (req, res) => {
    const { id } = req.params;
    items.findByIdAndDelete(id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
})
//getorders
app.get('/getsellerorders/:userId', async (req, res) => {
    const sellerId = req.params.userId;
    try {
        const tasks = await myorders.find({ sellerId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});



                                            // users  //
// login
app.post('/login', (req, res) => {
const { email, password } = req.body;
    users.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                }
                else {
                    res.json("Invalid Password")
                }
            }
            else {
                res.json("User not found")
            }
        })
})

app.post('/signup', (req, resp) => {
    const { name, email, password } = req.body;
    users.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                users.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
})

app.get('/item', async (req, res) => {
    try {
        const images = await items.find();
        res.json(images);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
// Single item
app.get('/item/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const item = await items.findById({ _id: id });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/userorder', async (req, res) => {
    const { flatno, city, state, pincode, totalamount, seller, sellerId, BookingDate, description, Delivery, userId, userName: String, booktitle, bookauthor, bookgenre, itemImage } = req.body;

    try {
        const order = new myorders({ flatno, city, state, pincode, totalamount, seller, sellerId, BookingDate, description, userId, Delivery, userName: String, booktitle, bookauthor, bookgenre, itemImage });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create policy' });
    }
});

app.get('/getorders/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await myorders.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.get('/wishlist', async (req, res) => {
    try {
      const wishlistItems = await WishlistItem.find();
      res.json(wishlistItems);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  app.get('/wishlist/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const tasks = await WishlistItem.find({ userId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.post('/wishlist/add', async (req, res) => {
    const { itemId, title,itemImage,userId,userName } = req.body;

    try {
        // Check if the item is already in the wishlist
    
        const existingItem = await WishlistItem.findOne({ itemId });
        if (existingItem) {
            return res.status(400).json({ msg: 'Item already in wishlist' });
        }
        // Create a new wishlist item
        const newItem = new WishlistItem({ itemId,title,itemImage,userId,userName});
        await newItem.save();

        res.json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

  app.post('/wishlist/remove', async (req, res) => {
    const { itemId } = req.body;
  
    try {
      // Find and remove the item from the wishlist
      await WishlistItem.findOneAndDelete({ itemId });
  
      res.json({ msg: 'Item removed from wishlist' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });





app.listen(PORT, () => {
    console.log(`server is running on  ${PORT}`)
})  