// ============================================================================
// BLOOD BANK MANAGEMENT SYSTEM - JAVASCRIPT FUNCTIONALITY
// ============================================================================

// ============================================================================
// 0. MOBILE MENU FUNCTIONALITY
// ============================================================================

/**
 * Initialize mobile hamburger menu
 */
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.mobile-overlay');
    const navItems = document.querySelectorAll('.nav-item');

    if (!hamburger) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when overlay is clicked
    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on window resize (if going back to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================================================
// 1. TOAST NOTIFICATION SYSTEM
// ============================================================================

/**
 * Show a toast notification message
 * @param {string} message - The message to display
 * @param {string} type - Type of toast: 'success', 'error', 'info', 'warning'
 * @param {number} duration - Duration in milliseconds (default: 3000)
 */
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: inherit; cursor: pointer; font-size: 1.25rem; margin-left: auto;">×</button>
    `;
    
    // Add styles if not already in CSS (inline for quick implementation)
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.innerHTML = `
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                max-width: 400px;
                padding: 16px 20px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 12px;
                font-weight: 500;
                font-size: 0.95rem;
                animation: slideInRight 0.3s ease;
                z-index: 2000;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }
            
            .toast-success {
                background-color: #dcfce7;
                color: #166534;
                border: 1px solid #86efac;
            }
            
            .toast-error {
                background-color: #fee2e2;
                color: #991b1b;
                border: 1px solid #fca5a5;
            }
            
            .toast-info {
                background-color: #dbeafe;
                color: #1e40af;
                border: 1px solid #93c5fd;
            }
            
            .toast-warning {
                background-color: #fef3c7;
                color: #92400e;
                border: 1px solid #fcd34d;
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(400px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @media (max-width: 768px) {
                .toast {
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Auto remove after duration
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ============================================================================
// 2. FORM VALIDATION
// ============================================================================

/**
 * Validate required fields in a form
 * @param {HTMLElement} form - The form element to validate
 * @returns {boolean} - True if form is valid
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            field.addEventListener('input', () => {
                field.classList.remove('error');
            });
            isValid = false;
        }
    });

    if (!isValid) {
        showToast('Please fill in all required fields', 'error');
    }

    return isValid;
}

/**
 * Add validation styles to CSS
 */
function initializeFormValidation() {
    const style = document.createElement('style');
    style.innerHTML = `
        input.error,
        select.error,
        textarea.error {
            border-color: #dc2626 !important;
            background-color: #fef2f2 !important;
        }
        
        input.error:focus,
        select.error:focus,
        textarea.error:focus {
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
}

// ============================================================================
// 3. SEARCH FUNCTIONALITY
// ============================================================================

/**
 * Initialize search functionality for tables
 */
function initializeSearch() {
    const searchInputs = document.querySelectorAll('.search-input');

    searchInputs.forEach(searchInput => {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const tableId = searchInput.id.replace('Search', 'TableBody');
            const tableBody = document.getElementById(tableId);

            if (!tableBody) return;

            const rows = tableBody.querySelectorAll('tr');

            rows.forEach(row => {
                const rowText = row.textContent.toLowerCase();
                const isMatch = rowText.includes(searchTerm);
                row.style.display = isMatch ? '' : 'none';
            });

            // Show message if no results
            const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
            if (visibleRows.length === 0 && searchTerm.length > 0) {
                showToast('No results found', 'info');
            }
        });
    });
}

// ============================================================================
// 4. FORM SUBMISSION HANDLERS
// ============================================================================

/**
 * Handle donor form submission
 */
function initializeDonorForm() {
    const form = document.getElementById('donorForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm(form)) return;

        const formData = {
            id: `#D${Math.floor(Math.random() * 10000)}`,
            name: form.querySelector('#donorName').value,
            age: form.querySelector('#donorAge').value,
            blood: form.querySelector('#donorBlood').value,
            city: form.querySelector('#donorCity').value,
            phone: form.querySelector('#donorPhone').value
        };

        // Add row to table - order: ID, Name, Age, Blood Group, City, Contact, Status, Actions
        const tableBody = document.getElementById('donorTableBody');
        if (tableBody) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${formData.id}</td>
                <td>${formData.name}</td>
                <td>${formData.age}</td>
                <td><span class="blood-badge">${formData.blood}</span></td>
                <td>${formData.city}</td>
                <td>${formData.phone}</td>
                <td><span class="status-badge approved">Available</span></td>
                <td>
                    <button class="btn-icon edit" title="Edit" onclick="showToast('Edit feature coming soon', 'info')">✏️</button>
                    <button class="btn-icon delete" title="Delete" onclick="deleteRow(this)">🗑️</button>
                </td>
            `;
            tableBody.insertBefore(newRow, tableBody.firstChild);
        }

        form.reset();
        showToast('Donor added successfully!', 'success');
    });
}

/**
 * Handle blood inventory form submission
 */
function initializeBloodForm() {
    const form = document.getElementById('bloodForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm(form)) return;

        const formData = {
            id: `#B${Math.floor(Math.random() * 10000)}`,
            bloodGroup: form.querySelector('#bloodGroup').value,
            quantity: form.querySelector('#quantity').value,
            collectionDate: form.querySelector('#collectionDate').value,
            expiryDate: form.querySelector('#expiryDate').value,
            hospital: form.querySelector('#hospital').value,
            status: 'Available'
        };

        // Calculate days left
        const expiry = new Date(formData.expiryDate);
        const today = new Date();
        const daysLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

        // Add row to table - order: Stock ID, Blood Group, Quantity, Collection, Expiry, Hospital, Days Left, Status, Actions
        const tableBody = document.getElementById('bloodTableBody');
        if (tableBody) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${formData.id}</td>
                <td><span class="blood-badge">${formData.bloodGroup}</span></td>
                <td>${formData.quantity} units</td>
                <td>${formData.collectionDate}</td>
                <td>${formData.expiryDate}</td>
                <td>${formData.hospital}</td>
                <td>${daysLeft}</td>
                <td><span class="status-badge approved">Available</span></td>
                <td>
                    <button class="btn-icon edit" title="Edit" onclick="showToast('Edit feature coming soon', 'info')">✏️</button>
                    <button class="btn-icon delete" title="Delete" onclick="deleteRow(this)">🗑️</button>
                </td>
            `;
            tableBody.insertBefore(newRow, tableBody.firstChild);
        }

        form.reset();
        showToast('Blood record added successfully!', 'success');
    });
}

/**
 * Handle patient form submission
 */
function initializePatientForm() {
    const form = document.getElementById('patientForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm(form)) return;

        const formData = {
            id: `#P${Math.floor(Math.random() * 10000)}`,
            name: form.querySelector('#patientName').value,
            bloodGroup: form.querySelector('#patientBlood').value,
            hospital: form.querySelector('#hospital').value,
            units: form.querySelector('#units').value,
            condition: form.querySelector('#patientDisease').value,
            phone: form.querySelector('#patientPhone').value
        };

        // Add row to table - order must match table headers: ID, Name, Blood Group, Hospital, Units, Condition, Status, Actions
        const tableBody = document.getElementById('patientTableBody');
        if (tableBody) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${formData.id}</td>
                <td>${formData.name}</td>
                <td><span class="blood-badge">${formData.bloodGroup}</span></td>
                <td>${formData.hospital}</td>
                <td>${formData.units}</td>
                <td>${formData.condition}</td>
                <td><span class="status-badge pending">Pending</span></td>
                <td>
                    <button class="btn-icon edit" title="Edit" onclick="showToast('Edit feature coming soon', 'info')">✏️</button>
                    <button class="btn-icon delete" title="Delete" onclick="deleteRow(this)">🗑️</button>
                </td>
            `;
            tableBody.insertBefore(newRow, tableBody.firstChild);
        }

        form.reset();
        showToast('Patient added successfully!', 'success');
    });
}

/**
 * Handle request form submission
 */
function initializeRequestForm() {
    const form = document.getElementById('requestForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm(form)) return;

        const statusValue = form.querySelector('#requestStatus').value;
        const statusMap = {
            hospital: form.querySelector('#patientId').value,
            bloodGroup: form.querySelector('#requestBlood').value,
            quantity: form.querySelector('#requestQty').value,
            requestDate: form.querySelector('#requestDate').value,
            status: statusValue
        };

        // Add row to table - order: Request ID, Hospital, Blood Group, Units, City, Urgency, Date, Status, Actions
        const tableBody = document.getElementById('requestTableBody');
        if (tableBody) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${formData.id}</td>
                <td>${formData.hospital}</td>
                <td><span class="blood-badge">${formData.bloodGroup}</span></td>
                <td>${formData.quantity}</td>
                <td>-</td>
                <td><span class="status-badge ${statusMap[formData.status]}">${statusValue.charAt(0).toUpperCase() + statusValue.slice(1)}</span>
        const tableBody = document.getElementById('requestTableBody');
        if (tableBody) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${formData.id}</td>
                <td>${formData.patientId}</td>
                <td><span class="blood-badge">${formData.bloodGroup}</span></td>
                <td>${formData.quantity} units</td>
                <td>${formData.requestDate}</td>
                <td><span class="status-badge ${statusMap[formData.status]}">${statusValue.charAt(0).toUpperCase() + statusValue.slice(1)}</span></td>
                <td>
                    <button class="btn-icon edit" title="Edit" onclick="showToast('Edit feature coming soon', 'info')">✏️</button>
                    <button class="btn-icon delete" title="Delete" onclick="deleteRow(this)">🗑️</button>
                </td>
            `;
            tableBody.insertBefore(newRow, tableBody.firstChild);
        }

        form.reset();
        showToast('Request created successfully!', 'success');
    });
}

