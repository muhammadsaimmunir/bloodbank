# Blood Bank - Emergency Response System

**Version:** 1.0  
**Status:** Complete & Mobile-Friendly   

## Overview

Blood Bank is a modern emergency response system designed to connect blood donors with hospitals and patients in critical need. The system provides an efficient platform to manage blood inventory, match donors based on location and blood group, and handle emergency blood requests.

## Problem Statement

In emergency situations, patients and hospitals often face difficulty in finding suitable blood donors quickly. There is no efficient system to connect blood donors with hospitals based on location and blood group. This leads to delays, unavailability of blood, and sometimes life-threatening situations.

## Solution

Pakistan Blood Bank solves this problem by:
- Connecting donors and hospitals on a single platform
- Allowing hospitals to create blood requests
- Automatically showing matching donors from the same city with required blood group
- Making the process faster and more efficient
- Providing location-based blood need feeds
- Managing blood inventory with expiry tracking
- Handling multiple blood groups and emergency requests

## ER Database Structure

The system uses the following database tables:

### 1. User Table
- **user_id** (PK): Unique user identifier
- **blood_id** (FK): Blood group identifier
- **first_name**: User's first name
- **last_name**: User's last name
- **username**: Login username
- **password**: Encrypted password
- **mobile**: Contact number
- **datetime**: Registration timestamp
- **status**: Active/Inactive status

### 2. Blood Table
- **blood_id** (PK): Blood group ID
- **blood**: Blood group type (O+, O-, A+, A-, B+, B-, AB+, AB-)
- **detail**: Blood group details/description
- **status**: Availability status

### 3. Hospital Table
- **hospital_id** (PK): Hospital identifier
- **hospital_name**: Name of hospital
- **username**: Hospital login
- **password**: Encrypted password
- **mobile**: Hospital contact
- **datetime**: Registration timestamp
- **status**: Active/Inactive

### 4. Stock Table
- **stock_id** (PK): Stock record ID
- **hospital_id** (FK): Associated hospital
- **blood_id** (FK): Blood group
- **volume**: Quantity in units
- **status**: Availability status

### 5. Request Table
- **request_id** (PK): Request identifier
- **user_id** (FK): Requesting user
- **hospital_id** (FK): Hospital making request
- **blood_id** (FK): Blood group needed
- **volume**: Units needed
- **datetime**: Request timestamp
- **status**: Pending/Approved/Fulfilled

## Features

### ✅ Dashboard
- Overview of total donors, blood units, pending requests, and active patients
- Real-time blood stock summary with visual progress bars
- Recent requests status tracking

### ✅ Donor Management
- Register new blood donors
- Track donor information (name, age, blood group, contact, address, city, last donation date)
- Search and filter donors
- View donor eligibility status

### ✅ Blood Inventory
- Add blood stock records
- Track blood groups with quantity
- Monitor expiry dates and days remaining
- Stock level alerts (low, critical)
- Automatic expiry tracking

### ✅ Patient Management
- Register new patients
- Track blood requirements
- Manage patient-hospital associations
- Monitor patient condition status

### ✅ Blood Requests
- Create urgent blood requests
- Set urgency levels (Normal, Urgent, Critical)
- Track request status from creation to fulfillment
- Location-based request management

### ✅ Community Blood Needs Feed
- View all blood needs based on location
- Location-based donor-patient matching
- Emergency alert system
- Real-time blood stock alerts

### ✅ Mobile-Friendly Design
- Responsive layout for all devices
- Left-side hamburger navigation menu for mobile
- Touch-friendly interface
- Optimized for small screens
- Full functionality on mobile devices

### ✅ Splash Screen
- Professional animated splash screen
- Pakistani theme with national branding
- Logo support (use logo.png)
- Auto-redirect to main application

## Pages & URLs

| Page | URL | Description |
|------|-----|-------------|
| Splash Screen | `splash.html` | Landing/welcome page with animated intro |
| Dashboard | `index.html` | Main dashboard with statistics and overview |
| Donors | `donors.html` | Blood donor registration and management |
| Blood Inventory | `blood-inventory.html` | Blood stock tracking and management |
| Patients | `patients.html` | Patient registration and management |
| Requests | `requests.html` | Blood request creation and tracking |
| Blood Needs | `blood-needs.html` | Community feed showing blood needs by location |

