# Pakistan Blood Bank - Setup & Quick Start Guide

## Quick Setup (5 Minutes)

### Step 1: Add Your Logo
1. Prepare your logo image as `logo.png` (PNG format recommended)
2. Place it in the root directory: `e:\BloodBank\logo.png`
3. The logo will automatically appear on all pages

### Step 2: Start the Application

**Option A - Via Splash Screen (Recommended):**
```
Open: splash.html
```
- Professional animated splash screen will display
- Auto-redirects to dashboard after 4 seconds
- Click anywhere to skip splash screen

**Option B - Direct to Dashboard:**
```
Open: index.html
```
Bypasses splash screen and goes directly to main dashboard

### Step 3: Navigate the System

Use the **left sidebar** to navigate between pages:
- **Dashboard** - View statistics and overview
- **Donors** - Register and manage donors
- **Blood Inventory** - Track blood stock
- **Patients** - Register patients
- **Requests** - Create blood requests
- **Blood Needs** - View community blood needs by location

## Mobile Usage

### On Mobile Device

1. **Access the site** - Open any HTML file on your phone/tablet
2. **Click hamburger menu** (☰) in the top-left corner
3. **Navigate pages** - Select from the slide-out menu
4. **Close menu** - Click overlay or navigate to another page

### Mobile Features Included

✅ Responsive design for all screen sizes  
✅ Touch-friendly buttons  
✅ Optimized forms for mobile input  
✅ Left-side hamburger navigation  
✅ Swipe-friendly interface  
✅ Mobile-optimized tables  

## Main Pages Overview

### 1. Dashboard (`index.html`)
- View key statistics
- Blood stock summary with progress bars
- Recent requests status
- Quick overview of system health

### 2. Donors (`donors.html`)
- **Register New Donor**
  - Fill in donor details
  - Select blood group
  - Provide contact information
  - Enter last donation date
- **View Donors**
  - Search by name, city, or blood group
  - See donor status
  - Edit or delete records

### 3. Blood Inventory (`blood-inventory.html`)
- **Add Stock**
  - Select blood group
  - Enter quantity in units
  - Set expiry date
  - Specify hospital/center
- **Monitor Stock**
  - View current levels by blood group
  - Check expiry dates
  - Get alerts for low stock
  - Track days remaining

### 4. Patients (`patients.html`)
- **Register Patient**
  - Enter patient information
  - Specify blood group needed
  - Select hospital
  - Enter medical condition
- **Track Patients**
  - View all registered patients
  - Monitor blood requests
  - Update status

### 5. Requests (`requests.html`)
- **Create Request**
  - Specify hospital name
  - Select blood group needed
  - Enter units needed
  - Set urgency level (Normal/Urgent/Critical)
- **Track Requests**
  - View all pending requests
  - Monitor status
  - See urgency indicators

### 6. Blood Needs (`blood-needs.html`)
- **Community Feed**
  - View blood needs by location
  - See patient details and hospital info
  - Check urgency levels
  - View large blood group display
- **Emergency Alerts**
  - Critical blood group alerts
  - Low stock notifications
  - System-wide alerts

## Features by Page

### Universal Features (All Pages)
- ✅ **Hamburger Menu** - Mobile navigation
- ✅ **Search** - Find records quickly
- ✅ **Responsive** - Works on all devices
- ✅ **Notifications** - Toast alerts for actions
- ✅ **Validation** - Form validation with error messages

### Dashboard
- 📊 Statistics cards
- 📈 Blood stock progress bars
- 📋 Recent requests list
- 🔄 Real-time data overview

### Donors
- ➕ Add new donors
- 🔍 Search donors
- ✏️ Edit donor details
- 🗑️ Delete records
- 💾 Donor eligibility status

### Blood Inventory
- ➕ Add stock records
- 📊 Stock level monitoring
- ⏰ Expiry date tracking
- ⚠️ Low stock alerts
- 🏥 Hospital/center management

### Patients
- ➕ Register new patients
- 🏥 Hospital association
- 💉 Blood group requirements
- 📋 Medical condition tracking
- 📞 Contact information

### Requests
- ➕ Create urgent requests
- 📍 Location management
- 🚨 Urgency level setting
- 📊 Request status tracking
- 🔔 Notification system

### Blood Needs
- 🌍 Location-based feed
- 🔴 Blood group display
- 🚨 Urgency indicators
- 📍 Hospital locations
- ⏰ Request timestamps