// ============================================================================
// 5. TABLE ACTIONS
// ============================================================================

/**
 * Delete a table row
 * @param {HTMLElement} button - The delete button that was clicked
 */
function deleteRow(button) {
    if (confirm('Are you sure you want to delete this record?')) {
        const row = button.closest('tr');
        row.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            row.remove();
            showToast('Record deleted successfully', 'success');
        }, 300);
    }
}

/**
 * Initialize edit button handlers
 */
function initializeEditButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            showToast('Edit feature coming soon - Connect to backend', 'info');
        }
    });
}

// ============================================================================
// 6. NAVIGATION HIGHLIGHTING
// ============================================================================

/**
 * Highlight current page in navigation
 */
function highlightCurrentNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ============================================================================
// 7. INITIALIZE ALL FUNCTIONALITY
// ============================================================================

/**
 * Handle blood need form submission
 */
function initializeBloodNeedForm() {
    const form = document.getElementById('bloodNeedForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm(form)) return;

        const formData = {
            id: `#NEED${Math.floor(Math.random() * 10000)}`,
            needType: form.querySelector('#needType').value,
            name: form.querySelector('#needName').value,
            phone: form.querySelector('#needPhone').value,
            bloodGroup: form.querySelector('#needBlood').value,
            quantity: form.querySelector('#needQuantity').value,
            urgency: form.querySelector('#needUrgency').value,
            location: form.querySelector('#needLocation').value,
            city: form.querySelector('#needCity').value,
            description: form.querySelector('#needDescription').value
        };

        // Create new blood need card
        const needsList = document.getElementById('bloodNeedsList');
        if (needsList) {
            const newNeedCard = document.createElement('div');
            newNeedCard.className = 'blood-need-card';
            
            const urgencyClass = formData.urgency === 'critical' ? 'critical' : 
                                formData.urgency === 'urgent' ? 'urgent' : 'normal';
            const urgencyText = formData.urgency === 'critical' ? 'Critical - Within 24hrs' :
                               formData.urgency === 'urgent' ? 'Urgent - Within 3 days' : 'Normal - Within a week';
            const urgencyIcon = formData.urgency === 'critical' ? 'fa-warning' :
                               formData.urgency === 'urgent' ? 'fa-exclamation-triangle' : 'fa-info-circle';

            newNeedCard.innerHTML = `
                <div class="need-header">
                    <div class="need-title-section">
                        <h4>${formData.name}</h4>
                        <span class="urgency-badge ${urgencyClass}"><i class="fas ${urgencyIcon}"></i> ${urgencyText}</span>
                    </div>
                    <div class="blood-group-large">${formData.bloodGroup}</div>
                </div>

                <div class="need-info-grid">
                    <div class="need-info-item">
                        <i class="fas fa-map-pin"></i>
                        <div>
                            <p class="info-label">Location</p>
                            <p class="info-value">${formData.location}, ${formData.city}</p>
                        </div>
                    </div>

                    <div class="need-info-item">
                        <i class="fas fa-droplet"></i>
                        <div>
                            <p class="info-label">Units Needed</p>
                            <p class="info-value">${formData.quantity} units</p>
                        </div>
                    </div>

                    <div class="need-info-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <p class="info-label">Contact</p>
                            <p class="info-value">${formData.phone}</p>
                        </div>
                    </div>

                    <div class="need-info-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <p class="info-label">Needed By</p>
                            <p class="info-value">${urgencyText}</p>
                        </div>
                    </div>
                </div>

                ${formData.description ? `
                <div class="need-description">
                    <p><strong>Details:</strong> ${formData.description}</p>
                </div>
                ` : ''}

                <div class="need-actions">
                    <button class="btn btn-primary btn-respond" onclick="respondToNeed(this)">
                        <i class="fas fa-handshake"></i> I Can Help
                    </button>
                    <button class="btn btn-secondary btn-share" onclick="shareNeed(this)">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button class="btn btn-secondary btn-details" onclick="viewDetails(this)">
                        <i class="fas fa-info-circle"></i> More Details
                    </button>
                </div>
            `;

            needsList.insertBefore(newNeedCard, needsList.firstChild);
        }

        form.reset();
        showToast(`Blood need posted! Help request visible to ${Math.floor(Math.random() * 5000) + 1000}+ donors in your area.`, 'success');
    });
}