## How to Use

### Getting Started

1. **Set Logo**: Place your `logo.png` file in the root directory
2. **Start Application**: Open `splash.html` in your browser (will auto-redirect after 4 seconds)
3. Or directly access: `index.html` to go straight to dashboard

### For Donors

1. Go to **Donors** page
2. Fill in the registration form:
   - Full name
   - Age (18-65 years)
   - Blood group
   - Contact number and city
   - Last donation date
   - Address
3. Click **Register Donor**
4. View all registered donors in the list
5. Search donors by name, city, or blood group

### For Hospitals

1. Go to **Patients** page to register patients needing blood
2. Go to **Requests** page to create blood requests
3. Specify:
   - Hospital name
   - Blood group needed
   - Number of units
   - Urgency level (Normal/Urgent/Critical)
   - City and contact information
4. View all active requests and their status

### Managing Blood Inventory

1. Go to **Blood Inventory** page
2. Add new blood stock by:
   - Selecting blood group
   - Entering quantity (units)
   - Providing collection and expiry dates
   - Specifying donor ID and hospital/center
3. Monitor current stock levels
4. Check expiry dates and days remaining
5. Track stock status (Available/Low Stock/Expired)

### Finding Blood Needs

1. Go to **Blood Needs** page
2. View all blood requirements by location
3. See patient details, hospital name, and required units
4. Check urgency level (Critical/Urgent/Normal)
5. See emergency alerts for critically low blood groups

## Mobile Features

### Hamburger Menu
- Click the **☰** menu button in header
- Slide-out left sidebar navigation
- Touch-friendly navigation links
- Auto-close when navigating

### Responsive Design
- Automatic layout adjustment for mobile screens
- Touch-optimized buttons and inputs
- Readable text sizing
- Optimized table views for small screens
- Full-width forms on mobile

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome 6.4.0
- **Styling**: Modern CSS with CSS Variables
- **Responsive**: Mobile-first design approach
- **Database Ready**: Designed for SQL/NoSQL integration

## Color Scheme

- **Primary Red**: #dc2626 (Blood theme)
- **Dark Red**: #991b1b (Accents)
- **Success Green**: #10b981
- **Warning Yellow**: #f59e0b
- **Info Blue**: #3b82f6

## File Structure

```
e:\BloodBank\
├── index.html                 # Main dashboard
├── splash.html               # Splash screen
├── donors.html               # Donor management
├── blood-inventory.html      # Blood stock tracking
├── patients.html             # Patient management
├── requests.html             # Blood requests
├── blood-needs.html          # Community needs feed
├── logo.png                  # (Add your logo here)
├── css/
│   └── style.css            # Complete styling
├── js/
│   └── main.js              # JavaScript functionality
├── README.md                # System documentation
└── [Other files...]
```

## Key Functions

### Mobile Menu
```javascript
initializeMobileMenu()  // Initialize hamburger menu
```

### Form Validation
```javascript
validateForm(form)      // Validate required fields
```

### Search
```javascript
initializeSearch()      // Enable search functionality
```

### Notifications
```javascript
showToast(message, type, duration)  // Show notifications
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Coming Soon

- Backend database integration (Node.js/Express or PHP)
- User authentication system
- Real-time notification system
- SMS/Email alerts
- Admin reporting and analytics
- Donor verification system
- Certificate generation
- API for third-party integration

## Support & Customization

To customize the system:

1. **Update Title**: Change "Pakistan Blood Bank" in HTML files
2. **Change Colors**: Modify CSS variables in `css/style.css`
3. **Add Your Logo**: Replace `logo.png` with your logo
4. **Customize Data**: Modify sample data in table bodies

## Database Integration Guide

When ready to integrate with a backend:

1. Create database with tables as per ER diagram
2. Develop API endpoints for CRUD operations
3. Replace inline data with API calls
4. Implement user authentication
5. Add data validation on backend

## Deployment

For production deployment:

1. Minify CSS and JavaScript files
2. Optimize images (logo.png)
3. Enable GZIP compression
4. Set appropriate caching headers
5. Use HTTPS
6. Implement security headers

## License

This is a community project for Pakistan Emergency Response System.

## Contact & Contribution

For improvements and contributions, please contact the development team.

---

**Last Updated**: May 2, 2026  
**Version**: 1.0 - Initial Release
