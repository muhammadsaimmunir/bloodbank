# Blood Bank Management System

A Database Systems (DBS) project developed to manage blood donors, hospitals, patients, blood stock, and blood requests in an organized and efficient way.

## Project Members

- Muhammad Saim Munir
- Uzair Rashid
- Ghulam Abbas

## Project Overview

The Blood Bank Management System is designed to solve the problem of manual blood bank record management. In many hospitals and blood banks, donor records, blood stock, patient requests, and hospital details are handled manually, which can cause delays, data duplication, and difficulty in finding required blood groups during emergencies.

This system provides a centralized database-based solution where users, hospitals, donors, patients, blood inventory, and requests can be managed properly.

## Problem Statement

Managing blood donation and blood request records manually is time-consuming and inefficient. Hospitals may face difficulty in checking blood availability, finding donors, and tracking urgent blood requests. In emergency situations, delays in finding the required blood group can put patients' lives at risk.

Manual record keeping can also result in missing data, duplicate records, inaccurate stock information, and poor communication between hospitals, donors, and patients.

Therefore, there is a need for a computerized Blood Bank Management System that can store, manage, and retrieve blood bank information quickly and accurately.

## Proposed Solution

The proposed solution is a Blood Bank Management System that uses a structured database to manage all blood bank operations. The system allows users to register as donors, hospitals to manage blood stock, and patients or hospitals to create blood requests.

The system stores data in different related tables such as User, Blood, Hospital, Stock, and Request. These tables are connected through primary keys and foreign keys to maintain proper relationships and reduce data redundancy.

The system provides a dashboard, donor management, blood inventory management, patient management, blood request tracking, and a community blood needs feed.

## Objectives

- To maintain a centralized database for blood donors, hospitals, patients, and blood stock.
- To make blood availability checking faster and easier.
- To reduce manual paperwork and data duplication.
- To help hospitals manage blood inventory efficiently.
- To allow users to create and track blood requests.
- To support emergency blood needs through request management.
- To improve communication between donors, hospitals, and patients.

## Database Structure

The Blood Bank Management System uses the following database tables. These tables are designed according to the actual website modules: Donors, Blood Inventory, Patients, Requests, Hospitals, and Blood Needs.

---

## 1. Donor Table

This table stores the information of blood donors.

| Field Name | Description |
|-----------|-------------|
| donor_id | Primary key and unique donor identifier |
| full_name | Donor's full name |
| age | Donor's age |
| blood_group | Donor's blood group such as O+, O-, A+, A-, B+, B-, AB+, AB- |
| phone | Donor's contact number |
| address | Donor's address |
| city | Donor's city |
| last_donation_date | Date of donor's last blood donation |

---

## 2. Hospital Table

This table stores hospital information.

| Field Name | Description |
|-----------|-------------|
| hospital_id | Primary key and unique hospital identifier |
| hospital_name | Name of the hospital |
| city | City where the hospital is located |
| phone | Hospital contact number |

---

## 3. Blood Stock Table

This table stores the available blood inventory records.

| Field Name | Description |
|-----------|-------------|
| stock_id | Primary key and unique stock record ID |
| donor_id | Foreign key linked with Donor table |
| hospital_id | Foreign key linked with Hospital table |
| blood_group | Blood group available in stock |
| quantity | Quantity of blood units available |
| expiry_date | Expiry date of the blood stock |
| stock_status | Stock status such as Available, Low, Critical, or Expired |

---

## 4. Patient Table

This table stores patient information and required blood details.

| Field Name | Description |
|-----------|-------------|
| patient_id | Primary key and unique patient identifier |
| hospital_id | Foreign key linked with Hospital table |
| patient_name | Patient's full name |
| blood_group_required | Blood group required by the patient |
| disease_condition | Patient's disease or medical condition |
| phone | Patient or guardian contact number |
| status | Patient status such as Active, Critical, or Recovered |

---

## 5. Blood Request Table

This table stores blood request records created for patients.

| Field Name | Description |
|-----------|-------------|
| request_id | Primary key and unique request identifier |
| patient_id | Foreign key linked with Patient table |
| hospital_id | Foreign key linked with Hospital table |
| blood_group | Required blood group |
| quantity | Required quantity of blood units |
| request_date | Date when the request was created |
| urgency_level | Request urgency such as Normal, Urgent, or Critical |
| status | Request status such as Pending, Approved, Fulfilled, or Rejected |

---

## 6. Blood Need Table

This table stores emergency and community blood need records.

| Field Name | Description |
|-----------|-------------|
| need_id | Primary key and unique blood need identifier |
| patient_id | Foreign key linked with Patient table |
| hospital_id | Foreign key linked with Hospital table |
| blood_group | Required blood group |
| units_needed | Number of blood units needed |
| city | City where blood is required |
| urgency_level | Urgency level such as Normal, Urgent, or Critical |
| status | Need status such as Open, In Progress, Fulfilled, or Closed |

---

## Database Relationships

| Relationship | Type | Description |
|-------------|------|-------------|
| Donor → Blood Stock | One-to-Many | One donor can donate blood multiple times, creating multiple stock records |
| Hospital → Blood Stock | One-to-Many | One hospital can maintain multiple blood stock records |
| Hospital → Patient | One-to-Many | One hospital can register multiple patients |
| Patient → Blood Request | One-to-Many | One patient can create multiple blood requests |
| Hospital → Blood Request | One-to-Many | One hospital can handle multiple blood requests |
| Patient → Blood Need | One-to-Many | One patient can have multiple emergency blood need posts |
| Hospital → Blood Need | One-to-Many | One hospital can manage multiple blood need records |

---

## Summary

The database is designed to manage donors, hospitals, blood stock, patients, blood requests, and emergency blood needs. Each table has a primary key for unique identification, and foreign keys are used to connect related records. This structure helps reduce data duplication and makes the Blood Bank Management System easier to manage.

## Main Features

### Dashboard

- Shows total donors
- Shows total blood units
- Shows pending requests
- Shows active patients
- Displays blood stock summary
- Tracks recent blood requests

### Donor Management

- Register new blood donors
- Store donor name, age, blood group, contact, address, city, and last donation date
- Search and filter donor records
- View donor eligibility status

### Blood Inventory

- Add blood stock records
- Track blood groups and quantity
- Monitor expiry dates
- Show low stock and critical stock alerts
- Automatic expiry tracking

### Patient Management

- Register new patients
- Track required blood groups
- Manage patient and hospital association
- Monitor patient condition status

### Blood Requests

- Create blood requests
- Set urgency level such as Normal, Urgent, or Critical
- Track request status from creation to fulfillment
- Manage location-based requests

### Community Blood Needs Feed

- View blood needs based on location
- Match donors and patients by location
- Display emergency alerts
- Show real-time blood stock alerts

## Technologies Used

- HTML
- CSS
- JavaScript
- Database System Concepts
- MySQL / SQL Database Design

## Expected Output

The system helps hospitals and users manage blood donation and blood request data efficiently. It improves the speed of finding available blood groups and reduces manual work.

## Conclusion

The Blood Bank Management System is an effective database project that provides a proper solution for managing blood donors, hospitals, patients, blood inventory, and blood requests. It improves accuracy, reduces paperwork, and helps in emergency situations where quick access to blood availability is very important.