/**
 * Respond to a blood need
 */
function respondToNeed(button) {
    const card = button.closest('.blood-need-card');
    const bloodGroup = card.querySelector('.blood-group-large').textContent;
    const location = card.querySelector('.need-info-item:nth-child(1) .info-value').textContent;
    
    showToast(`✅ Great! We've notified them that you can donate ${bloodGroup} blood. Check back for confirmation at ${location}`, 'success');
    
    // Change button state
    button.disabled = true;
    button.style.opacity = '0.6';
    button.innerHTML = '<i class="fas fa-check-circle"></i> Help Confirmed';
}

/**
 * Share a blood need
 */
function shareNeed(button) {
    const card = button.closest('.blood-need-card');
    const name = card.querySelector('.need-title-section h4').textContent;
    const bloodGroup = card.querySelector('.blood-group-large').textContent;
    
    showToast(`📤 Shared "${name} needs ${bloodGroup}" with your network!`, 'info');
}

/**
 * View full details of blood need
 */
function viewDetails(button) {
    const card = button.closest('.blood-need-card');
    const allInfo = card.querySelector('.need-description')?.textContent || 'No additional details';
    
    showToast(allInfo, 'info', 5000);
}

// ============================================================================
// INITIALIZE ALL FUNCTIONALITY ON PAGE LOAD
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initializeFormValidation();
    initializeSearch();
    initializeDonorForm();
    initializeBloodForm();
    initializePatientForm();
    initializeRequestForm();
    initializeBloodNeedForm();
    initializeEditButtons();
    highlightCurrentNav();

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Escape to close modals (for future implementation)
        if (e.key === 'Escape') {
            const toast = document.querySelector('.toast');
            if (toast) toast.remove();
        }
    });

    // Log initialization
    console.log('🩸 Blood Bank Management System initialized');
    console.log('Features: Form validation, Search, CRUD operations, Toast notifications, Blood Needs Feed');
});

// ============================================================================
// 8. UTILITY FUNCTIONS
// ============================================================================

/**
 * Format date to readable format
 * @param {string} dateString - Date string
 * @returns {string} - Formatted date
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Deep clone object
 * @param {Object} obj - Object to clone
 * @returns {Object} - Cloned object
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