## Data Management

### Adding Records

1. **Navigate to the page** where you want to add data
2. **Fill in the form** with required information
3. **Click Submit button** to add the record
4. **Confirm** with success notification
5. **View in table** immediately below the form

### Searching Records

1. **Locate search box** at the top of the table
2. **Type search term** (name, city, blood group, etc.)
3. **Results filter automatically** as you type
4. **Clear search** to see all records again

### Editing Records

1. **Click pencil icon (✏️)** next to a record
2. **Edit feature coming soon** - shown in notification
3. Backend integration needed for full edit functionality

### Deleting Records

1. **Click trash icon (🗑️)** next to a record
2. **Record deletes immediately** with animation
3. **Success message** confirms deletion
4. **Refresh page** to reset demo data

## Status Badges

### Status Types
- 🟢 **Approved** - Verified and ready
- 🟠 **Pending** - Awaiting review
- 🔴 **Urgent** - Needs immediate attention
- 🟡 **Low Stock** - Running low on units
- ✅ **Completed** - Task finished
- ❌ **Ineligible** - Cannot donate currently

## Blood Group Reference

### Positive Blood Groups
- **O+** - Universal donor
- **A+** - Common, compatible with A and AB
- **B+** - Common in Asia
- **AB+** - Universal recipient

### Negative Blood Groups
- **O-** - Universal donor (rare)
- **A-** - Rh negative
- **B-** - Rh negative
- **AB-** - Rh negative (rarest)

## Important Notes

### For Production Use
- ⚠️ This demo uses localStorage and client-side storage
- 📦 Requires backend database integration for production
- 🔒 Needs authentication system implementation
- 🔐 Security measures required for real deployment

### Browser Requirements
- ✅ Modern browser (Chrome, Firefox, Safari, Edge)
- ✅ JavaScript enabled
- ✅ CSS3 support
- ✅ localStorage support

### Performance Tips
- 🚀 Clear old data periodically
- 🖼️ Optimize logo.png size
- 📱 Test on actual mobile devices
- ⚡ Use modern browser versions

## Troubleshooting

### Hamburger Menu Not Showing?
- Resize browser to mobile width (< 768px)
- Menu appears automatically on small screens

### Search Not Working?
- Ensure search text matches data in table
- Search is case-insensitive
- Try searching by different fields

### Form Not Submitting?
- Check for red-bordered required fields
- Ensure valid data format
- Look for error notifications

### Logo Not Showing?
- Verify logo.png exists in root directory
- Check image format (PNG recommended)
- Clear browser cache

## File Locations

```
Root Directory (e:\BloodBank\):
├── logo.png                 (← Add your logo here)
├── index.html              (Dashboard)
├── splash.html             (Welcome screen)
├── donors.html
├── blood-inventory.html
├── patients.html
├── requests.html
├── blood-needs.html
├── css/style.css
├── js/main.js
└── [Documentation files]
```

## Next Steps

### To Deploy Locally
1. Copy all files to a local folder
2. Add logo.png
3. Open index.html or splash.html in browser
4. No server needed for demo

### To Deploy Online
1. Upload files to web hosting
2. Ensure .png files are supported
3. Test responsive design on mobile
4. Consider adding HTTPS

### To Add Backend
1. Set up Node.js/PHP/Python server
2. Create database tables per ER diagram
3. Develop API endpoints (CRUD operations)
4. Replace hardcoded data with API calls
5. Implement user authentication

## Support Resources

### Documentation Files
- **SYSTEM_DOCUMENTATION.md** - Complete system guide
- **SETUP.sh** - Setup scripts (if applicable)
- **UPDATES.md** - Recent updates log
- **README.md** - Project overview

### Features Documentation
- Blood group compatibility
- Database schema
- API endpoints (when implemented)
- Security guidelines

## Tips & Tricks

### Mobile Optimization
- Use mobile device to test
- Test hamburger menu functionality
- Check table responsiveness
- Verify form inputs

### Data Management
- Keep blood group list organized
- Monitor expiry dates regularly
- Update donor information
- Track request status

### Performance
- Use recent browser version
- Clear browser cache if issues
- Check internet speed
- Close unnecessary tabs

---

**Ready to Use!** 🎉

Your Pakistan Blood Bank system is now ready to use. Start by visiting the Dashboard and explore all features.

For questions or support, refer to the SYSTEM_DOCUMENTATION.md file.

**Last Updated**: May 2, 2026
