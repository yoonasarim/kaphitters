# KAP Hitters Team Management Web App

Professional cricket team management system for KAP Hitters with **Supabase cloud database**.

## 🌟 Features

- **Squad Management**: 16-player roster with detailed stats and roles
- **Leadership System**: Captain (red highlight) and Vice Captain (light yellow highlight)
- **Playing XI**: Select your 11-player playing team
- **Officials & Managers**: Track team officials with positions
- **Jersey Management**: Track jersey numbers and assignments
- **Finance System**: Income/expense tracking with collection details
- **Photo Gallery**: Team photos and updates
- **Admin System**: Secure login for data management

## ⚠️ IMPORTANT: Database Setup Required

This app uses **Supabase cloud database only** (no localStorage). You **MUST** configure Supabase before publishing.

## 📋 Setup Instructions

### Step 1: Create Supabase Account (Free)

1. Go to [supabase.com](https://supabase.com)
2. Sign up (free tier is sufficient)
3. Create a new project
4. Wait 2-3 minutes for database setup

### Step 2: Get Your Credentials

1. Go to Project Settings → API
2. Copy **Project URL** (looks like: `https://xxxxx.supabase.co`)
3. Copy **anon public** key (long string - safe to expose)

### Step 3: Configure the App

1. Open `script.js`
2. Go to **lines 15-16**
3. Replace with your credentials:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';  // Replace this
const SUPABASE_KEY = 'your-anon-key-here';                // Replace this
```

### Step 4: Set Up Database Tables

1. Open Supabase SQL Editor
2. Copy and run all SQL scripts from `SUPABASE_SETUP.md`
3. This creates all 10 required tables

### Step 5: Test Locally

```bash
# Open index.html in browser, or use local server:
python -m http.server 8000
# Visit: http://localhost:8000
```

## 🚀 Deploy to GitHub Pages

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it `kaphitters` (or any name)
4. Make it **Public**
5. Don't initialize with README

### 2. Initialize Git and Push Code

```powershell
# Navigate to your project folder
cd c:\Users\hp\Desktop\kapHitters

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: KAP Hitters web app with Supabase"

# Set main branch
git branch -M main

# Connect to GitHub (replace with YOUR username)
git remote add origin https://github.com/YOUR_USERNAME/kaphitters.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from branch**
3. Branch: **main** → folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes
6. Your site is live at: `https://YOUR_USERNAME.github.io/kaphitters`

## 🔐 Security Notes

- ✅ **SAFE to commit**: Supabase anon/public key (designed to be exposed)
- ❌ **NEVER commit**: Supabase service_role key
- 🔒 **Configure RLS**: Set up Row Level Security in Supabase (see `SUPABASE_SETUP.md`)

## 🎯 Default Admin Login

- **Password**: `kaphitters2024`
- **Change this** after first login in the app settings!

## 📁 Project Structure

```
kaphitters/
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic (Supabase-only)
├── styles.css          # Professional styling
├── SUPABASE_SETUP.md   # Database setup SQL scripts
├── DATABASE_STATUS.md  # Technical implementation details
├── README.md           # This file
└── .gitignore         # Git ignore rules
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+ async/await)
- **Database**: Supabase (PostgreSQL cloud database)
- **Hosting**: GitHub Pages (free static hosting)
- **Architecture**: Fully serverless, no backend required

## 📱 Responsive Design

- Works on desktop, tablet, and mobile
- Touch-friendly interface
- Modern gradient designs with team colors

## 🆘 Troubleshooting

### "Database not configured!" alert

- You haven't added Supabase credentials yet
- Follow **Step 3** above to configure `script.js`

### "Failed to retrieve data from database"

- Check Supabase credentials are correct
- Ensure you ran the SQL scripts from `SUPABASE_SETUP.md`
- Check Supabase dashboard for table creation

### Data not showing after adding

- Open browser console (F12) to see errors
- Verify tables exist in Supabase dashboard
- Check Row Level Security (RLS) policies

## 📖 Additional Documentation

- **SUPABASE_SETUP.md** - Complete database setup guide with SQL scripts
- **DATABASE_STATUS.md** - Technical implementation details

## 🤝 Support

For issues:
1. Check browser console (F12) for error messages
2. Verify Supabase credentials in `script.js`
3. Ensure all SQL tables are created
4. Check Supabase project is active

## 📄 License

Free to use for team management purposes.

---

**Made for KAP Hitters Cricket Team** 🏏

**REMEMBER**: Add your Supabase credentials before publishing!
