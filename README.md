# server
## Step 1 Setup server

``` bash
npm init -y
npm install express
```

## Step 2 Basic Middleware
```
npm install cors
npm install morgan //ดูว่ามีอะไเข้ามาจาก request
npm install nodemon // restart server เหมืนกับใช้ node --watch [files]
```
file server.js
```
app.use(cors()) // Allow cross domains
app.use(morgan('dev')) // morgan for manage error , show log
app.use(express.json()) // for read body
```

## Step 3 create route

## Step 4 create controllers

## Step 5 create controllers












## Git 
```
git add . 
git commeit -m "[your comment]"
git push 
```